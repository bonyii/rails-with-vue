Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'home#index'

  get '*all', to: 'home#index', constraints: ->(req) { req.path.exclude? 'rails/active_storage' }
end
