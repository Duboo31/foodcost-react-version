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
          <Route element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/ingredient" element={<Ingredient />} />
            <Route path="/foodCost" element={<FoodCost />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
