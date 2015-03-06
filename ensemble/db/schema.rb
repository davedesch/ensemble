# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150306032722) do

  create_table "article_types", force: true do |t|
    t.string   "type_desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "articles", force: true do |t|
    t.integer  "outfit_id"
    t.integer  "article_type_id"
    t.string   "brand"
    t.string   "url"
    t.boolean  "discontinued"
    t.boolean  "vintage"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "favorites", force: true do |t|
    t.integer  "user_id"
    t.integer  "fave_id"
    t.string   "fave_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "hashtags", force: true do |t|
    t.string   "hashtag"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "outfit_tags", force: true do |t|
    t.integer  "outfit_id"
    t.integer  "hashtag_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "outfits", force: true do |t|
    t.string   "image_url"
    t.integer  "user_id"
    t.string   "title"
    t.text     "caption"
    t.string   "gender"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "ratings", force: true do |t|
    t.integer  "user_id"
    t.integer  "outfit_id"
    t.text     "comment"
    t.decimal  "stars"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_hash"
    t.string   "avatar"
    t.string   "instagram_name"
    t.string   "auth_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
