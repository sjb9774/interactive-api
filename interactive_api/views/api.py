from interactive_api.app import app


@app.route('/api/endpoint')
def test_api():
	return {
		'message': 'Successful test API response',
		'error': False
	}


@app.route('/api/ids')
def get_ids():
	return {
		"ids": [
			100,
			101,
			105,
			179,
			200,
			233,
			1004
		]
	}


@app.route('/api/objects/<id>')
def get_object_by_id(object_id):
	data_map = {
		100: "Object 100",
		101: "Object 101",
		105: "Object 105",
		179: "Object 179",
		200: "Object 200",
		233: "Object 233",
		1004: "Object 10004"
	}

	return data_map[object_id]
