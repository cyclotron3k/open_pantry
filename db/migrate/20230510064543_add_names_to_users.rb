class AddNamesToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :display_name, :string
    add_column :users, :contact_name, :string
  end
end
