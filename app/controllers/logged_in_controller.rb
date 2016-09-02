class LoggedInController < ApplicationController
  before_action :authenticate_user!

  # def validate_profile!
  #   return if request.fullpath == my_profile_path || current_user.valid?
  #   redirect_to my_profile_path, flash: {alert: t("profiles.flash.validate_profile")}
  # end
end
