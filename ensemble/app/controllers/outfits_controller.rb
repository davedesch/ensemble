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
    # render new upload form
  end

  def create
    #recieve params for new outfit
  end

end
