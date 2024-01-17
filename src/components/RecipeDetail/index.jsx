import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";

const RecipeDetail = ({ data }) => {
  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className={classes.img}
        />
        <Typography variant="body1">{data.strMeal}</Typography>
      </Box>
      <Box className={classes.backdrop} />
    </Box>
  );
};

export default RecipeDetail;
