class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :item_type
      t.string :image
      t.integer :price
      t.integer :quantity
      t.string :purchase_date
      t.string :expiry_date
      t.integer :fridge_id
    end  
  end
end
