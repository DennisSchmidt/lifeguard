class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.string :name
    end

    create_join_table :skills, :users do |t|
      t.index [:skill_id, :user_id]
    end
  end
end
