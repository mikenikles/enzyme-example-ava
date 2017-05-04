require('babel-register')

const { JSDOM } = require('jsdom')
const { window } = new JSDOM('<body></body>')
global.window = window
global.document = window.document
global.navigator = window.navigator
