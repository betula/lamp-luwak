const { injectBabelPlugin } = require('react-app-rewired');
const rewireMobx = require('react-app-rewire-mobx');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function(config, env){
  config = rewireMobx(config, env);
  config = rewireStyledComponents(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
};
