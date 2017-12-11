class AddProducts < ActiveRecord::Migration[5.1]
  def change
    Product.create title: 'margarita',
      description: 'cheesy as hell',
      price: 350,
      size: 30,
      is_spicy: false,
      is_veg: true,
      is_best_offer: false,
      path_to_image: '/img/margarita.png'

    Product.create title: 'pepperoni',
      description: 'pepper and meat',
      price: 450,
      size: 30,
      is_spicy: true,
      is_veg: true,
      is_best_offer: true,
      path_to_image: '/img/pepperoni.png'

    Product.create title: 'mediterranean',
      description: 'seashells and greek',
      price: 400,
      size: 30,
      is_spicy: false,
      is_veg: false,
      is_best_offer: false,
      path_to_image: '/img/mediterranean.png'
  end
end
