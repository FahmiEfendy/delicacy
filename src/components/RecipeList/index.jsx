import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import Loading from "../Loading";
import classes from "./style.module.scss";
import { callApi } from "../../domain/api";
import RecipeDetail from "../RecipeDetail";

const RecipeList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const getRecipeByArea = async () => {
      setIsLoading(true);
      try {
        const response = await callApi("/filter.php?a=Chinese", "GET");

        const slicedResponse = response?.meals?.slice(0, 7);

        setRecipeList(slicedResponse);
      } catch (err) {
        console.log(err.message);
      }

      setIsLoading(false);
    };
    getRecipeByArea();
  }, []);

  return (
    <Box className={classes.container}>
      {!isLoading ? (
        <>
          <Typography variant="h4">More recipies</Typography>
          {recipeList.length > 0 &&
            recipeList.map((data) => {
              return <RecipeDetail data={data} key={data.idMeal} />;
            })}
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default RecipeList;
