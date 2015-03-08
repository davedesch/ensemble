class Favorite < ActiveRecord::Base
  belongs_to :user_favorite
  belongs_to :fave, polymorphic: true

end
