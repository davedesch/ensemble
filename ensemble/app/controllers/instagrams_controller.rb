class InstagramsController < ApplicationController

  CALLBACK_URL = "http://localhost:3000/instagram/oauth/callback"
  
  CLIENT = ENV['CLIENT_ID']

  def index
  end

  #handles 'oauth/connect'
  def login
    # render :nothing => true, :status => 200, :content_type => 'text/html'
    redirect_to "https://api.instagram.com/oauth/authorize/?client_id=#{CLIENT}&redirect_uri=#{CALLBACK_URL}&response_type=code"
    
  end

  #handles 'oauth/callback'
  def authorized
    #get token from teh server
    response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
    create_or_login(response)
    
    # user = User.find_or_create_by(username: response.user.username, avatar: response.user.profile_picture, auth_token: response.access_token, instagram_name: response.user.full_name)

    # session[:user_id] = user.id

    # redirect_to user_path(user.id)
  end



end
