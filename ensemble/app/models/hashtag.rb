class Hashtag < ActiveRecord::Base
<<<<<<< HEAD
  has_many :outfit_tags
  has_many :outfits, through: :outfit_tags
  has_many :favorites, as: :fave
=======
	has_many :outfit_tags
  	has_many :outfits, through: :outfit_tags
  	has_many :favorites, as: :fave
>>>>>>> 376ebe4b9133e661912a5423be07163c030e089f



end
