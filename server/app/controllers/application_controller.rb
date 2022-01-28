class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
    # Get all the items from the database
    get '/items' do
      Item.all.to_json
    end
    # sort items by food category
    get '/items/by_type' do
      # returns an array of items as JSON, sorted by type in descending order
      items = Item.by_type
      items.to_json
    end
    # sort items by expiration date in descending order or could change to ascending
    get '/items/by_date' do
      # returns an array of items as JSON, sorted by type in descending order
      items = Item.by_date
      items.to_json
    end
    # creates a new item in the database
    post '/items' do
      Item.create(
        item_name: params[:item_name],
        item_type: params[:item_type],
        image: params[:image],
        price: params[:price],
        quantity: params[:quantity],
        purchase_date: params[:purchase_date],
        expiry_date: params[:expiry_date],
        fridge_id: params[:fridge_id]
      ).to_json

      Item.update(
        item_name: params[:item_name],
        item_type: params[:item_type],
        image: params[:image],
        price: params[:price],
        quantity: params[:quantity],
        purchase_date: params[:purchase_date],
        expiry_date: params[:expiry_date],
        fridge_id: params[:fridge_id]
      ).to_json
      
    end

    patch '/items/:id' do
      updated_item = params[:updatedItem]
      items = Item.all.find(updated_item[:id])
      items.update(
        item_type: updated_item[:item_type],
        price: updated_item[:price],
        quantity: updated_item[:quantity],
        purchase_date: updated_item[:purchase_date],
        expiry_date: updated_item[:expiry_date],
        fridge_id: updated_item[:fridge_id]
      )
      items.to_json
    end

    # deletes item from the database by id
    delete '/items/:id' do
      items = Item.find(params[:id])
      items.destroy
      items.to_json
    end
end