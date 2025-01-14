class StoresController < ApplicationController
    get "/stores" do
        stores = Store.all
        stores.to_json
      end
    
      get "/stores/:id" do
        store = Store.find(params[:id])
        store.to_json(include: :products)
      end
    
      post "/stores" do
        store = Store.create(
          name: params[:name],
          zipcode: params[:zipcode],
          img_url: Faker::Avatar.image
        )
        store.to_json
      end
    
      delete "/stores/:id" do
        store = Store.find(params[:id])
        store.destroy
        store.to_json
      end 

end