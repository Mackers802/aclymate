
const { schema, body } = require("./dataFile.js")

const schemaChecker = function(a, b){
    for (let [ key ] of Object.entries(b)){
        if(typeof a[key] === b[key].type){
            if(b[key].required && typeof a[key] === undefined){
            }
        } else {
            return false
        }
    }
    return true
}

console.log(schemaChecker(body, schema))