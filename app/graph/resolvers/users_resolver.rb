class UsersResolver
  def call(_, args, ctx)
    scope = User.order(args[:order])
    scope = include_associations(scope, ctx.query.query_string)

    filter(scope, args)
  end

  def include_associations(scope, query_string)
    scope = scope.includes(:department) if query_string.include?("department")
    scope
  end

  def filter(scope, args)
    scope = scope.where(id: args[:ids]) if args[:ids]

    %w(first_name surname email).each do |attr|
      scope = scope.where("#{attr} LIKE '%#{args[attr]}%'") if args[attr]
    end

    scope
  end
end
