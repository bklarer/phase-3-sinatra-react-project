class ReviewsController < ApplicationController

    get "/reviews" do
        reviews = Review.all
        reviews.to_json
      end
    
      get "/reviews/:id" do
        review = Review.find(params[:id])
        review.to_json
      end
    
      post "/reviews" do
        review = Review.create(
          reviewer_first_name: params[:reviewer_first_name],
          date: Faker::Date.between(from:Date.today, to: Date.today),
          stars: params[:stars],
          review_text: params[:review_text],
          product_id: params[:product_id]
        )
        review.to_json
      end
    
      patch "/reviews/:id" do
        review = Review.find(params[:id])
        review.update(
          reviewer_first_name: params[:reviewer_first_name],
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