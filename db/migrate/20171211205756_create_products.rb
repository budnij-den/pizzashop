class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.float :price, :weight
      t.integer :size, default: 20
      t.boolean :is_spicy, :is_veg, :is_best_offer
      t.string :path_to_image

      t.timestamps
    end
  end
end
