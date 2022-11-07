class ChangeColumnStores < ActiveRecord::Migration[6.1]
  def change
    change_column :stores, :zipcode, :string
  end
end
