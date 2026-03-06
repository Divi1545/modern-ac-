# Deploy to Vercel

## One-time setup

1. **Create a Vercel account** (if needed): [vercel.com/signup](https://vercel.com/signup)

2. **Log in via CLI** (from the `website` folder):
   ```bash
   npx vercel login
   ```
   Follow the prompt (email or GitHub).

## Deploy

From the **website** folder:

```bash
cd website
npx vercel
```

- First run: answer **Set up and deploy?** Yes, link to existing project or create new.
- **Which scope?** Choose your account.
- **Link to existing project?** No (first time) or Yes to use an existing one.
- **Project name:** e.g. `modern-ac-website` or accept the suggested name.
- **In which directory is your code located?** `./` (default).

Subsequent deploys:

```bash
npx vercel --prod
```

Use `--prod` to deploy to production (e.g. `your-project.vercel.app` or your custom domain).

## Custom domain (e.g. modernac.lk)

1. In [Vercel Dashboard](https://vercel.com/dashboard), open your project.
2. Go to **Settings → Domains**.
3. Add your domain (e.g. `modernac.lk` and optionally `www.modernac.lk`).
4. Vercel will show DNS records (A/CNAME). In your domain registrar (where you bought modernac.lk), add those records.
5. Wait for DNS to propagate (minutes to 48 hours). Vercel will issue SSL automatically.

After the domain is verified, production deploys will be served on your custom domain.
