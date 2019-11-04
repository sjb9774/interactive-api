export class Model {
	toDataObject() {
		let data = {};
		Object.keys(this).forEach(function (key) {
			data[key] = this[key];
		}.bind(this));
	}
}