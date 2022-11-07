import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to the Store App!</h2>
      <p>Please click the link below to see the available stores</p>
      <Link to="/stores">See Stores</Link>
    </div>
  );
}

export default Home;
