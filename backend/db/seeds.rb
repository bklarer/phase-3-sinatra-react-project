puts "🌱 Seeding spices..."

    5.times do
        Store.create(
            name: Faker::Address.community,
            zipcode: Faker::Address.zip_code,
            img_url: Faker::Avatar.image
        )
    end

    25.times do
        Product.create(
            name: Faker::Game.title,
            price: Faker::Commerce.price,
            img_url: Faker::Avatar.image,
            store_id: Faker::Number.within(range: 1..5)
        )
    end

    50.times do
        Review.create(
            reviewer_first_name: Faker::Name.first_name,
            date: Faker::Date.between(from:Date.today, to: Date.today),
            stars: Faker::Number.within(range: 1..5),
            review_text: Faker::Quote.famous_last_words,
            product_id: Faker::Number.within(range: 1..25)
        )
    end

puts "✅ Done seeding!"
