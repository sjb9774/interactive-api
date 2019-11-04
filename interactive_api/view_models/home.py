from interactive_api.view_models.base import BaseViewModel


class HomeViewModel(BaseViewModel):

	def get_welcome_message(self):
		return "Welcome to The Interactive API Explorer"

