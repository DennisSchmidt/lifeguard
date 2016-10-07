Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                 registrations: :registrations,
                 sessions: :sessions,
                 passwords: :passwords
             },
             path_names: {sign_in: 'login', sign_out: 'logout'}

  devise_scope :user do
    get '/logout',    to: 'sessions#destroy'
    get '/login',     to: 'sessions#new'

    unauthenticated :user do
      root :to => 'sessions#new', as: :unauthenticated
    end

    authenticated :user do
      root :to => 'app#index'

      post 'graphql', to: 'graphql#create'
      get 'graphiql', to: 'graphiql#index'

      get '*path', to: 'app#index'
    end
  end
end
