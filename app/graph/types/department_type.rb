DepartmentType = GraphQL::ObjectType.define do
  name "Department"
  description "Department hold members(users) and is placed in a state"

  field :id, !types.ID, "This is the id of this department"
  field :state, !types.String, "This is the state the department is located at"
  field :group, types.String, "Combined with the state it represents the name the department"
  field :website, types.String, "This is url of the website of this department"
  field :name, types.String do
    resolve -> (obj, _, _) {
      "#{obj.state} #{obj.group}"
    }
  end
end
