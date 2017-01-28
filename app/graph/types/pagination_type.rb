PaginationType = GraphQL::ObjectType.define do
  name "Pagination"
  description "Information regarding pagination"

  field :current_page, types.Int, "Number of the current page", hash_key: :current_page
  field :next_page, types.Int, "Number of the next page", hash_key: :next_page
  field :prev_page, types.Int, "Number of the previous page", hash_key: :prev_page
  field :total_pages, types.Int, "Total amount of pages", hash_key: :total_pages
  field :total_count, types.Int, "Total amount of items", hash_key: :total_count
  field :per_page, types.Int, "Amount of items per page", hash_key: :per_page
end
