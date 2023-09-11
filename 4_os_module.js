const os = require('os')
// info about current user 
const user = os.userInfo()
console.log(user)

// system uptime 
const uptime = os.uptime()
console.log(uptime / 3600)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOs)

