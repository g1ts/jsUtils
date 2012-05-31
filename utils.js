// Null-safe access to properties (like as ?. in java)
function nsa(o,s){var s = s.split('.'); var o = o; for(var i in s){if(o){o=o[s[i]]}else{return o}}return o}}
