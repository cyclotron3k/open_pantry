class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.string :image
      t.references :user, null: false, foreign_key: true
      t.decimal :cost
      t.boolean :available

      t.timestamps
    end
  end
end