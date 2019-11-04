class ApiExplorer:

	def __init__(self, api_class):
		self.api_class = api_class

	def get_api_methods(self):
		pass


class ExplorerMethod:

	def __init__(self, method=None):
		self.method = method

	def get_method_args(self):
		pass


class ExplorerMethodArgument:

	def __init__(self, arg):
		self.arg = arg

	def get_argument_name(self):
		pass

	def get_argument_type(self):
		pass

	def get_argument_docstring(self):
		pass
