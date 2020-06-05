import { Component } from '../component.js';
import { ApiRequest } from '/static/js/models/request/request.js';

export class RequestComponent extends Component {

	constructor() {
		super('/templates/ui/request/request.html');
		this.request = new ApiRequest();
	}

	getUrlEndpointElement() {
		return this.getRootNode().querySelector('[data-request-field="url-endpoint"]');
	}

	getSubmitButtonElement() {
		return this.getRootNode().querySelector('button.request-submit');
	}

	getRequestOutputElement() {
		return this.getRootNode().querySelector('[data-request-field="request-output"]');
	}

	afterRender(rootNode) {
		this.getSubmitButtonElement().addEventListener('click', this.onRequestSubmit.bind(this));
		this.getUrlEndpointElement().addEventListener('blur', function(event) {
			this.request.setRequestPath(event.target.value);
		}.bind(this));
	}

	onRequestSubmit(event) {
		return fetch(this.request.getRequestPath()).then(response => response.json()).then(function(responseJson) {
			this.getRequestOutputElement().value = JSON.stringify(responseJson);
		}.bind(this));
	}

}

export class RequestCreator extends Component {

	constructor() {
		super('/templates/ui/request/creator.html');
		this.requestComponents = [];
	}

	afterRender(rootNode) {
		rootNode.querySelector('[data-function="add-request"]').addEventListener('click', function (event) {
			this.addRequest();
		}.bind(this));
	}

	addRequest() {
		const requestComponent = new RequestComponent();
		requestComponent.render().then(function(requestRoot) {
			this.getRootNode().querySelector('.requests-container').appendChild(requestRoot);
		}.bind(this));
		this.requestComponents.push(requestComponent);
	}

}