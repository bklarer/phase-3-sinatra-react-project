import { Link } from "react-router-dom";



function Product({
    id,
    name,
    price,
    img,
    onHandleDelete
}) {


    function handleDeleteClick() { 
        fetch(`http://localhost:9292/products/${id}`,{
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
            <h2>{name}</h2>
            <img src={img} alt={"Product"}/>
            <p>{`$${price}`}</p>
            <button onClick={() => handleDeleteClick()}>Delete</button>
        </div>
    )

}

export default Product