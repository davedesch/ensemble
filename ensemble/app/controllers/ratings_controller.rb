class RatingsController < ApplicationController

  def new
    # form is hidden in front end
  end

  def create
    user = User.find(params[:user_id])
    outfit = Outfit.find(params[:outfit_id])
    Rating.create(rating_params)
    redirect_to user_path(user)
  end

  private

  def rating_params
    params.require(:rating).permit(:user_id, :outfit_id, :comment, :stars)
  end
end
