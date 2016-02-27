class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.integer :team_id, null: false
      t.string :title, null: false
      t.text :announcement

      t.timestamps null: false
    end
    add_index :channels, :team_id
    add_index :channels, :title, unique: true
  end
end
