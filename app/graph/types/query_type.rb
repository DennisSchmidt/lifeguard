QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema. See available queries."
end

QueryType.fields = QueryType.fields.merge({
  "me" => MeField,
  "users" => UsersField,
  "departments" => DepartmentsField,
  "skills" => SkillsField
})
