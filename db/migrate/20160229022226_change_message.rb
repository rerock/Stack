class ChangeMessage < ActiveRecord::Migration
  def change
    remove_column :messages, :text, :string, null: false
    add_column :messages, :text, :text, null: false
    add_index :messages, :sender_id
  end
end
