const path = require('path');
const withReactSvg = require('next-react-svg');
 
module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets'),
  webpack(config, options) {
    return config
  }
});
