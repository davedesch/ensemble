class UsersController < ApplicationController


  def index
    render :index
  end


  def new
    # nothing: show/hide registration form
  end

  def create
    # recieve: username, email, password
  end

  def show
    #render dashboard
  end

  def ensembles
    # render json (all outfits as objects)
  end

  def login
    if params[:code]
      @user = User.find_or_create_by(:username)

    else
      @user = User.find_by_username(params[:username])
      if @user.password == params[:password]
        give_token
      else
        redirect_to :user
      end
    end
  end


  def logout
    session.clear
  end


def give_token
    session[:user_id] = @user.id
  end





end
