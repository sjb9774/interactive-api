export class Component {

	constructor(templatePath = null) {
		this.templatePath = templatePath;
		this.templateParameters = {};
		this.templateContent = null;
		this.requesting = false;
		this.rootNode = null;
	}

	getRootNode() {
		if (!this.rootNode) {
			console.error('Component template not yet rendered');
		}
		return this.rootNode;
	}

	loadTemplate() {
		if (!this.templateContent && !this.requesting) {
			this.requesting = true;
			this.templatePromise = fetch(this.templatePath, {
				method: 'POST',
				body: JSON.stringify(this.getTemplateParameters()),
				headers: {
					'Content-type': 'application/json'
				}
			})
			.then(response => response.text())
			.then(function (responseText) {
				this.templateContent = responseText;
				return this.templateContent;
			}.bind(this));
			return this.templatePromise;
		}

		if (!this.templateContent) {
			return this.templatePromise;
		}
		return new Promise(function () {
			return this.templateContent;
		}.bind(this));
	}

	setTemplateParameters(data) {
		this.templateParameters = data;
	}

	getTemplateParameters() {
		return this.templateParameters;
	}

	afterRender(node) {
		return node;
	}

	render() {
		return this.loadTemplate().then(function (templateContent) {
			let temp = document.createElement('template');
			temp.innerHTML = templateContent.trim();
			this.rootNode = temp.content.getRootNode().firstChild;
			return this.getRootNode();
		}.bind(this)).then(function (renderedNode) {
			this.afterRender(renderedNode);
			return renderedNode;
		}.bind(this));
	}
}