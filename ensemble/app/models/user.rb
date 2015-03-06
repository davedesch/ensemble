class User < ActiveRecord::Base
  has_many :outfits
  has_many :ratings
  has_many :favorites, as: :fave
  has_many :users, as: :fave

include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

end
