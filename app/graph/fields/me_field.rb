MeField = GraphQL::Field.define do
  name 'me'
  type UserType
  description 'Find the current logged in user'

  resolve -> (_, _, ctx) {
    ctx[:current_user] ? ctx[:current_user] : nil
  }
end
