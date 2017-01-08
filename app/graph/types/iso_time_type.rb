IsoTimeType = GraphQL::ScalarType.define do
  name "IsoTime"
  description "Datetime as ISO 8601 format"

  coerce_result -> (value) { value.try(:iso8601) }
end
