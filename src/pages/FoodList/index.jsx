import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";

import { callApi } from "../../domain/api";
import classes from "./style.module.scss";
import Categories from "../../components/Categories";
import FoodDetail from "../../components/FoodDetail";
import RecipeList from "../../components/RecipeList";

const FoodList = () => {
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
    <Container maxWidth={false} className={classes.container__inner}>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {/* TODO: Remove Scrollbar */}
      <Box className={classes.container}>
        {foodByCategoryList.map((data) => {
          return <FoodDetail key={data.idMeal} id={data.idMeal} />;
        })}
      </Box>
      <RecipeList />
    </Container>
  );
};

export default FoodList;
