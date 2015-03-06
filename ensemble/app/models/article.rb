class Article < ActiveRecord::Base
  belongs_to :outfit
  belongs_to :article_type
  has_many :favorites, as: :fave

end
