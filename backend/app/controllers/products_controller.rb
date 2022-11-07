class ProductsController < ApplicationController

    get "/products" do
        products = Product.all
        products.to_json
      end
    
      get "/products/:id" do
        product = Product.find(params[:id])
        product.to_json(include: :reviews)
      end
    
      post "/products" do
        product = Product.create(
          name: Faker::Game.title,
          price: Faker::Commerce.price,
          img_url: Faker::Avatar.image,
          store_id: params[:store_id]
        )
        product.to_json
      end
    
      delete "/products/:id" do
        product = Product.find(params[:id])
        product.destroy
        product.to_json
      end

end