QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema. See available queries."

  # Get User by ID
  field :user, UserType do
    type -> { UserType }
    description 'Root object to get viewer related collections'

    argument :id, !types.ID

    resolve -> (obj, args, ctx) {
      User.find(args["id"])
    }
  end
end
