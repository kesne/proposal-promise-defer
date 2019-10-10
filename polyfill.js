if (typeof Promise !== 'function') {
	throw new TypeError('A global Promise is required');
}

if (typeof Promise.defer !== 'function') {
	Promise.defer = {
		defer() {
      var resolve, reject;
      var promise = new this(function (innerResolve, innerReject) {
				resolve = innerResolve;
        reject = innerReject;
			});
      return {
        promise: promise,
        resolve: resolve,
        reject: reject
      };
		}
	}.defer;
}
