# Changelog

All notable changes to this project will be documented in this file.

### Versioning rules

- **MAJOR**: when you make incompatible API changes or big changes in the project.
- **MINOR**: when you add additional functionality
- **PATCH**: with small changes in the project.

One version have a structure like this (semantic version) - (version) - (date)

The list of changes have the description - commit - author.

---

## Released

## 🚀 Version [1.0.0] - 2026-05-07

- **fix:** correct import path for getDynamicLangRoute in [about_us].astro [`285d0da`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/285d0da) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** correct import path for getDynamicLangRoute in index.astro [`67cdd90`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/67cdd90) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** reorder import statements for consistency in index.ts [`e0a7633`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/e0a7633) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** add prePushTask to run tests before pushing changes [`fb5c83c`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/fb5c83c) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** update files entry in package.json to include src/util [`e4ded4b`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/e4ded4b) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **test:** add unit tests for getDynamicLangRoute utility function [`8d89028`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/8d89028) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** replace dynamic language route tests with static language path tests in static_path.test.ts [`26d4ba2`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/26d4ba2) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** update import path for removeLanguageFromUrl in dynamic_path.ts [`1686df2`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/1686df2) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** update import path for getCurrentLanguage in i18n_middleware.ts [`fa0d0d1`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/fa0d0d1) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** reorganize imports and export statements in index.ts [`40e2a0a`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/40e2a0a) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add getDynamicLangRoute utility function for dynamic language routing [`88cc888`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/88cc888) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove unused route_type.ts file [`11d33ba`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/11d33ba) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** simplify getStaticLanguage function and remove unused getDynamicLangRoute [`25f4107`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/25f4107) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **test:** add unit tests for getDynamicLangRoute utility function [`32e61aa`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/32e61aa) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **test:** add unit tests for removeTrailingSlash utility function [`f8a9d09`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/f8a9d09) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **test:** add unit tests for interpolate function [`03ae0b3`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/03ae0b3) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **test:** add unit tests for i18n utility functions [`cdfb8fa`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/cdfb8fa) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add vitest configuration file for testing setup [`27ed5b4`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/27ed5b4) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove unused i18n utility functions from index export [`9306b90`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/9306b90) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** simplify i18n middleware setup by removing defineMiddleware and streamlining initialization [`f62daf5`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/f62daf5) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** update English settings route path in dashboardRouter [`14b9f3d`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/14b9f3d) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **fix:** correct English route paths in landingRouter [`66af83a`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/66af83a) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add test script to package.json for running vitest [`dc275d6`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/dc275d6) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** streamline i18n utility functions by removing unused methods and enhancing getI18n [`af2a22f`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/af2a22f) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove unused i18n route handling logic from middleware [`f4d8d63`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/f4d8d63) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** enhance i18n middleware with dynamic route handling and language redirection [`e4684db`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/e4684db) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** implement getDynamicLangRoute function for dynamic language routing [`43fc807`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/43fc807) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add removeLanguageFromUrl function to clean URLs by removing specified language [`d3e42d7`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/d3e42d7) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add RouteType and AstroComponent types for routing functionality [`9d0ab8d`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/9d0ab8d) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** standardize route keys in landingRouter for consistency [`b88d44e`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/b88d44e) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add dashboard router with localized settings paths [`54701e0`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/54701e0) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove unused buildUrl function from url utility [`b9fe516`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/b9fe516) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove configuration link from README setup section [`ff8f143`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/ff8f143) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove outdated todo list from repository [`6291a42`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/6291a42) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** enhance middleware setup by sequencing i18n configuration [`4f970f7`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/4f970f7) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove unused Base component export from index [`88fd04b`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/88fd04b) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** simplify language handling by removing unused components and updating static paths [`f52929b`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/f52929b) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** remove unused internationalization components and change language feature [`f78df44`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/f78df44) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** implement About Us page and refactor landing page integration [`0dfc6f0`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/0dfc6f0) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add vitest as a dependency for testing framework integration [`699e742`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/699e742) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** update README to reflect package name and usage instructions for astro-lang-i18n [`5b20868`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/5b20868) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **asset:** add astro_i18n_social.png and remove starter_ts_social.png for asset optimization [`18a21ec`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/18a21ec) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add sitemap integration to astro configuration for improved SEO [`6eeac61`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/6eeac61) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **asset:** remove unused SVG assets: eslint_badge.svg and starter_ts_cover.svg [`784a574`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/784a574) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add i18n keywords to package.json for improved discoverability [`21d5192`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/21d5192) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** update astro dependency to version 6.2.2 for improved functionality [`88c5551`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/88c5551) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** enhance internationalization component with force redirect option for improved language handling [`70fd071`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/70fd071) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add starter TypeScript social image asset for enhanced project visibility [`2414039`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/2414039) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add Internationalization component to about-us page for enhanced multilingual support [`fcdd9cb`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/fcdd9cb) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **refactor:** optimize language retrieval in i18n middleware for improved readability [`aa032ac`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/aa032ac) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** integrate Internationalization component for enhanced multilingual support [`9d91d98`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/9d91d98) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** create index file to export internationalization utilities and components [`f54db9a`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/f54db9a) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add node types to tsconfig for improved type checking [`28c353a`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/28c353a) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** update devDependencies for improved compatibility and add glob package [`043bfa7`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/043bfa7) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add internationalization component for multilingual support [`49b7d00`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/49b7d00) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add change language component for multilingual support [`9f94991`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/9f94991) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add about-us and index pages for multilingual support [`28891e3`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/28891e3) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add language configuration for multilingual support [`b6bf91c`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/b6bf91c) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add landing locale definitions for multilingual support [`1f97e57`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/1f97e57) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add landing router for multilingual support [`15a9fe0`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/15a9fe0) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add i18n middleware for handling internationalization requests [`140cdcb`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/140cdcb) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add type definitions for application localization [`a36958f`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/a36958f) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** implement utility functions for internationalization and URL handling [`e67a089`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/e67a089) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add VSCode configuration files for improved development experience [`40234e6`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/40234e6) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **asset:** add SVG illustrations for TypeScript badge, wave header, and wave footer [`792c4c5`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/792c4c5) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add issue and pull request templates for better community engagement [`ea9582b`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/ea9582b) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add tsconfig.json for TypeScript configuration [`e492011`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/e492011) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add README and TODO files for project documentation and task tracking [`b602256`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/b602256) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add astro.config.ts and eslint.config.js for project configuration [`8c8de87`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/8c8de87) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add package.json for project configuration and dependencies [`56ed108`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/56ed108) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add .npmrc for npm configuration settings [`e5a6f18`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/e5a6f18) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add .gitlys.json for pre-commit tasks, release configuration, and changelog generation [`28098de`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/28098de) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add .gitattributes and .gitignore for line ending normalization and ignoring system files [`72c68fb`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/72c68fb) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)
- **feat:** add .editorconfig for consistent coding styles and formatting [`50f9a05`](https://github.com/TheElegantCoding/astro-lang-i18n/commit/50f9a05) by [`@TheElegantCoding`](https://github.com/TheElegantCoding)