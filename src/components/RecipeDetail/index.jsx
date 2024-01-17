import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";

const RecipeDetail = ({ data }) => {
  const navigate = useNavigate();

  const foodDetailHandler = (id) => {
    navigate(`/${id}`);
    console.log(id);
  };

  return (
    <Box
      className={classes.container}
      onClick={() => {
        foodDetailHandler(data.idMeal);
      }}
    >
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
