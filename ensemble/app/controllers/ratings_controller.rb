class RatingsController < ApplicationController

  def new
    # form is hidden in front end
  end

  def create
    user = User.find(params[:user_id])
    outfit = User.find(params[:outfit_id])
    Rating.create(rating_params)
  end

  private

  def rating_params
    params.require(:rating).permit(:user_id, :outfit_id, :comment, :stars)
  end
end
