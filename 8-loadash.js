const ld = require("lodash")

const arr = [1,[2,[3,[4]]]]
console.log(ld.flattenDeep(arr))
