const os = require('os')

const user = os.userInfo()

console.log(user)

console.log(`The system is up for ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release,
    totalMem: os.totalmem(),
}

console.log(currentOs)