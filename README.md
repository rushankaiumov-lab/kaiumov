# kaiumov

Статический лендинг для аренды в Испании. **Страница сайта:** правьте `Familia Kaiumov.html`, затем выполните `npm run prebuild` (или `npm run build`) и закоммитьте вместе с обновлённым `index.html` — это копия для GitHub Pages при публикации из ветки.

**Локально:** `npm install` → `npm run dev`.

**GitHub Pages:** в репозитории **Settings → Pages → Build and deployment → Source** лучше выбрать **GitHub Actions** — тогда сайт собирается из Vite (`dist/`). Если выбрана публикация **из ветки `main`**, в корне уже есть `index.html` и `.nojekyll`, чтобы открывалась вёрстка, а не этот README.

Сайт: `https://rushankaiumov-lab.github.io/kaiumov/`
