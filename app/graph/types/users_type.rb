UsersType = GraphQL::ObjectType.define do
  name "Users"
  description "Users collection with meta information"

  field :items, types[!UserType], hash_key: :items
  field :meta, CollectionMetaType, hash_key: :meta
end
