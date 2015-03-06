class Outfit < ActiveRecord::Base
  belongs_to :user
  has_many :ratings
  has_many :articles
  has_many :hashtags, through: :outfit_tags
end
