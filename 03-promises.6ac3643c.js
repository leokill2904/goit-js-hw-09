var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("iQIUW");function u(e,t){const r=Math.random()>.3,n={position:e,delay:t};return new Promise(((e,o)=>{setTimeout((()=>{r?e(n):o(n)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){if(e.preventDefault(),e.currentTarget.delay.value<0||e.currentTarget.amount.value<=0)return o.Notify.warning("Step and amount values must be positive numbers and the amount value must be more than 0");let t=Number(e.currentTarget.delay.value);const r=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);for(let e=1;e<=n;e+=1)u(e,t).then((({position:e,delay:t})=>{o.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),t+=r}));
//# sourceMappingURL=03-promises.6ac3643c.js.map
