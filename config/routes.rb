Rails.application.routes.draw do
  resources :character_details
  resources :campaigns
  resources :descriptions
  resources :abilities
  resources :character_classes
  resources :races
  resources :characters
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'sessions#hello_world'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
