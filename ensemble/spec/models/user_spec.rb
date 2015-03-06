require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with an email" do
    dave = User.new(
      email: 'davedesch@gmail.com')
    expect(dave).to be_valid
  end

  pending "valid with a username"
  it "is invalid without an email" do
    user = User.new(
      username: 'username')
    expect(user).not_to be_valid
  end
end
