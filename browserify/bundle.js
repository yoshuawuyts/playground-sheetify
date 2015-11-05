const browserify = require('browserify')
const path = require('path')

browserify(path.join(__dirname, './index.js'))
  .bundle()
  .pipe(process.stdout)
