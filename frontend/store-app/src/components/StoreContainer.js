import { useState, useEffect} from 'react';
import Store from './Store';
import { Link } from "react-router-dom";

function StoreContainer () {
    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/stores")
            .then((resp) => resp.json())
            .then((stores) => setStores(stores))
    },[])

    // Will need function to handle delete... Pass down to Store
    // Also will need function to create random store

    function handleDelete(id) {
        const updatedStores = stores.filter((store) => store.id !== id);
        setStores(updatedStores);
    }
    

    function handleNewStore() {
        fetch("http://localhost:9292/stores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({}),
        })
        .then((resp) => resp.json())
        .then((store) => {
            setStores((stores) => [...stores, store] )
        })
    }


    return(
        <div>
            <div>
                <Link to="/">Go Back</Link>
            </div>
            <button onClick={() => handleNewStore()}>Add Random Store</button>
            {stores.map((store) => {
                return(
                    <Store
                        key={store.id}
                        id={store.id}
                        name={store.name}
                        zipcode={store.zipcode}
                        img={store.img_url}
                        onHandleDelete={handleDelete}
                    />
                )
            })}
        </div>
    )
}

export default StoreContainer