from flask import render_template, request
from interactive_api.app import app
from interactive_api.view_models.home import HomeViewModel


@app.route('/')
def home():
	view_model = HomeViewModel()
	return render_template('home/home.html', view_model=view_model)


@app.route('/templates/<path:template_path>', methods=["POST"])
def templates(template_path):
	return render_template(template_path, params=request.json)
