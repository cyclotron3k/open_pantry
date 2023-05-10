class AddAddressesToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :delivery_address, :string
    add_column :users, :billing_address, :string
  end
end
