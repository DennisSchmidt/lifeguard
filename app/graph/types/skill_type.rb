SkillType = GraphQL::ObjectType.define do
  name "Skill"
  description "Skills represent the DLRG hierarchy"

  field :id, !types.ID, "This is the id of this skill"
  field :name, !types.String, "This is the name of the skill"
end
