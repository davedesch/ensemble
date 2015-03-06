class User < ActiveRecord::Base
  has_many :outfits
  has_many :ratings
  has_many :favorites, as: :fave
  has_many :users, as: :fave

  validates :username,  presence: true
  validates :username uniqness: true
  validates :email, presence: true
  validates :email, uniqness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create


include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

end
