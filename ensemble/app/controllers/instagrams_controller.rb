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
    response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
    
    redirect "/nav"
  end



end
