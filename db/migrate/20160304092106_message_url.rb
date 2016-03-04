class MessageUrl < ActiveRecord::Migration
  def change
    add_column :messages, :img_url, :string
  end
end
