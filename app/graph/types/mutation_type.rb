MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  description "The mutation root of this schema. See available mutations."
end

MutationType.fields = MutationType.fields.merge({
  "createUser" => CreateUserMutation
})
