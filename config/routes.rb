Rails.application.routes.draw do
  devise_for :users,
             controllers: { registrations: :registrations },
             path_names: {sign_in: 'login', sign_out: 'logout'}

  devise_scope :user do
    get '/logout',    to: 'devise/sessions#destroy'
    get '/login',     to: 'devise/sessions#new'

    authenticated :user do
      root :to => 'welcome#index'
    end
    unauthenticated :user do
      root :to => 'devise/sessions#new', as: :unauthenticated
    end
  end
end
