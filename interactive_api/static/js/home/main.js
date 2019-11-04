import { ApiRequest } from '/static/js/models/request/request.js';
import { RequestComponent, RequestCreator } from '/static/js/ui/request/request.js';

let requestComponent = new RequestComponent();
let apiRequest = new ApiRequest();

requestComponent.setTemplateParameters(apiRequest);

document.querySelector('button').addEventListener('click', function (event) {
	(new RequestCreator()).render().then(function (componentElement) {
		document.getElementsByTagName('body').item(0).appendChild(componentElement);
	});
});
