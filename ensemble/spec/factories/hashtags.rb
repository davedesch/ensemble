# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :hashtag do
    factory :outfit_with_hashtags do
      image_url 'http://lorempixel.com/400/200/people'
      association :user
      title Faker::Name.title
      caption (Faker::Hacker.say_something_smart + ' #something')
      gender 'Ladies'
    end
  end
end
