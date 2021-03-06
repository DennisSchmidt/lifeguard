UserType = GraphQL::ObjectType.define do
  name "User"
  description "A single user entry returns a user with all its fields"

  field :id, !types.ID, "This id of this user"
  field :email, !types.String, "The email address of this user"
  field :first_name, types.String, "The first name of this user"
  field :last_name, types.String, "The last name of this user"
  field :nickname, types.String,  "The nickname of this user (alternative display name to 'hide' real name)"

  field :street, types.String,  "The home address of this user"
  field :city, types.String,  "The city this user is from"
  field :zip_code, types.String,  "The zip code of this user"

  field :phone_number, types.String,  "The phone number (land line) of this user"
  field :mobile_number, types.String,  "The mobile phone number of this user"

  field :created_at, IsoTimeType, "The time at which this user was created"

  # devise
  field :confirmed_at, IsoTimeType, "The time at which this user confirmed his acount via email"
  field :confirmed, types.Boolean do
    resolve -> (obj, _, _) {
      obj.confirmed_at.present?
    }
  end
  field :last_sign_in_at, IsoTimeType, "The last time the user was logged in"
  field :current_sign_in_at, IsoTimeType, "The time for the current login"

  # associations
  field :department, DepartmentType
  field :skills, types[SkillType]
end

