class SkillsResolver
  def call(_, args, _)
    scope = Skill.order(args[:order])
    scope = scope.where(id: args[:ids]) if args[:ids]

    scope
  end
end
