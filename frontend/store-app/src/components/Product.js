import { Link } from "react-router-dom";



function Product({
    id,
    name,
    price,
    img
}) {


    return (

        <div>
            <h2>{name}</h2>
            <img src={img} alt={"Product"}/>
            <p>{`$${price}`}</p>
        </div>
    )

}

export default Product