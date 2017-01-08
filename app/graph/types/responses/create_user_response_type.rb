CreateUserResponseType = GraphQL::ObjectType.define do
  name "CreateUserResponse"
  description "Response after creating a user. Includes user object and errors if validation failed"

  field :user, UserType, hash_key: :user
  field :errors, types[types[types.String]], hash_key: :errors
end
