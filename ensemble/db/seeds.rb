# 10.times do
#   puts "making a user"
#   user = FactoryGirl.create :user
#   puts user.id
  # puts "giving them 3 outfits"
  # 3.times do
  #   outfit = FactoryGirl.create :outfit, :with_hashtags, user: User.first
  #   puts outfit
  #   FactoryGirl.create :article, outfit: outfit
  # end
#   puts "*" * 100
# end

# outfits = Outfit.all
# outfits.each do |outfit|
#   puts "for each outfit"
#   2.times do
#     puts "making 2 ratings"
#     n = User.count - 1
#     id = rand(1..n)
#     new_user = User.find(n)
#     outfit.ratings.create(user: new_user, comment: Faker::Hacker.say_something_smart, stars: 3)
#   end
#   2.times do
#     puts "making rating with stars only"
#     n = User.count - 1
#     id = rand(1..n)
#     new_user = User.find(n)
#     outfit.ratings.create(user: new_user, stars: 2)
#   end
#   puts "*" * 100
# end

ArticleType.create(type_desc: "Blouse")
ArticleType.create(type_desc: "Necklace")
ArticleType.create(type_desc: "Jeans")
ArticleType.create(type_desc: "Pants")
ArticleType.create(type_desc: "Shoes")
ArticleType.create(type_desc: "Bracelet")
ArticleType.create(type_desc: "Watch")
ArticleType.create(type_desc: "Dress")
ArticleType.create(type_desc: "Wedges")
ArticleType.create(type_desc: "Sandals")
ArticleType.create(type_desc: "Sunglasses")
ArticleType.create(type_desc: "Rings")
ArticleType.create(type_desc: "Sweater")
ArticleType.create(type_desc: "Jacket")
ArticleType.create(type_desc: "Boots")
ArticleType.create(type_desc: "Lipstick")
ArticleType.create(type_desc: "Suit")
ArticleType.create(type_desc: "Shirt")
ArticleType.create(type_desc: "Belt")
ArticleType.create(type_desc: "Blazer")
ArticleType.create(type_desc: "Purse")
ArticleType.create(type_desc: "Bag")
ArticleType.create(type_desc: "Shorts")
ArticleType.create(type_desc: "Scarf")
ArticleType.create(type_desc: "Skirt")
ArticleType.create(type_desc: "Earrings")
ArticleType.create(type_desc: "Vest")


