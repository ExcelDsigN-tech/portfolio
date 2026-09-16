# Portfolio

Personal portfolio site for Oduyomi Oluwadamilare Emmanuel. Static HTML/CSS/JS, no build step, no dependencies beyond Google Fonts.

## Deploy to GitHub Pages

1. On GitHub, create a new **public** repo named `portfolio` (no README, no .gitignore).
2. In this folder, run:

```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ExcelDsigN-tech/portfolio.git
git push -u origin main
```

3. On the repo page: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main, folder: / (root) → Save.**
4. Wait a minute, then the site is live at:

```
https://exceldsign-tech.github.io/portfolio/
```

## Updating later

Edit `index.html` (or replace `images/headshot.jpg`), then:

```
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages redeploys automatically within a minute or two.
