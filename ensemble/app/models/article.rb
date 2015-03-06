class Article < ActiveRecord::Base
  belongs_to :outfit
  has_one :article_type
  has_many :favorites, as: :fave

end
