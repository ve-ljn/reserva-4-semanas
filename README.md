# Reserva 4 semanas

An offline app for tracking supplies for a 4-week outage of electricity, water and gas in a Mexican city with a mild climate. The household is 1 adult and 1 six-year-old, and cooking is on a camping stove. Everything fits in a closet, except the water (see below).

## The plan

### How much to keep (28 days)

| Need | Daily | 4-week target | Notes |
|---|---|---|---|
| Drinking and cooking water | 5 L | 140 L (7 garrafones) | Kept indoors, separate from the cisterna |
| Cisterna water (hygiene, WC) | 15 L | 420 L | Not drinkable unless boiled, filtered or treated with chlorine |
| Food | ~3,600 kcal | ~40 kg mixed | Rice, pasta, oats, lentils, cans, powdered milk, oil, peanut butter, cookies, masa |
| Butane cartridges (227 g) | 0.5 | 16 | Foods that cook fast keep gas use low. No dry beans. |

The app also includes light and power, health, hygiene, tools, cash and kid items, about 70 items in total. Completing everything costs roughly **$14–15k MXN in goods plus $4k in small cash**, minus what you already have. The **Por comprar** tab shows the real remaining number.

The 7 garrafones are the bulky part. Put them on the closet floor with food on the shelves above. If they don't fit, store them somewhere else indoors.

### Protecting the cisterna

- Put a padlock on the cisterna lid now (it's on the list).
- Don't tell anyone how much water you have. Avoid using it where people can see, for example washing the car or watering plants during the outage.
- Your drinking water is the indoor garrafones, so it doesn't depend on the cisterna.
- Without electricity the pump can't fill the tinaco anyway. You'll need a hand siphon pump or a bucket on a rope (on the list).
- Good relations with neighbors protect you better than a lock. Having surplus to trade helps keep things friendly.

### How value works

**Value at week 4 = today's price × scarcity multiplier.** These are my estimates:

| Multiplier | Items |
|---|---|
| ×8–15 | Water |
| ×4–5 | Butane, batteries, medicine, coffee, sugar, lighters, oral rehydration salts |
| ×3 | Most food |
| ×1.5–2 | Durable tools |
| ×1 | Cash (keeps its face value) |

You can edit the price and multiplier of any item.

## Features

- **Quick add and subtract:** type a number and tap **+** or **−**. A unit dropdown converts automatically (g↔kg, ml↔L↔garrafón). You can also type `+1.5 kg`, `-200`, `2 garrafones`. Every change has an **Undo** button.
- **Header:** "N of 28 days covered" is the lowest of water, food (from calories) and gas, and the header names whichever runs out first. It also shows value today vs. week 4, the cost to finish, and expiry and backup alerts.
- **Importance:** every item is Crítico, Esencial, Importante or Útil. Critical items are water, cisterna access, chlorine, staple foods, butane, stove, lighters, can opener, flashlight and AA batteries, kids' paracetamol, oral rehydration salts, gauze, band-aids, antiseptic, burn cream, toilet paper, wet wipes, hand sanitizer, soap and trash bags. Importance is the default sort. You can filter to "Solo críticos" (critical only) and change any item's level in Editar.
- **Sorting:** importance, value at week 4 (total), scarcity (multiplier), soonest expiry, days of coverage, % of target, category, name. You can also filter by category and search.
- **Expiry dates:** each item stores its soonest expiry. Items expiring in 30 or 90 days, or already expired, are color-coded.
- **Por comprar:** what's missing, grouped by priority, with today's estimated cost. You can log purchases right there.
- **Trueque (trade):** "I give X of A ≈ Y of B" at week-4 values. It warns you if a trade would drop you below your target and lists your surplus.
- **Ajustes (settings):** daily kcal and water, target days, **JSON export and import**, restore suggested items, and a full reset.
- **A calming quote** under the header. Tap it to see another.
- Dark theme to save battery. Data stays on the phone and is never sent anywhere.

## Getting it on your phone (works offline)

A phone can only install the app for offline use when it's served over https. The simplest free option is GitHub Pages:

1. Create a GitHub repository and upload the 4 files: `index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`.
2. Go to Settings → Pages → Deploy from branch → `main`.
3. Open the resulting URL on your phone and choose **Add to Home Screen** (Android: Chrome menu; iPhone: Safari share button).
4. Open it once while online. After that it works with no internet.

The data lives in the phone's browser storage. **Export a JSON backup** now and then and keep it somewhere off the phone. The app reminds you every 30 days.

To publish an update, upload the new files. When online, opening the app or tapping **↻ Actualizar** loads the newest version. Offline, it uses the saved copy. If you change `sw.js` or the icon or manifest, also bump `CACHE` in `sw.js`. Your inventory data is not affected.
