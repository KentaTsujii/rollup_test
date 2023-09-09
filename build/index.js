//これはexportがついていないため、アクセスできない
const TITLE = 'Qiita';

//関数のモジュール化
function showMessage() {
  console.log(`ようこそ、${TITLE}!`);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dist = {};

var Greeter$1 = {};

Object.defineProperty(Greeter$1, "__esModule", {
  value: true
});
Greeter$1.Greeter = void 0;
class Greeter {
  greet(to) {
    console.log(`Hello ${to}`);
  }
}
Greeter$1.Greeter = Greeter;

(function (exports) {

	var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	    desc = {
	      enumerable: true,
	      get: function () {
	        return m[k];
	      }
	    };
	  }
	  Object.defineProperty(o, k2, desc);
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	});
	var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
	  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__exportStar(Greeter$1, exports); 
} (dist));

function test() {
  showMessage();
  let g = new dist.Greeter();
  g.greet('kenta');
}

export { test };
