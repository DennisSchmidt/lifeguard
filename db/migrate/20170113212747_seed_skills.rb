class SeedSkills < ActiveRecord::Migration[5.0]
  def up
    %w(JETi Rettungsschwimmer Leinenführer Einsatztaucher Hilfsbootsführer Bootsführer Stationsleiter).each do |name|
      Skill.create(name: name)
    end
  end

  def down
    Skill.destroy_all
  end
end
