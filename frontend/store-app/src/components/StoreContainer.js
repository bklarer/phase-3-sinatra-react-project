import { useState, useEffect} from 'react';
import Store from './Store';


function StoreContainer () {
    const [stores, setStores] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/stores")
            .then((resp) => resp.json())
            .then((stores) => setStores(stores))
    },[])

    // Will need function to handle delete... Pass down to Store
    // Also will need function to create random store




    return(
        <div>
            <button>Add Random Store</button>
            {stores.map((store) => {
                return(
                    <Store
                        key={store.id}
                        id={store.id}
                        name={store.name}
                        zipcode={store.zipcode}
                        img={store.img_url}
                    />
                )
            })}
        </div>
    )
}

export default StoreContainer