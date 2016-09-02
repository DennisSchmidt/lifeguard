class RegistrationsController < Devise::RegistrationsController
  def new
    redirect_to login_path
  end

  def create
    redirect_to login_path
  end
end
