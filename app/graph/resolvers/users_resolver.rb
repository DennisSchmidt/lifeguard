class UsersResolver
  def call(_, args, ctx)
    scope = User.order(args[:order])
    scope = include_associations(scope, ctx.query.query_string)

    items = filter(scope, args).page(args[:page]).per(args[:per] ||= Kaminari.default_per_page)

    {
      items: items,
      meta: {
        pagination: {
          current_page: items.current_page,
          next_page: items.next_page,
          prev_page: items.prev_page,
          total_pages: items.total_pages,
          total_count: items.total_count,
          per_page: args[:per]
        }
      }
    }
  end

  def include_associations(scope, query_string)
    scope = scope.includes(:department) if query_string.include?("department")
    scope
  end

  def filter(scope, args)
    scope = scope.where(id: args[:ids]) if args[:ids]

    %w(first_name last_name email).each do |attr|
      scope = scope.where("#{attr} LIKE '%#{args[attr]}%'") if args[attr]
    end

    %w(department_id).each do |attr|
      scope = scope.where(attr => args[attr]) if args[attr]
    end

    scope
  end
end
