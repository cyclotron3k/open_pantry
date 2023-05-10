Rails.application.routes.draw do
  resources :line_items
  resources :orders
  resources :products
  devise_for :users
  root 'homepage#index'

end
