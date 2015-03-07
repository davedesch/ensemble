class InstagramsController < ApplicationController
  CALLBACK_URL = "http://localhost:3000/oauth/callback"

  Instagram.configure do |config|
    config.client_id = ENV['CLIENT_ID']
    config.client_secret = ENV['CLIENT_SECRET']
  end


  def index
  end

  def login
    redirect Instagram.authorize_url(:redirect_uri => CALLBACK_URL)
  end

  def authorized
    response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
    session[:access_token] = response.access_token
    redirect "/nav"
  end



end
