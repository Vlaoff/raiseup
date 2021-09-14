const prettierConfigStandard = require('prettier-config-standard')
const { merge } = require('lodash')

const modifiedConfig = merge({}, prettierConfigStandard, {})

module.exports = modifiedConfig
