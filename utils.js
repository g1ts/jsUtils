window.jsUtils = {
  // Null-safe access to properties (like as ?. in java)
  nsa: function(o,s){var s=s.split('.');var o=o;for(var i in s){if(o){o=o[s[i]]}else{return o}}return o},

  // random 
  randomString: function(l, chars){
          var chars = chars || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
          var l = l || Math.floor(Math.random() * chars.length);
          var s = '';
          for (var i = 0; i < l; i++) {
                  s += chars[Math.floor(Math.random() * chars.length)];
          }
          return s;
  },
  randomHex: function(l){return this.randomString(l,'0123456789abcdef'.split(''))},
  randomHexBytes: function(l){return this.randomHex(l*2)}	,// 0x00 - one byte

  // pipe for chart
  P: {
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
  },

  // chars converter
  cc: {
    en:"qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./".split(""),
    ru:"йцуrенгшщзхъфывапролджэячсмитьбю.ЙЦУRЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ.".split(""),
    en2ru: function(s){
      return this.convert(s, this.en, this.ru);
    },
    ru2en: function(s){
      return this.convert(s, this.ru, this.en);
    },
    convert: function(s,arr1,arr2){
      var _s = "";
      for(var i=0;i<s.length;i++){
        var c = arr1.indexOf(s[i]);
        if(c!=-1){
          _s+=arr2[c];
        }else{
          _s+=s[i];
        }
      }
      return _s;
    }
  }
}
