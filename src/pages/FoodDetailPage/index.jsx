import { Box } from "@mui/material";
import React from "react";

import classes from "./style.module.scss";
import { useParams } from "react-router-dom";
import FoodDetail from "../../components/FoodDetail";
import RecipeList from "../../components/RecipeList";

const FoodDetailPage = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <FoodDetail id={id} />
      </Box>
      <RecipeList />
    </React.Fragment>
  );
};

export default FoodDetailPage;