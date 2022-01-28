class Pics < ActiveRecord::Migration[6.1]
  def change
    create_table :pics do |t|
      t.string :name
      t.string :img
    end
  end
end
