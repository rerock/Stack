class Message < ActiveRecord::Base
  belongs_to :receivable, polymorphic: true
  belongs_to :sender, class_name: "User"

  validates :receivable_type, inclusion: { in: %w(Channel User) }
end
