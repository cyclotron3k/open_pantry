Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'line_items/index'
      post 'line_items/create'
      get 'line_items/show/:id', to: 'line_items#show'
      delete 'line_items/destroy/:id', to: 'line_items#destroy'
      get 'orders/index'
      post 'orders/create'
      get 'orders/show/:id', to: 'orders#show'
      delete 'orders/destroy/:id', to: 'orders#destroy'
      get 'products/index'
      post 'products/create'
      get 'products/show/:id', to: 'products#show'
      delete 'products/destroy/:id', to: 'products#destroy'
    end
  end
  devise_for :users
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
