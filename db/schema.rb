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

ActiveRecord::Schema.define(version: 20160306084741) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer  "team_id",      null: false
    t.string   "title",        null: false
    t.text     "announcement"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "channels", ["team_id", "title"], name: "index_channels_on_team_id_and_title", unique: true, using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "sender_id",       null: false
    t.integer  "receivable_id",   null: false
    t.string   "receivable_type", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "text",            null: false
    t.string   "img_url"
  end

  add_index "messages", ["receivable_id"], name: "index_messages_on_receivable_id", using: :btree
  add_index "messages", ["sender_id"], name: "index_messages_on_sender_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "teams", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "teams", ["name"], name: "index_teams_on_name", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.integer  "team_id",              null: false
    t.boolean  "is_admin",             null: false
    t.string   "username",             null: false
    t.string   "password_digest",      null: false
    t.string   "session_token",        null: false
    t.string   "handle",               null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "last_receivable_type"
    t.integer  "last_receivable_id"
  end

  add_index "users", ["password_digest"], name: "index_users_on_password_digest", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["team_id", "username"], name: "index_users_on_team_id_and_username", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
