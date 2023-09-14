//path
const path = require('path')
console.log(path.sep)
const filePath = path.join('./content', 'subfolder', 'content.txt')
console.log(filePath)
const baseFile = path.basename(filePath)
console.log(baseFile)