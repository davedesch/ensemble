class UsersController < ApplicationController

<<<<<<< HEAD
  def index
    # erb :index (includes signin signup page. This action also set as the root route in routes)
    # checks if logged in - redirect to users/:username(users#show)
  end

  def login
    # create session
  end

  def logout
    # delete session
  end
=======
  # def index
  #erb :index (includes signin signup page. This action is also set as the root route in routes)
  # end
>>>>>>> instagram

  def new
    # nothing: show/hide registration form
  end

  def create
    # recieve: username, email, password
  end

  def show
    render :index
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
