import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";

const RecipeDetail = ({ data, favorite = false }) => {
  const navigate = useNavigate();

  const foodDetailHandler = (id) => {
    navigate(`/${id}`);
    console.log(id);
  };

  const deleteFoodHandler = async (id) => {
    try {
      const response = await callApi(
        `/favorites/${id}`,
        "DELETE",
        {},
        {},
        {},
        true
      );
      location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box className={favorite ? classes.container_big : classes.container}>
      <Box className={classes.content}>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className={favorite ? classes.img_big : classes.img}
          onClick={() => {
            foodDetailHandler(data.idMeal);
          }}
        />
        <Typography
          variant="body1"
          onClick={() => {
            foodDetailHandler(data.idMeal);
          }}
        >
          {data.strMeal}
        </Typography>
        {favorite && (
          <Button
            variant="outlined"
            className={classes.btn}
            onClick={() => {
              deleteFoodHandler(data.id);
            }}
          >
            Remove Favorite
          </Button>
        )}
      </Box>
      <Box className={classes.backdrop} />
    </Box>
  );
};

export default RecipeDetail;
