class GraphqlController < LoggedInController
  protect_from_forgery except: [:create]

  def create
    schema = GraphQL::Schema.new(query: QueryType)

    result = schema.execute(
      params[:query],
      variables: ensure_hash(params[:variables]),
      context: { current_user: current_user }
    )

    render json: result
  end

  private

  def ensure_hash(query_variables)
    if query_variables.blank?
      {}
    elsif query_variables.is_a?(String)
      JSON.parse(query_variables)
    else
      query_variables
    end
  end
end
