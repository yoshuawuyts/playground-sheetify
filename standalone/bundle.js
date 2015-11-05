const sheetify = require('sheetify')
const path = require('path')

const opts = {
  use: [ [ 'sheetify-cssnext', { sourcemap: false } ] ],
  basedir: __dirname
}

sheetify(path.join(__dirname, 'index.css'), opts, function (err, css) {
  if (err) throw err
  console.log(css)
})
