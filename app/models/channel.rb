class Channel < ActiveRecord::Base
  has_many :messages, as: :receivable
end
