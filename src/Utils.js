// eslint-disable-next-line import/no-webpack-loader-syntax
import doc from 'js-yaml-loader!./TextContent.yaml'
const getText = function getText () {
  return doc
}
export default getText
