<img src="./.github/asset/illustration/wave_header.svg" width="100%" />

<h1 id="top" align="center">
  <img src="./.github/asset/icon/astro.svg" width="28px" align="center" />
  Astro lang i18n
</h1>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<pre align="center">
  <a href="#installation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">🛰️ USAGE</a>
</pre>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<img src="./.github/asset/illustration/astro_i18n_cover.svg" width="100%" />

<br />

<div align="center">
  <img src="./.github/asset/illustration/bun_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/github_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/typescript_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/astro_badge.svg" height="34px" />&nbsp;&nbsp;&nbsp;
</div>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="about">
  <img src="./.github/asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border="0">
<tr>
<td>
Light library designed for Astro projects that need to manage multilingual dynamic routes with multiple levels of depth, maintaining impeccable SEO.
</td>
</tr>
</table>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="table-of-content">
  <img src="./.github/asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./.github/asset/icon/information.svg" width="20px" align="center" /> About](#about)
- [<img src="./.github/asset/icon/satellite.svg" width="20px" align="center" /> Features](#features)
- [<img src="./.github/asset/icon/thunder.svg" width="20px" align="center" /> Requirements](#requirements)
- [<img src="./.github/asset/icon/package.svg" width="20px" align="center" /> Installation](#installation)
- [<img src="./.github/asset/icon/rocket.svg" width="20px" align="center" /> Usage](#usage)
- [<img src="./.github/asset/icon/gear.svg" width="20px" align="center" /> Configuration](#configuration)

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" />

<h2 id="requirements">
  <img src="./.github/asset/icon/thunder.svg" width="24px" align="center" />
  Requirements
</h2>

- <img src="./.github/asset/icon/node.svg" width="20px" align="center" /> node >= **22.17.0**
- <img src="./.github/asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="installation">
  <img src="./.github/asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

<h3><img src="./.github/asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D astro-lang-i18n
```

<h3><img src="./.github/asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D astro-lang-i18n
```

<h3><img src="./.github/asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D astro-lang-i18n
```

<h3><img src="./.github/asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D astro-lang-i18n
```

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<h2 id="usage">
  <img src="./.github/asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

To start using the package, you have a some options: 

- Case 1: use always `/[lang]` in your routes, and then use the `getI18n` function to get the translations for the current language. e.g: `/en` for english and `/fr` for french, but the default language is english, so the route for english will be `/en` and the route for french will be `/fr`. therefore, you will have to redirect the user to the correct route based on their language preference, or you can use a middleware to do that for you.

You will end with routes like this: `["/en", "/fr"]` and `/` redirect to `/en`.

- Case 2: or have your default language as `/[defaultLang]` and then have translated routes with `/[lang]` and use the `getI18n` function to get the translations for the current language. E.g: `/en` for english and `/fr` for french, but the default language is english, so the route for english will be `/` and the route for french will be `/fr`.

You will end with routes like this: `["/", "/fr"]` and `/` will be the default language route.

IMPORTANT: This library is flexible and can adapt to both cases, but you have to choose one of them and stick to it, otherwise you will end with a lot of duplicated routes and a lot of confusion.

Also this library should to be used in modules so you can have different modules with different routes and different translations, yo don`t define a big object with all your routes and all your translations, you can have a module for the landing page, a module for the dashboard, a module for the admin panel, etc... and each module will have its own routes and its own translations.

### Routing

Start creating your routes in the `landing_router.ts` file.

```ts
const landingRouter = {
  es: {
    aboutUs: '/es/sobre-nosotros',
    home: '/es'
  },
  en: {
    aboutUs: '/en/about-us',
    home: '/en'
  },
  fr: {
    aboutUs: '/fr/a-propos-de-nous',
    home: '/fr'
  }
};

export { landingRouter };
```

we are going to make for Case 2 translated routes. 

Then in your page, you can use the `getDynamicLangRoute` function to generate the static paths for your page based on the router you defined. e.g: `/[lang]/[about_us].astro` for the about us page.

```ts
---
import { defaultLanguage } from 'src/configuration/language';
import { landingRouter } from 'src/router/landing_router';
import { getDynamicLangRoute } from 'astro-lang-i18n';

export const getStaticPaths = () => {
  return getDynamicLangRoute({
    mappings: { about_us: 'aboutUs' },
    router: landingRouter,
    defaultLang: defaultLanguage,
    excludeDefaultLang: true
  });
};
---
<AboutUsPage />
```

Mapping is used to map the parameter name in the file name to the route key in the router, e.g: `about_us` in the file name is mapped to `aboutUs` in the router.

Then you add `pages/index.astro` for the home page.

```ts
---
import LandingPage from 'src/component/landing_page.astro';
import { defaultLanguage } from 'src/configuration/language';
import { landingRouter } from 'src/router/landing_router';
import { getDynamicLangRoute } from 'astro-lang-i18n';

export const getStaticPaths = () => {
  return getDynamicLangRoute({
    mappings: { home: 'home' },
    router: landingRouter,
    defaultLang: defaultLanguage,
    excludeDefaultLang: true
  });
};
---
<LandingPage />
```

And for the about us page you create `pages/about_us.astro`.

```ts
---
import AboutUsPage from 'src/component/about_us_page.astro';
---
<AboutUsPage />
```

If you have more than one page in the same module, you can create a folder for that module and then create the pages inside that folder, e.g: `pages/[lang]/[dashboard]/[settings].astro` for the settings page in the dashboard module.

This example: 

```ts
const dashboardRouter = {
  en: {
    settings: '/en/administrador/settings'
  },
  es: {
    settings: '/es/dashboard/configuracion'
  },
  fr: {
    settings: '/fr/admin/parametres'
  }
};

getDynamicLangRoute({
  mappings: {
    dashboard: 'settings',
    settings: 'settings'
  },
  router: dashboardRouter,
  defaultLang: defaultLanguage,
  excludeDefaultLang: true
});
```

Result in this 

```ts
[
  {
    params: { lang: 'es', dashboard: 'dashboard', settings: 'configuracion' }
  },
  {
    params: { lang: 'fr', dashboard: 'admin', settings: 'parametres' }
  }
]
```

### Translations

For start and having the language as a global variable, you can use the `Astro.locals` to get the current language in any component. you need to set the language in the `Astro.locals` in the `src/middleware.ts` file, so you can access it in any component.

```ts
import { sequence, defineMiddleware } from 'astro:middleware';
import { defaultLanguage, supportedLanguages } from 'src/configuration/language';
import { i18nMiddleware } from 'src/util/i18n_middleware';

const i18nSetup = defineMiddleware(async (context, next) => {
  return i18nMiddleware({
    context,
    next,
    defaultLanguage,
    supportedLanguages
  });
});

const onRequest = sequence(i18nSetup);

export { onRequest };
```

To get the translations for the current language, you can use the `getI18n` function in your component. e.g: `src/component/landing_page.astro`.

```ts
const landingLocale = {
  en: {
    title: 'Welcome to our website'
  },
  es: {
    title: 'Bienvenido a nuestro sitio web'
  },
  fr: {
    title: 'Bienvenue sur notre site web'
  }
};
```

```ts
---
import { landingLocale } from 'src/locales/landing_locale';
import { getI18n } from 'astro-lang-i18n';

const { language } = Astro.locals;
const i18n = getI18n(language, landingLocale);
---
<h1>{i18n.title}</h1>
```

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
/>

<pre align="center">
  Copyright © All rights reserved,
  developed by LuisdaByte and
</pre>
<div align="center">
  <img src="./.github/asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./.github/asset/illustration/wave_footer.svg" width="100%" />