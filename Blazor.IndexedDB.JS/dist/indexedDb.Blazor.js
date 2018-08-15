!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);var r;!function(e){const t="TimeGhost",n={IndexedDbManager:new o.IndexedDbManager};e.initialise=function(){"undefined"==typeof window||window[t]?window[t]=Object.assign({},window[t],n):window[t]=Object.assign({},n)}}(r||(r={})),r.initialise()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IndexedDbManager=class{constructor(){this.assemblyName="Blazor.IndexedDB",this.promiseCallback="PromiseCallback",this.promiseError="PromiseError",this.runFunction=((e,t,n)=>(console.log("Start runFunction"),this[t](n).then(t=>{void 0===t&&(t="");const n=JSON.stringify(t);DotNet.invokeMethodAsync(this.assemblyName,this.promiseCallback,e,n)}).catch(t=>{const n=JSON.stringify(t);DotNet.invokeMethodAsync(this.assemblyName,this.promiseError,e,n)}),!0)),this.createDb=(e=>{const t=e;return console.log("createDb"),new Promise((e,n)=>{const o=window.indexedDB.open(t.name,t.version);o.onsuccess=(n=>{this.db=o.result,e(`Database ${t.name} created. Version: ${t.version}`)}),o.onerror=(e=>{n(`Failed to create database ${t.name}`)}),o.onupgradeneeded=(e=>{const n=o.result;if(t.tables)for(let e=0;e<t.tables.length;e++){const o=t.tables[e],r=o.primaryKey,s=n.createObjectStore(o.name,{keyPath:r.name,autoIncrement:r.auto});for(let e=0;e<o.indexes.length;e++){const t=o.indexes[e];s.createIndex(t.name,t.keyPath,{unique:t.unique})}}})})}),this.addItem=(e=>{const t=e.storename,n=e.data,o=this.getObjectStore(t,"readwrite");return new Promise((e,t)=>{const r=o.add(n);r.onsuccess=(t=>{console.log("Insertion successful"),e("Record added")}),r.onerror=(e=>{t("Failed to added record")})})}),this.getObjectStore=((e,t)=>this.db.transaction(e,t).objectStore(e)),this.testFunction=(e=>`${e}: ${this.assemblyName}`)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpc2VJbmRleERiQmxhem9yLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleGVkRGJCbGF6b3IudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJpbmRleGVkRGJCbGF6b3JfMSIsIkluZGV4RGIiLCJ0aW1lZ2hvc3RFeHRlbnNpb25zIiwiZXh0ZW5zaW9uT2JqZWN0IiwiSW5kZXhlZERiTWFuYWdlciIsImluaXRpYWxpc2UiLCJ3aW5kb3ciLCJhc3NpZ24iLCJbb2JqZWN0IE9iamVjdF0iLCJ0aGlzIiwiYXNzZW1ibHlOYW1lIiwicHJvbWlzZUNhbGxiYWNrIiwicHJvbWlzZUVycm9yIiwicnVuRnVuY3Rpb24iLCJjYWxsYmFja0lkIiwiZm5OYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwidW5kZWZpbmVkIiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsIkRvdE5ldCIsImludm9rZU1ldGhvZEFzeW5jIiwiY2F0Y2giLCJyZWFzb24iLCJjcmVhdGVEYiIsImRiU3RvcmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsInZlcnNpb24iLCJvbnN1Y2Nlc3MiLCJldiIsImRiIiwib25lcnJvciIsIm9udXBncmFkZW5lZWRlZCIsInRhYmxlcyIsImxlbmd0aCIsInRhYmxlIiwicHJpbWFyeUtleSIsInN0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiYXV0b0luY3JlbWVudCIsImF1dG8iLCJqIiwiaW5kZXhlcyIsImluZGV4IiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJhZGRJdGVtIiwicmVjb3JkIiwic3ROYW1lIiwic3RvcmVuYW1lIiwiaXRlbVRvU2F2ZSIsImdldE9iamVjdFN0b3JlIiwicmVxIiwiYWRkIiwic3RvcmVOYW1lIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsInRlc3RGdW5jdGlvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxHQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsYUFBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFBLEtBUWpEckIsRUFBQXNCLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFyQixFQUFBcUIs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LEVBQU1MLFNBQVdPLE9BQVFGLEVBQU1FLGlCQVE5RTlDLEtBQUErQyxRQUFVLENBQUNDLElBQ2QsTUFBTUMsRUFBU0QsRUFBT0UsVUFDaEJDLEVBQWFILEVBQU96QyxLQUNwQjhCLEVBQVFyQyxLQUFLb0QsZUFBZUgsRUFBUSxhQUUxQyxPQUFPLElBQUk1QixRQUFnQixDQUFDQyxFQUFTQyxLQUNqQyxNQUFNOEIsRUFBa0JoQixFQUFNaUIsSUFBSUgsR0FFbENFLEVBQUl6QixVQUFZQyxLQUNackIsUUFBUUMsSUFBSSx3QkFDWmEsRUFBUSxrQkFFWitCLEVBQUl0QixRQUFVRixLQUNWTixFQUFPLGdDQUtidkIsS0FBQW9ELGVBQWlCLEVBQUNHLEVBQW1CN0UsSUFDWnNCLEtBQUs4QixHQUFHMEIsWUFBWUQsRUFBVzdFLEdBQ2hEK0UsWUFBWUYsSUFHbkJ2RCxLQUFBMEQsYUFBZSxDQUFDQyxNQUVUQSxNQURNM0QsS0FBS0MiLCJmaWxlIjoiaW5kZXhlZERiLkJsYXpvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEluZGV4ZWREYk1hbmFnZXIgfSBmcm9tICcuL2luZGV4ZWREYkJsYXpvcic7XHJcblxyXG5uYW1lc3BhY2UgSW5kZXhEYiB7XHJcbiAgICBjb25zdCB0aW1lZ2hvc3RFeHRlbnNpb25zOiBzdHJpbmcgPSAnVGltZUdob3N0JztcclxuICAgIGNvbnN0IGV4dGVuc2lvbk9iamVjdCA9IHtcclxuICAgICAgICBJbmRleGVkRGJNYW5hZ2VyOiBuZXcgSW5kZXhlZERiTWFuYWdlcigpXHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93W3RpbWVnaG9zdEV4dGVuc2lvbnNdKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1t0aW1lZ2hvc3RFeHRlbnNpb25zXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1t0aW1lZ2hvc3RFeHRlbnNpb25zXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLndpbmRvd1t0aW1lZ2hvc3RFeHRlbnNpb25zXSxcclxuICAgICAgICAgICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkluZGV4RGIuaW5pdGlhbGlzZSgpOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJNaWNyb3NvZnQuSlNJbnRlcm9wLmQudHNcIi8+XHJcblxyXG5pbnRlcmZhY2UgSVNpbmdsZVJlY29yZCB7XHJcbiAgICBzdG9yZW5hbWU6IHN0cmluZztcclxuICAgIGRhdGE6IG9iamVjdDtcclxufVxyXG5cclxuaW50ZXJmYWNlIElJbmRleFNwZWMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAga2V5UGF0aDogc3RyaW5nO1xyXG4gICAgdW5pcXVlPzogYm9vbGVhbjtcclxuICAgIGF1dG86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVGFibGVTY2hlbWEge1xyXG4gICAgZGJWZXJzaW9uPzogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpbWFyeUtleTogSUluZGV4U3BlYztcclxuICAgIGluZGV4ZXM6IElJbmRleFNwZWNbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElEYlN0b3JlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZlcnNpb246IG51bWJlcjtcclxuICAgIHRhYmxlczogSVRhYmxlU2NoZW1hW107XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXhlZERiTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGRiOiBhbnk7XHJcbiAgICBwcml2YXRlIGFzc2VtYmx5TmFtZSA9ICdCbGF6b3IuSW5kZXhlZERCJztcclxuICAgIHByaXZhdGUgcHJvbWlzZUNhbGxiYWNrID0gJ1Byb21pc2VDYWxsYmFjayc7XHJcbiAgIHByaXZhdGUgcHJvbWlzZUVycm9yID0gJ1Byb21pc2VFcnJvcic7XHJcblxyXG4gICAgcHVibGljIHJ1bkZ1bmN0aW9uID0gKGNhbGxiYWNrSWQ6IHN0cmluZywgZm5OYW1lOiBzdHJpbmcsIGRhdGE6IGFueSk6IGJvb2xlYW4gPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnQgcnVuRnVuY3Rpb24nKTtcclxuXHJcbiAgICAgICBjb25zdCBwcm9taXNlID0gdGhpc1tmbk5hbWVdKGRhdGEpO1xyXG5cclxuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIERvdE5ldC5pbnZva2VNZXRob2RBc3luYyh0aGlzLmFzc2VtYmx5TmFtZSwgdGhpcy5wcm9taXNlQ2FsbGJhY2ssY2FsbGJhY2tJZCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgRG90TmV0Lmludm9rZU1ldGhvZEFzeW5jKHRoaXMuYXNzZW1ibHlOYW1lLCB0aGlzLnByb21pc2VFcnJvcixjYWxsYmFja0lkLCByZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZURiID0gKGRhdGEpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRiU3RvcmUgPSBkYXRhIGFzIElEYlN0b3JlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlRGJcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVuUmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3BlbihkYlN0b3JlLm5hbWUsIGRiU3RvcmUudmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBldiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShgRGF0YWJhc2UgJHtkYlN0b3JlLm5hbWV9IGNyZWF0ZWQuIFZlcnNpb246ICR7ZGJTdG9yZS52ZXJzaW9ufWApO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgb3BlblJlcXVlc3Qub25lcnJvciA9IGV2ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChgRmFpbGVkIHRvIGNyZWF0ZSBkYXRhYmFzZSAke2RiU3RvcmUubmFtZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXY6IElEQlZlcnNpb25DaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGJTdG9yZS50YWJsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRiU3RvcmUudGFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZGJTdG9yZS50YWJsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSB0YWJsZS5wcmltYXJ5S2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKHRhYmxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleVBhdGg6IHByaW1hcnlLZXkubmFtZSwgYXV0b0luY3JlbWVudDogcHJpbWFyeUtleS5hdXRvIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YWJsZS5pbmRleGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhYmxlLmluZGV4ZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleChpbmRleC5uYW1lLCBpbmRleC5rZXlQYXRoLCB7IHVuaXF1ZTogaW5kZXgudW5pcXVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEl0ZW0gPSAocmVjb3JkOiBJU2luZ2xlUmVjb3JkKTpQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0TmFtZSA9IHJlY29yZC5zdG9yZW5hbWU7XHJcbiAgICAgICAgY29uc3QgaXRlbVRvU2F2ZSA9IHJlY29yZC5kYXRhO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5nZXRPYmplY3RTdG9yZShzdE5hbWUsICdyZWFkd3JpdGUnKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcTogSURCUmVxdWVzdCA9IHN0b3JlLmFkZChpdGVtVG9TYXZlKTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBldiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5zZXJ0aW9uIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoJ1JlY29yZCBhZGRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXYgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdGYWlsZWQgdG8gYWRkZWQgcmVjb3JkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXRPYmplY3RTdG9yZSA9IChzdG9yZU5hbWU6IHN0cmluZywgbW9kZTogc3RyaW5nKSA6SURCT2JqZWN0U3RvcmUgID0+IHtcclxuICAgICAgICBjb25zdCB0eDogSURCVHJhbnNhY3Rpb24gPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgbW9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHR4Lm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRlc3RGdW5jdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcpOnN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhciA9IHRoaXMuYXNzZW1ibHlOYW1lO1xyXG4gICAgICAgIHJldHVybiBgJHttZXNzYWdlfTogJHt0ZXN0VmFyfWA7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9