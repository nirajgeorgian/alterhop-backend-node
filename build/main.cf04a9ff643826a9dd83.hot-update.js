require('source-map-support').install()
exports.id = 'main'
exports.modules = {
	/***/ './src/controllers/home.js':
		/*!*********************************!*\
  !*** ./src/controllers/home.js ***!
  \*********************************/
		/*! exports provided: home */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict'
			__webpack_require__.r(__webpack_exports__)
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'home',
				function() {
					return home
				}
			)
			var home = function home(req, res) {
				res.send({
					host: req.headers.host,
					message: 'API up and running.',
				})
			}

			/***/
		},
}
//# sourceMappingURL=main.cf04a9ff643826a9dd83.hot-update.js.map
