class UsersController < ApplicationController


  def index
    render :index
  end


  def create
    prospective_user = User.new(user_params)
    prospective_user.password = params[:password]
    if prospective_user.save
      current_user = prospective_user
      session[:user_id] = current_user.id
      redirect_to user_path(current_user.id)
    end
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

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end






end
