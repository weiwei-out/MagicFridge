
fridge1 = Fridge.create()

puts "Creating items..."

Item.create(item_name: "Milk", item_type: "Dairy", image: "server/db/Pictures/milk.png", price: 4, quantity: 1, purchase_date: "1/15/22", expiry_date: "2/10/22", fridge_id: fridge1.id )
Item.create(item_name: "Chicken Breast", item_type: "Meat", image: "chicken.png", price: 6, quantity: 1, purchase_date: "1/12/22", expiry_date: "1/19/22", fridge_id: fridge1.id )
# Item.create(item_name: "Cheddar Cheese", item_type: "Dairy", image: "db/Pictures/cheese.png", price: 3, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Cheddar Cheese", item_type: "Dairy", image: "client/public/logo192.png", price: 3, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Cheddar Cheese", item_type: "Dairy", image: "test/logo192.png", price: 3, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Cheddar Cheese", item_type: "Dairy", image: "logo512.png", price: 3, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Eggs", price: 4, item_type: "Poultry", image: "db/Pictures/eggs.png", quantity: 12, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Strawberries", item_type: "Fruit", image: "db/Pictures/strawberry.png", price: 4, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Blueberries", item_type: "Fruit", image: "db/Pictures/blueberry.png", price: 4, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Blackberries", item_type: "Fruit", image: "db/Pictures/blackberry.png", price: 4, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Tomatoes", item_type: "Fruit", image: "db/Pictures/tomato.png", price: 4, quantity: 1, purchase_date: "2/12/22", expiry_date: "3/5/22", fridge_id: fridge1.id )
Item.create(item_name: "Steak", item_type: "Meat", image: "db/Pictures/steak.png", price: 20, quantity: 1, purchase_date: "6/12/21", expiry_date: "6/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Orange Juice", item_type: "Beverage", image: "db/Pictures/OJ.png", price: 4, quantity: 1, purchase_date: "6/12/21", expiry_date: "6/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Beer", item_type: "Beverage", image: "db/Pictures/beer.png", price: 9, quantity: 6, purchase_date: "6/12/21", expiry_date: "6/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Salsa", item_type: "Dip", image: "db/Pictures/salsa.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Hot Dogs", item_type: "Meat", image: "db/Pictures/hotdogs.png", price: 3, quantity: 1, purchase_date: "4/12/21", expiry_date: "7/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Ketchup", item_type: "Sauce", image: "db/Pictures/ketchup.png", price: 4, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Mustard", item_type: "Sauce", image: "db/Pictures/mustard.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Ranch", item_type: "Sauce", image: "db/Pictures/ranch.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Hot Sauce", item_type: "Sauce", image: "db/Pictures/hotsauce.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "BBQ Sauce", item_type: "Sauce", image: "db/Pictures/bbq.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Lemonade", item_type: "Beverage", image: "db/Pictures/lemonade.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Sprite", item_type: "Beverage", image: "db/Pictures/sprite.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Hummus", item_type: "Dip", image: "db/Pictures/hummus.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Guacamole", item_type: "Dip", image: "db/Pictures/guac.png", price: 5, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Yogurt", item_type: "Dairy", image: "db/Pictures/yogurt.png", price: 5, quantity: 1, purchase_date: "4/12/21", expiry_date: "5/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Avocados", item_type: "Fruit", image: "db/Pictures/avocado.png", price: 3, quantity: 3, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Butter", item_type: "Dairy", image: "db/Pictures/butter.png", price: 3, quantity: 1, purchase_date: "3/12/21", expiry_date: "5/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Spinach", item_type: "Vegetable", image: "db/Pictures/spinach.png", price: 3, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Bacon", item_type: "Meat", image: "db/Pictures/bacon.png", price: 6, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )
Item.create(item_name: "Carrots", item_type: "Vegetable", image: "db/Pictures/carrots.png", price: 3, quantity: 1, purchase_date: "2/12/21", expiry_date: "4/22/21", fridge_id: fridge1.id )


puts "✅ Done seeding!"
