UsersField = GraphQL::Field.define do
  name 'users'
  type !types[!UserType]
  description 'User connection to fetch users collection'

  argument :ids, types[types.ID]
  argument :first_name, types.String
  argument :surname, types.String
  argument :email, types.String

  argument :order, types.String, default_value: 'first_name, surname'

  resolve UsersResolver.new
end
