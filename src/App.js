import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Ingredient from "./routes/Ingredient";
import FoodCost from "./routes/FoodCost";
import Navigation from "./routes/Navigation";
import "./styles/app.css"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route basename={process.env.PUBLIC_URL} element={<Navigation />}>
            <Route basename={process.env.PUBLIC_URL} path="/foodcost-react-version" element={<Home />} />
            <Route basename={process.env.PUBLIC_URL} path="/ingredient" element={<Ingredient />} />
            <Route basename={process.env.PUBLIC_URL} path="/foodCost" element={<FoodCost />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;