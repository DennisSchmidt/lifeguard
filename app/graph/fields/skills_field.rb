SkillsField = GraphQL::Field.define do
  name 'skills'
  type !types[!SkillType]
  description 'Skill connection to fetch skills collection'

  argument :ids, types[types.ID]
  argument :order, types.String, default_value: 'name'

  resolve SkillsResolver.new
end
