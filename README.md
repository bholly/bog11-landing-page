# bog11.cloud Landing Page

Angular-21-Landingpage für `bog11.cloud` mit Docker- und Docker-Compose-Setup.

## Lokal entwickeln

```bash
npm install
npm start
```

Danach läuft die App unter `http://localhost:4200`.

## Production Build

```bash
npm run build
```

Der Output landet in `dist/bog11-cloud/browser`.

## Docker

Image bauen:

```bash
docker build -t bog11-cloud .
```

Container starten:

```bash
docker run --rm -p 8080:80 bog11-cloud
```

Danach ist die Seite unter `http://localhost:8080` erreichbar.

## Docker Compose

```bash
docker compose up --build
```

Auch hier läuft die Seite danach unter `http://localhost:8080`.

## Tests

```bash
npm test
```
