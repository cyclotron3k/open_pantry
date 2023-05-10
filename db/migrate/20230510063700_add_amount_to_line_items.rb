class AddAmountToLineItems < ActiveRecord::Migration[7.0]
  def change
    add_column :line_items, :amount, :integer
  end
end
