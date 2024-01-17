import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

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

        const slicedResponse = response?.meals?.slice(0, 6);

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
          <Grid container className={classes.list}>
            {recipeList.length > 0 &&
              recipeList.map((data) => {
                return (
                  <Grid item lg={2} sm={4} xs={6} key={data.idMeal}>
                    <RecipeDetail data={data} />
                  </Grid>
                );
              })}
          </Grid>
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default RecipeList;
