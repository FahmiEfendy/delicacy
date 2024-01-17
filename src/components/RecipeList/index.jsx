import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";
import RecipeDetail from "../RecipeDetail";

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const getRecipeByArea = async () => {
      const response = await callApi("/filter.php?a=Chinese", "GET");

      const slicedResponse = response?.meals?.slice(0, 7);

      setRecipeList(slicedResponse);
    };

    getRecipeByArea();
  }, []);

  return (
    <Box className={classes.container}>
      <Typography variant="h4">More recipies</Typography>
      {recipeList.map((data) => {
        return <RecipeDetail data={data} key={data.idMeal} />;
      })}
    </Box>
  );
};

export default RecipeList;
