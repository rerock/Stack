class AddMessageText < ActiveRecord::Migration
  def change
    add_column :messages, :text, :string, null: false
  end
end
