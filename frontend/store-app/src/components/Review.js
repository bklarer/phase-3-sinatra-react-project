


function Review(
    {
        id,
        date_time,
        rating,
        reviewer,
        text,
        onHandleDelete
    }
) {
    const date = date_time.split("T")[0]
    const stars = "★".repeat(rating)

    function handleDeleteClick() { 
        fetch(`http://localhost:9292/reviews/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then((resp) => {
            resp.json();
            onHandleDelete(id)
    });
    }


    return (

        <div>
            <h2>Name: {reviewer}</h2>
            <h3>Date: {date}</h3>
            <h3>Rating = {stars}</h3>
            <p>Review: {text}</p>
            <button onClick={() => handleDeleteClick()}>Delete</button>
            <p>------------------------------------</p>
        </div>


    )



}

export default Review