class DepartmentsResolver
  def call(_, args, _)
    scope = Department.order(args[:order])
    scope = scope.where(id: args[:ids]) if args[:ids]

    scope
  end
end
