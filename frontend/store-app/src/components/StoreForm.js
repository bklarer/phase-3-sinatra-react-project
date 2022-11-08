import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function StoreForm({ setStores }) {
  const history = useHistory();

  const [newStore, setNewStore] = useState({
    name: "",
    zipcode: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewStore((newStore) => ({ ...newStore, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newStore),
    })
      .then((resp) => resp.json())
      .then((store) => {
        setStores((stores) => [...stores, store]);
        history.push(`/stores`);
      });
  }

  return (
    <div>
      <Link to="/stores">Go Back</Link>
      <h2>Add a Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Store Name"
          onChange={handleChange}
          value={newStore.name}
        />

        <input
          name="zipcode"
          type="text"
          placeholder="Zip Code"
          onChange={handleChange}
          value={newStore.zipcode}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StoreForm;
