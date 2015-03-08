class InstagramsController < ApplicationController

  CALLBACK_URL = "http://localhost:3000/instagram/oauth/callback"
  
  CLIENT = ENV['CLIENT_ID']

  def index
  end

  #handles 'oauth/connect'
  def login
    redirect_to "https://api.instagram.com/oauth/authorize/?client_id=#{CLIENT}&redirect_uri=#{CALLBACK_URL}&response_type=code"    
  end

  #handles 'oauth/callback'
  def authorized
    #get token from the server
    response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
    user = create_or_login(response)
    p user.errors
    # user = User.find_or_create_by(username: response.user.username, avatar: response.user.profile_picture, auth_token: response.access_token, instagram_name: response.user.full_name)

    session[:user_id] = user.id

    redirect_to user_path(user.id)
  end

private

  def create_or_login(response)
   user = User.where(username: response.user.username).first_or_create do |newuser|
        newuser.username = response.user.username
        newuser.avatar = response.user.profile_picture
        newuser.auth_token = response.access_token
        newuser.instagram_name = response.user.full_name
      end
    return user
  end


end
