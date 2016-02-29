class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :receivable_id, null: false
      t.string :receivable_type, null: false

      t.timestamps null: false
    end
    add_index :messages, :receivable_id
  end
end
