UserType = GraphQL::ObjectType.define do
  name "User"
  description "A single user entry returns a user with all its fields"

  field :id, !types.ID, "This id of this user"
  field :email, !types.String, "The email address of this user"
  field :first_name, types.String, "The first name of this user"
  field :surname, types.String, "The surname of this user"
  field :username, types.String,  "The username of this user (alternative display name to 'hide' real name)"

  field :street, types.String,  "The home address of this user"
  field :place, types.String,  "The place (e.g. city) this user is from"
  field :zip_code, types.String,  "The zip code of this user"

  field :phone_number, types.String,  "The phone number (land line) of this user"
  field :mobile_number, types.String,  "The mobile phone number of this user"

  field :created_at, types.String, "The time at which this user was created"

  # devise
  field :confirmed_at, types.String, "The time at which this user confirmed his acount via email"
  field :confirmed, types.Boolean do
    resolve -> (obj, _, _) {
      obj.confirmed_at.present?
    }
  end
  field :last_sign_in_at, types.String, "The last time the user was logged in"
  field :current_sign_in_at, types.String, "The time for the current login"

  # associations
  field :department, DepartmentType
end
