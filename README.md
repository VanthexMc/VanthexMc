# VanthexMc – sito

Frontend React/Vite pubblicato su **GitHub Pages**, con **Base44 come backend**
(database, login, funzioni). App ID: `6ac3b2cd1c34669978cf7ac9`.

## Pubblicare su GitHub Pages

1. Carica tutto il contenuto di questa cartella nel repository (branch `main`).
2. Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Ad ogni push parte il workflow `.github/workflows/deploy.yml`, che compila il sito
   e lo pubblica su `https://antimetamc.github.io/NoxarisMc/`.
   Lo stato si vede nella scheda **Actions**.

## Provarlo sul PC

```bash
npm install
npm run dev
```

## Cartella `base44/`

Contiene le definizioni del backend (entità `Event`, `StaffApplication`, funzioni
`publishEvent` e `discordStaffCheck`, connettore Discord). Restano **su Base44**:
il sito su GitHub Pages le richiama tramite l'SDK.
