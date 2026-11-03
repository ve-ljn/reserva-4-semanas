// Guarda la app en el teléfono para que abra sin internet.
// La página se pide primero a la red (para que "Actualizar" traiga la versión nueva) y, si no hay
// conexión en 3 s, se usa la copia guardada. El resto de archivos sale de la caché y se actualiza en segundo plano.
const CACHE='reserva4s-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const put=res=>{
    if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return res;
  };
  if(e.request.mode==='navigate'){
    const timeout=new Promise((_,reject)=>setTimeout(reject,3000));
    e.respondWith(Promise.race([fetch(e.request).then(put),timeout])
      .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fetch(e.request).then(put).catch(()=>hit);
    return hit||net;
  }));
});
