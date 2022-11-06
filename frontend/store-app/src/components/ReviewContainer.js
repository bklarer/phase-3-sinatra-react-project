import { useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import Review from "./Review"



function ReviewContainer({reviews, setReviews}) {
    const {id, storeId} = useParams()
    const [currentProduct, setCurrentProduct] = useState("")


    useEffect(() => {
        fetch(`http://localhost:9292/products/${id}`)
            .then((resp) => resp.json())
            .then((product) => {
                setReviews(product.reviews)
                setCurrentProduct(product.name)
            })
    },[id])

    function handleDelete(id) {
        const updatedReviews = reviews.filter((review) => review.id !== id);
        setReviews(updatedReviews);
    }

    
    return (

        <div>
            <h1>Product: {currentProduct}</h1>
            <Link to={`/stores/${storeId}`}>Go Back</Link>
            <p>------------------------------------</p>
            <Link to={`/stores/${storeId}/products/${id}/reviews/new`}>Add Review</Link>
            {reviews.map((review) => {
                return(
                    <Review
                    key={review.id}
                    id={review.id}
                    date_time={review.date}
                    rating={review.stars}
                    reviewer={review.reviewer_first_name}
                    text={review.review_text}
                    onHandleDelete={handleDelete}
                    />
                )
            })

            }
            
        </div>

    )

}

export default ReviewContainer