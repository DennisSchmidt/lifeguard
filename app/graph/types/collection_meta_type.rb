CollectionMetaType = GraphQL::ObjectType.define do
  name "CollectionMeta"
  description "Meta information of a collection"

  field :pagination, PaginationType, hash_key: :pagination
end
