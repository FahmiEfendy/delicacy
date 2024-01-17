import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";
import RecipeDetail from "../../components/RecipeDetail";

const FoodFavorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const getFavorite = async () => {
      try {
        const response = await callApi("/favorites", "GET", {}, {}, {}, true);

        setFavoriteList(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    getFavorite();
  }, []);

  return (
    <Grid container className={classes.container}>
      {favoriteList.length > 0 ? (
        favoriteList.map((data) => {
          return (
            <Grid
              item
              xs={3}
              key={data.id}
              className={classes.container__inner}
            >
              <RecipeDetail data={data} favorite />
            </Grid>
          );
        })
      ) : (
        <Typography variant="h3">You have no favorited foods!</Typography>
      )}
    </Grid>
  );
};

export default FoodFavorite;
