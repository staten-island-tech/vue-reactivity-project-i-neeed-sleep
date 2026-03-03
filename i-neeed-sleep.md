# Feedback – i-neeed-sleep

You started an ambitious pixel art side-scroller game with custom sprite art, a background selector, and a pause menu. The concept and pixel art assets are impressive. However, almost all of the game logic is commented out, and a few critical bugs would prevent the app from loading.

## Vite CLI – Mastery
`package.json` correctly includes `vite` and `@vitejs/plugin-vue` as dev dependencies with `vue` / `vue-router` as production dependencies.

## Iteration in Vue (v-for) – Approaching
Inside the pause menu, you use `v-for` with `:key` for background choices:
```html
<bgChoice v-for="bg in bgs" :key="bg.name" :bg="bg">{{ bg.name }}</bgChoice>
```
`bgs` is properly wrapped in `ref([...])`. The key is the background name.

## Data Binding – Approaching
`bgs`, `score`, `pauseGame`, `choosing`, etc. are all correctly declared as `ref` values and bound in the template with `v-if` and `@click`.

## Click Methods – Approaching
The pause menu buttons work:
```html
<button @click="pauseGame = false">Continue Game</button>
<button @click="choosing=true">Change Background</button>
```
However, the main game events are broken or commented out:
1. `@keydown.space=jump` — `jump` function is commented out and not defined.
2. `currentFrame = ref(run1)` — `run1` is not imported or defined. This would throw a `ReferenceError` and prevent the app from loading.

Fix the `currentFrame` line by importing or removing it:
```js
// Either import the asset:
import run1 from '@/assets/run1.png'
// Or use a string path:
const currentFrame = ref('/src/assets/run1.png')
```

## Reactive UI – Approaching
The pause overlay with `v-if="pauseGame"` and the background choices with `v-if="choosing"` work reactively. But the game itself (player movement, scoring, obstacle spawning) is all commented out.

## Semantic HTML – Not Yet
The game elements (`.bg`, `.player`, `.cone`) are all `<div>` elements with no semantic meaning. Using `<main>` for the game area and `<nav>` or `<aside>` for the pause menu would be more appropriate.

## BEM CSS – Not Yet
Class names used: `.bg`, `.player`, `.cone`. These are very generic and don't follow BEM. BEM would look like:
- `.game-screen` (block)
- `.game-screen__player` (element)
- `.game-screen__obstacle` (element — instead of `.cone`)
- `.pause-menu` (block)
- `.pause-menu__btn` (element)

## Bonus – Aesthetics
The pixel art sprites and background art show real creativity and effort. The color palette (antiquewhite, #1A1423 dark background, #FFC15E buttons) gives it a retro feel. This has real potential if the game logic is uncommented and wired up.

## Summary of Critical Fixes
- **Bug:** `const currentFrame = ref(run1)` — `run1` is undefined. Import it first: `import run1 from '@/assets/run1.png'`.
- **Uncomment and implement the jump function** — it's written but commented out. Ensure the `jump` function is defined before using it in `@keydown.space=jump`.
- Fix `font-weight: 400px` and `font-weight: 200px` — font-weight doesn't use px, just the number: `font-weight: 400`.
- Note: `@keydown` on a `<div>` requires `tabindex="0"` for the element to receive keyboard events.
- Rename CSS classes to BEM: `.game-screen`, `.game-screen__player`, `.game-screen__obstacle`.
