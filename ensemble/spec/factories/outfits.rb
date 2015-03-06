# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :outfit do
    image_url 'http://lorempixel.com/400/200/people'
    association :user
    title Faker::Name.title
    caption Faker::Hacker.say_something_smart
    gender 'Ladies'
  end
end
