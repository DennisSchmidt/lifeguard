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
