class WelcomeController < ApplicationController

	def index
		render :welcome
		#check if logged in - redirect to users/:username(users#show)
	end

end
