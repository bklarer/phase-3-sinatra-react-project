import { useState,} from 'react';
import { Link, useParams } from "react-router-dom";



function ReviewForm() {
    const{ id } = useParams()



    return (


        <div>
            <Link to={`../`}>Go Back</Link>
            <h1>New Review</h1>
        </div>
    )
}

export default ReviewForm;