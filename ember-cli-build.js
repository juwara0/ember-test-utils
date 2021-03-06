/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    babel: {
      optional: ['es7.decorators']
    },
    sassOptions: {
      includePaths: [
        'node_modules/ember-frost-css-core/scss',
        'node_modules/ember-frost-theme/scss'
      ]
    }
  })

  return app.toTree()
}
