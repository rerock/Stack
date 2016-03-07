PgSearch.multisearch_options = {
  :using => {
    :tsearch =>  {
      :prefix => true,
      :negation => true,
      :dictionary => "english"
    }
  }
}

class Message < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:text]

  belongs_to :receivable, polymorphic: true
  belongs_to :sender, class_name: "User"

  validates :receivable_type, inclusion: { in: %w(Channel User) }
end
