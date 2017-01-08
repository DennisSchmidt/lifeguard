class RenameColumnsForUsers < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :surname, :last_name
    rename_column :users, :username, :nickname
  end
end
