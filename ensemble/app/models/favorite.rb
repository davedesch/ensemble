class Favorite < ActiveRecord::Base
  belongs_to :fave, polymorphic: true

end
