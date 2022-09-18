import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ingredient">Ingredient</Link></li>
        <li><Link to="/foodCost">FoodCost</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navigation;