# Ember-Sails

This was modified directly from a new Sails v0.10.5 application.

The following modifications have been made:

* ``assets``
    * ``js``
        * Added ``application.js`` - as the Ember application entry point
        * dependencies
            * Added ``ember.js``, ``handlebars.js``, ``jquery.js`` symlinks (linked to bower_components)
    * ``templates``
        * Added ``application.hbs`` as the initial Handlebars template
* ``tasks``
    * ``config``
        * Removed ``jst.js``
        * Added ``handlebars.js``
            * Uses ``grunt-ember-templates`` to build templates
            * By default, uses ``assets/templates`` as the ``templateBasePath`` option
            * Output file is ``.tmp/public/template.js``
        * Modified ``sails-linker.js``
            * Modified ``devTpl`` section to reflect output file change to ``.tmp/public/template.js``
    * ``register``
        * Modified ``compileAssets.js`` and ``syncAssets.js`` to point to new Handlebars grunt task instead of JST
    * Modified ``pipeline.js`` to include jQuery and Handlebars dependencies explicitly before the Ember dependency
    * Changed extension on ``templateFilesToInject`` to reflect the change to Handlebars
* ``views``
    * Modified ``layout.ejs`` - moved template section below client-side JS section so that dependent libraries are loaded before the templates are loaded.
* Added ``bower.json``
    * Default dependencies are Ember, Handlebars, and jQuery
* Modified ``package.json`` - added ``grunt-ember-templates`` dependency