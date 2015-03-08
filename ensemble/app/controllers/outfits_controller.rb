class OutfitsController < ApplicationController

  def index
    user = User.find(session[:user_id])
    outfits = Outfit.where(user_id: user.id).order('updated_at DESC').limit(10)
    results = []
    outfits.each do |outfit|
      results.push({title: outfit.title, image: outfit.image_url, avg_rating: outfit.average_ratings})
    end
    render json: results
  end

  def new
    render html: :new
  end

  def create
    user = User.find(session[:user_id])
    Outfit.create(outfit_params)
    redirect_to user_path(user)
  end

  private

  def outfit_params
    params.require(:outfit).permit(:image_url, :user_id, :title, :catpion, :gender)
  end

end
