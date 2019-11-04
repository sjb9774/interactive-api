export class ApiRequest {

	constructor() {
		this.inputMappers = [];
		this.outputMappers = [];
		this.headers = {};
		this.method = "GET";
	};

	setRequestPath(path) {
		this.path = path;
	}

	getRequestPath() {
		return this.path;
	}

	setRequestInput(data) {
		this.rawInput = data;
	}

	addInputMapper(inputMapper) {
		this.inputMappers.push(inputMapper);
	}

	addOutputMapper(outputMapper) {
		this.outputMappers.push(outputMapper);
	}

	addHeader(headerKey, headerValue) {
		this.headers[headerKey] = headerValue;
	}

	getRequestInput() {
		return this.rawInput;
	}

	getRequestOuput()
	{
		return this.rawOutput;
	}

	setRequestOutput(data)
	{
		this.rawOutput = data;
	}

	getMappedInput() {
		let data = this.getRequestInput();
		this.inputMappers.forEach(function (mapper) {
			data = mapper.performMap(data);
		});
		return data;
	}

	getMappedOutput() {

	}

	setRequestMethod(method) {
		if (["GET", "POST", "PUT", "DELETE"].find(method)) {
			this.requestMethod = method;
			return true;
		}
		return false;
	}


	getRequestPathWithParams()
	{
		if (this.requestMethod === 'GET') {
			return this.getRequestPath() + '?' + this.getEncodedInput();
		}
		return this.getRequestPath();
	}

	dispatchRequest() {
		return fetch(this.path, this.getRequestOptions()).then(function (response) {
			this.setRequestOutput(response);
		}.bind(this));
	}

	getEncodedInput()
	{
		return Object.keys(this.getRequestInput()).map(k => `${k}=${encodeURIComponent(obj[k])}`).join('&')
	}

	getRequestOptions() {
		let options = {
			method: this.requestMethod,
			headers: this.headers
		};
		if (this.requestMethod !== 'GET') {
			options.body = this.getEncodedInput();
		}
		return options;
	}

}