Statamic Theme Boilerplate
==========================

Boilerplate for building Statamic themes with SASS, Tailwind, Vue, and Webpack.

Setup
-----

1. Clone the repository and place the `boilerplate` folder in your Statamic installations themes folder, typically `site/themes/`.
2. Rename the boilerplate folder and update `meta.yaml` accordingly.
3. From the themes folder, pull down the node dependencies with `yarn install`.
4. Startup Webpack to watch and compile your SASS and JS, `npm run watch`.

Expected Settings
-----------------

Expected Fieldsets
------------------

- Page
- Collections
- Assets

Expected Globals
----------------

- Site Name: `site_name`, text
- Navigation Menu: `navigation_menu`, replicator (see example in repository)

Layout
------
