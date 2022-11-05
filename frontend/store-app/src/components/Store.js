import { Link } from "react-router-dom";


function Store ({
    id,
    name,
    zipcode,
    img
}) {



    return(
        <div>
            <img src={img} alt={"Store"}/>
            <h1>{name}</h1>
            <p>{zipcode}</p>
            {/* <Link>{id}</Link> */}
            <button>Delete</button>
        </div>

    )
}

export default Store