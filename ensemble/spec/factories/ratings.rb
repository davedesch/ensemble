# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :rating do
    association :user, factory: :outfit
    comment Faker::Hacker.say_something_smart
    stars 3.5
  end
end
