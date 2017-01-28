UsersField = GraphQL::Field.define do
  name 'users'
  type UsersType
  description 'User connection to fetch users collection'

  argument :ids, types[types.ID]
  argument :first_name, types.String
  argument :last_name, types.String
  argument :email, types.String
  argument :page, types.Int
  argument :per, types.Int

  argument :order, types.String, default_value: 'first_name, last_name'

  resolve UsersResolver.new
end
