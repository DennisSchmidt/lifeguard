class AddAttributesToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.string :first_name
      t.string :surname
      t.string :username
      t.string :street
      t.string :place
      t.integer :zip_code
      t.string :phone_number
      t.string :mobile_number
    end
  end
end
