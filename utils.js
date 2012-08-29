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

// pipe for chart
P = {
	_l:5,
	setL:function(l){
		this._l=l;
		if(this.a.length>l){this.a.length=l;}
		this.p=0;
	},
	a:[],
	p:0,
	_incp:function(p){
		p++;
		if(p>=this._l){p=0;}
		return p;
	},
	print:function(){
		var s='';
		var p = this.p;
		for(var i=0;i<this.a.length;i++){
			s+=this.a[p]+' ';
			p=this._incp(p);
		}
		console.log(s);
	},
	push:function(v){
		if(this.a.length<this._l){
			this.a.push(v)
		}else{
			this.a[this.p]=v;
			this.p=this._incp(this.p);
		}
	}
}
