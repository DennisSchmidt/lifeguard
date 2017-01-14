class Department < ApplicationRecord
  has_many :members, class_name: "User"

  validates :state, :group, presence: true
  validates :group, uniqueness: {scope: :state}
end
