CreateUserMutation = GraphQL::Field.define do
  name 'createUser'
  type CreateUserResponseType
  description 'Creates a new user'

  argument :first_name, types.String
  argument :last_name, types.String
  argument :email, types.String
  argument :password, types.String
  argument :password_confirmation, types.String
  argument :department_id, types.ID

  resolve ->(object, inputs, ctx) {
    user = User.create(inputs.to_h)

    {
      user: user,
      errors: user.errors.messages.to_a.map(&:flatten)
    }
  }
end

CreateUserResponseType = GraphQL::ObjectType.define do
  name "CreateUserResponse"
  description "Response after creating a user. Includes user object and errors if validation failed"

  field :user, UserType, hash_key: :user
  field :errors, types[types[types.String]], hash_key: :errors
end
