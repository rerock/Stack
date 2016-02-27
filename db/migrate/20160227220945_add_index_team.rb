class AddIndexTeam < ActiveRecord::Migration
  def change
    remove_index :teams, :name
    add_index :teams, :name, unique: true
  end
end
