# Social ThreatFinder (STF) Site

STF's frontend built using Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages). Designed to be built on top of [STF's API](https://github.com/lryanle/threatfinder-api).

**Demo: [https://stf-site.vercel.app/](https://stf-site.vercel.app/)**

# Setup

- [Social ThreatFinder (STF) Site](#social-threatfinder-stf-site)
- [Setup](#setup)
  - [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Step 2. Run Next.js locally in development mode](#step-2-run-nextjs-locally-in-development-mode)

## Step 1. Set up the environment

Use the Deploy Button below, you'll deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example). **This will publish a local example using vercel (developers of Next.js)**

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that Vercel created for you and from the root directory of your local checkout.
Then link your clone to Vercel:

```bash
npx vercel link
```

Download necessary materials (usually env variables) needed to connect Next.js:

```bash
npx vercel env pull
```

<details>
<summary>You can also bootstrap it manually</summary>

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io):

```bash
npx create-next-app
```

or

```bash
yarn create next-app
```

or

```bash
pnpm create next-app
```

</details>

## Step 2. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

or

```bash
yarn install && yarn dev
```

The site should be up and running on [http://localhost:3000](http://localhost:3000).

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flryanle%2Fstf-site&repository-name=stf-site&project-name=stf-site&demo-title=Social%20ThreatFinder%20Site&demo-description=Live%20STF%20site%20deployed%20with%20a%20phishing%20dashboard%20and%20interface&demo-url=https%3A%2F%2Fstf-site.vercel.app%2F
