# HomeGlow Landing Page

The marketing site for [HomeGlow](https://github.com/jherforth/HomeGlow), a free, open source, self-hosted smart calendar board and alternative to Skylight, Hearth, and Cozyla.

Built with Vite, React 19, Tailwind CSS 4, and Motion. It builds to a fully static site.

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Deploy with Coolify

The repo includes a multi-stage `Dockerfile` (Node build, nginx serve) so Coolify can build it directly.

1. In Coolify, create a new resource and choose **Public/Private Repository**.
2. Select this repository and the `main` branch.
3. Set **Build Pack** to **Dockerfile**.
4. Set **Ports Exposes** to `80`.
5. Add your domain and deploy. Enable auto-deploy to rebuild on every push.

No environment variables are required.

### Without Docker

Alternatively, use the **Nixpacks** build pack with **Static Site** enabled, build command `npm run build`, and publish directory `dist`. For SPA routing, enable the single-page-app option.

## Run with Docker locally

```bash
docker build -t homeglow-site .
docker run --rm -p 8080:80 homeglow-site
```

## Installing HomeGlow itself

- Docker: `docker pull jherforth/homeglow:latest`
- Proxmox: `bash -c "$(curl -fsSL https://raw.githubusercontent.com/jherforth/HomeGlow/main/proxmox/install-homeglow.sh)"`
