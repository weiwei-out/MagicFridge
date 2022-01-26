class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'  

    # add routes
    get '/items' do
      # Get all the items from the database
      # send them back as JSON array
      Item.all.to_json
    end

      #Get single item from database by ID
    get '/items/:id' do
      Item.find(params[:id]).to_json
    end
end
  
