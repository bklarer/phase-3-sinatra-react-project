


function Review(
    {
        id,
        date_time,
        rating,
        reviewer,
        text
    }
) {
    const date = date_time.split("T")[0]
    
    const stars = "★".repeat(rating)

    return (

        <div>
            <h2>{reviewer}</h2>
            <h3>{date}</h3>
            <h3>Rating = {stars}</h3>
            <p>{text}</p>
            <p>------------------------------------</p>
        </div>


    )



}

export default Review