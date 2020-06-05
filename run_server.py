from interactive_api.app import app
from interactive_api.views.home import *
from interactive_api.views.api import *

if __name__ == '__main__':
	app.run('0.0.0.0', port=9090, debug=True)
