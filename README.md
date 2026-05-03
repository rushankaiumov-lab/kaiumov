# Kaiumov rent — сайт для аренды в Испании

Статический сайт (HTML + Vite). Публикация на **GitHub Pages** через Actions.

**Редактируйте страницу в файле `Familia Kaiumov.html`.** Перед `dev` и `build` скрипт копирует его в `index.html` (файл `index.html` в репозиторий не коммитится — он только для Vite).

## Локально

```bash
npm install
npm run dev
```

## Публикация на GitHub

1. Создайте новый репозиторий на GitHub (имя может быть любым, например `kaiumov-rent-spain`).
2. Загрузите этот проект в репозиторий, ветка **`main`**:

   ```bash
   cd kaiumov-rent-spain
   git remote add origin https://github.com/<ваш-логин>/<имя-репо>.git
   git push -u origin main
   ```

3. В репозитории: **Settings → Pages → Build and deployment → Source** выберите **GitHub Actions** (не «Deploy from a branch»).
4. После первого push в `main` откройте вкладку **Actions** — дождитесь зелёного workflow **Deploy to GitHub Pages**.
5. Сайт будет по адресу: `https://<ваш-логин>.github.io/<имя-репозитория>/`

Сборка сама подставляет путь `/<имя-репозитория>/` в `base`, чтобы картинки и стили открывались на GitHub Pages.

### Если репозиторий называется `username.github.io`

Тогда сайт открывается с корня домена, а не из подпапки. В workflow замените шаг сборки на:

```yaml
- name: Build (корень домена)
  env:
    VITE_BASE_PATH: /
  run: npm run build
```

## Сборка вручную

```bash
npm run build
```

Готовые файлы — в папке `dist/` (удобно для любого другого хостинга).
