(function(){var isPrimitive=function isPrimitive(o){return o==null||typeof o!=="object"&&typeof o!=="function"};var doesDefinePropertyWork=function doesDefinePropertyWork(object){try{Object.defineProperty(object,"sentinel",{});return"sentinel"in object}catch(exception){return false}};if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({});var definePropertyWorksOnDom=typeof document==="undefined"||doesDefinePropertyWork(document.createElement("div"));if(
!definePropertyWorksOnObject||!definePropertyWorksOnDom){var definePropertyFallback=Object.defineProperty}}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR="Property description must be an object: ";var ERR_NON_OBJECT_TARGET="Object.defineProperty called on non-object: ";var ERR_ACCESSORS_NOT_SUPPORTED="getters & setters can not be defined on this javascript engine";Object.defineProperty=function defineProperty(object,property,descriptor){if(isPrimitive(object)){
throw new Error(ERR_NON_OBJECT_TARGET+object)}if(isPrimitive(descriptor)){throw new Error(ERR_NON_OBJECT_DESCRIPTOR+descriptor)}if(definePropertyFallback){try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}}if("value"in descriptor){object[property]=descriptor.value}return object}}})();
if(!Object.keys){Object.keys=function(){var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!{toString:null}.propertyIsEnumerable("toString"),dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;return function(obj){if(typeof obj!=="object"&&typeof obj!=="function"||obj===null){throw new TypeError("Object.keys called on non-object")}var result=[];for(var prop in obj){if(
hasOwnProperty.call(obj,prop)){result.push(prop)}}if(hasDontEnumBug){for(var i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i])){result.push(dontEnums[i])}}}return result}}()}
====================================================
====================Beautified Below================
ocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            dontEnumsLength = dontEnums.length;
        return function(obj) {
            if (typeof obj !== "object" && typeof obj !== "function" || obj === null) {
                throw new TypeError("Object.keys called on non-object")
            }
            var result = [];
            for (var prop in obj) {
                if (
                    hasOwnProperty.call(obj, prop)) {
                    result.push(prop)
                }
            }
            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i])
                    }
                }
            }
            return result
        }
    }()
}