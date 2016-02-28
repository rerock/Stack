class ChannelIndex < ActiveRecord::Migration
  def change
    remove_index :channels, :team_id
    remove_index :channels, :title

    add_index :channels, ["team_id", "title"], unique: true
  end
end
