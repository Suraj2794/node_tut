const names = require("./name")
const sayHi = require("./call")
const data = require("./checking_export_modules")
const sum = require("./calling_external")

console.log(data)
sayHi(names.michael)
sayHi(names.phillips)

if (names.james != undefined){
    sayHi(names.james)
}

sum()
