/*!
 * smartquotes.js v0.1.4
 * http://github.com/kellym/smartquotesjs
 * MIT licensed
 *
 * Copyright (C) 2013 Kelly Martin, http://kelly-martin.com
 */

/* jshint ignore:start */
(typeof("jQuery")=="function"?jQuery:function(d){var b=document.addEventListener||document.attachEvent,c=document.removeEventListener?"removeEventListener":"detachEvent",a=document.addEventListener?"DOMContentLoaded":"onreadystatechange";b.call(document,a,function(){document[c](a,arguments.callee,false);d()},false)})(function(){var a=document.body;var b=a.childNodes[0];while(b!=null){if(b.nodeType==3){b.nodeValue=b.nodeValue.replace(/(\W|^)"(\S)/g,"$1\u201c$2").replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g,"$1\u201d$2").replace(/([^0-9])"/g,"$1\u201d").replace(/(\W|^)'(\S)/g,"$1\u2018$2").replace(/([a-z])'([a-z])/ig,"$1\u2019$2").replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig,"$1\u2019$3").replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig,"\u2019$2$3").replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/ig,"$1\u2019").replace(/'''/g,"\u2034").replace(/("|'')/g,"\u2033").replace(/'/g,"\u2032")}if(b.hasChildNodes()&&b.firstChild.nodeName!="CODE"){b=b.firstChild}else{do{while(b.nextSibling==null&&b!=a){b=b.parentNode}b=b.nextSibling}while(b&&(b.nodeName=="CODE"||b.nodeName=="SCRIPT"||b.nodeName=="STYLE"))}}});
/* jshint ignore:end */