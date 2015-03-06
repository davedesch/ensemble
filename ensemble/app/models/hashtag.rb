class Hashtag < ActiveRecord::Base
  has_many :outfits, through: :outfit_tags
  has_many :favorites, as: :fave

  

end
