!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).reactKeyMaker={})}(this,function(e){e.useAutoKeyMaker=function(e){void 0===e&&(e={prefix:"autoKey_",hash:!1});var t=e.prefix,r=e.hash,n=new Map,o=new Map,f=0;if("object"!=typeof e||null===e)throw new Error("Options must be an object.");if("string"!=typeof t)throw new Error("Prefix must be a string.");return{keyGen:function(e){if("object"!=typeof e||null===e)throw new Error("Item must be an object.");var i=function(e){if(!r){var n=""+t+f;return f++,n}var o=function(e){if(!e)return 0;for(var t=0,r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r),t&=2147483647;return t}(JSON.stringify(e));return""+t+o}(e);if(n.has(i))return n.get(i);var u=i;return n.set(i,u),o.set(e,u),u},resetKeyGenerator:function(){n.clear(),o.clear(),f=0}}}});
//# sourceMappingURL=index.umd.js.map
