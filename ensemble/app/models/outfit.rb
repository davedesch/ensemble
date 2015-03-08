class Outfit < ActiveRecord::Base
  belongs_to :user
  has_many :ratings
  has_many :articles
  has_many :outfit_tags
  has_many :hashtags, through: :outfit_tags
  has_many :favorites, as: :fave

  validates :caption, :image_url, :title, presence: true
  validates :user, presence: true

	after_save :check_for_hashtags

	private
		def check_for_hashtags
			hashtags = self.caption.scan(/#\w+/)
			if hashtags.length > 0
				hashtags.each do |hashtag|
					self.hashtags << Hashtag.find_or_create_by(hashtag: hashtag)
				end
			end
		end
end
