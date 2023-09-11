const name = require('./1_module')
const sayHi = require('./2_moduleExp')

sayHi(name.Arnab)
sayHi(name.Ribhu)

require('./3_mind_grenade')