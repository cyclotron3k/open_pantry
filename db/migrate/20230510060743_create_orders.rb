class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.decimal :total_cost
      t.string :image
      t.references :user, null: false, foreign_key: true
      t.integer :status

      t.timestamps
    end
  end
end
