class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
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
      zipcode: params[:zipcode].
      img_url: params[:img_url]
    )
    store.to_json
  end

  delete "/stores/:id" do
    store = Store.find(params[:id])
    store.destroy
    store.to_json
  end 

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
    name: params[:name],
    price: params[:price],
    img_url: params[:img_url],
    store_id: params[:store_id]
    )
    product.to_json
  end

  delete "/products/:id" do
    product = Product.find(params[:id])
    product.destroy
    product.to_json
  end

  get "/reviews" do
    reviews = Review.all
    reviews.to_json
  end

  get "reviews/:id" do
    review = Review.find(params[:id])
    review.to_json
  end

  post "/reviews" do
    review = Review.create(
    reviewer_first_name: params[:reviewer_first_name],
    date: params[:date],
    stars: params[:stars],
    review_text: params[:review_text],
    product_id: params[:product_id]
    )
    review.to_json
  end

  delete "/reviews/:id" do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

end
