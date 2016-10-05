DepartmentsField = GraphQL::Field.define do
  name 'departments'
  type !types[!DepartmentType]
  description 'Department connection to fetch departments collection'

  argument :ids, types[types.ID]
  argument :order, types.String, default_value: 'state'

  resolve DepartmentsResolver.new
end
