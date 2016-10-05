class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable

  belongs_to :department
  validates :department_id, presence: true
  validates :first_name, :surname, presence: true, on: :update
end
