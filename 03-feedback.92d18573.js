function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(S,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=v();if(j(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function w(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function O(){var e=v(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},h=document.querySelector(".feedback-form");!function(){if(localStorage.getItem("feedback-form-state"))return h.email.value=y("feedback-form-state").email,void(h.message.value=y("feedback-form-state").message);h.email.value="",h.message.value=""}(),h.addEventListener("input",e(t)((function(){((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("feedback-form-state",{email:h.email.value,message:h.message.value})}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(y("feedback-form-state")),localStorage.removeItem("feedback-form-state"),h.email.value="",h.message.value=""}));
//# sourceMappingURL=03-feedback.92d18573.js.map
