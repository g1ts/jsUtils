// Null-safe access to properties (like as ?. in java)
function nsa(o,s){var s=s.split('.');var o=o;for(var i in s){if(o){o=o[s[i]]}else{return o}}return o}

// random 
function randomString(l, chars){
        var chars = chars || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
        var l = l || Math.floor(Math.random() * chars.length);
        var s = '';
        for (var i = 0; i < l; i++) {
                s += chars[Math.floor(Math.random() * chars.length)];
        }
        return s;
}
function randomHex(l){return randomString(l,'0123456789abcdef'.split(''))}
function randomHexBytes(l){return randomHex(l*2)}	// 0x00 - one byte
