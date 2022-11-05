class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :reviewer_first_name
      t.datetime :date
      t.integer :stars
      t.text :review_text
      t.integer :product_id
  end
end
