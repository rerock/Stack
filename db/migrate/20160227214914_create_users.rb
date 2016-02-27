class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :team_id, null: false
      t.boolean :is_admin, null: false
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :handle, null: false

      t.timestamps null: false
    end

    add_index :users, :username
    add_index :users, :password_digest
    add_index :users, :session_token
    add_index :users, ["team_id", "username"], unique: true
  end
end
