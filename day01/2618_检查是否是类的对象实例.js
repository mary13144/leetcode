/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
    if (obj == null||obj == undefined || classFunction ==null||classFunction == undefined)
        return false
    let proto = Object.getPrototypeOf(obj)
    let prototype = classFunction.prototype
    while (true){
        if (!proto){
            return false
        }
        if (proto === prototype)
            return true
        proto = Object.getPrototypeOf(proto)
    }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
