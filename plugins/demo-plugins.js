const ReplaceServersURL = require('../decorators/replace-servers-url');
const id = 'demo';

/** @type {import('@redocly/cli').CustomRulesConfig} */
const decorators = {
  oas3: {
    'replace-servers-url': ReplaceServersURL,
  },
};

module.exports = {
  id,
  decorators,
};