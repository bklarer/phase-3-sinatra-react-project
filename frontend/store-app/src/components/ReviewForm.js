import { useState,} from 'react';
import { Link, useParams } from "react-router-dom";



function ReviewForm() {
    const{ id } = useParams()



    return (


        <div>
            <Link to={`../`}>Go Back</Link>
            <h1>New Review</h1>
            <form>
                <input
                name="reviewer_first_name"
                type="text"
                placeholder="First Name"
                />
                <div>
                    <label>Rating</label>
                    <input
                    name="stars"
                    type="number"
                    min="1"
                    max="5"
                    defaultValue="5"
                    />
                </div>
                <div>
                    <textarea
                        name="review_text"
                        type="text"
                        placeholder="Type review here..."
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm;