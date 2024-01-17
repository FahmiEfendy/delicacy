import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

import { callApi } from "./domain/api";
import classes from "./style.module.scss";
import FoodList from "./pages/FoodList";
import Categories from "./components/Categories";
import RecipeList from "./components/RecipeList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [foodByCategoryList, setFoodByCategoryList] = useState([]);

  useEffect(() => {
    const getFoodsByCategory = async () => {
      const response = await callApi(
        `/filter.php?c=${selectedCategory}`,
        "GET"
      );

      const slicedResponse = response.meals.slice(0, 10);

      setFoodByCategoryList(slicedResponse);
    };

    getFoodsByCategory();
  }, [selectedCategory]);

  // console.log("foodByCategoryList", foodByCategoryList);

  return (
    <Container maxWidth={false} className={classes.container}>
      <Typography variant="h3" className={classes.logo}>
        Delicacy
      </Typography>
      <Container maxWidth={false} className={classes.container__inner}>
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FoodList foodByCategoryList={foodByCategoryList} />
        <RecipeList />
      </Container>
    </Container>
  );
}

export default App;
