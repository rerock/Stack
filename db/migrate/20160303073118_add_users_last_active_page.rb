class AddUsersLastActivePage < ActiveRecord::Migration
  def change
    add_column :users, :last_receivable_type, :string
    add_column :users, :last_receivable_id, :integer
  end
end
