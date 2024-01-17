import React, { useEffect, useState } from "react";
import KitchenIcon from "@mui/icons-material/Kitchen";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";
import { stringFormatter } from "../../utils/StringFormatter";

const FoodDetail = (id) => {
  const navigate = useNavigate();

  const { paramsId } = useParams();

  const [foodDetail, setFoodDetail] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const foodDetailHandler = (id) => {
    navigate(`/${id}`);
  };

  const favoriteHandler = async (idMeal, strMeal, strMealThumb) => {
    const formattedData = {
      id: idMeal,
      strMeal,
      strMealThumb,
    };

    try {
      const response = await callApi(
        "/favorites",
        "POST",
        {},
        {},
        formattedData,
        true
      );
      location.reload();
    } catch (err) {
      console.log(err.message);
    }
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

  useEffect(() => {
    if (!id) return;

    const getFoodDetail = async () => {
      const response = await callApi(`/lookup.php?i=${id.id}`, "GET");

      const modifiedResponse = response?.meals?.map((data) => {
        return {
          idMeal: data.idMeal,
          strMeal: data.strMeal,
          strInstructions: data.strInstructions,
          strMealThumb: data.strMealThumb,
          strIngredients: [
            {
              strMeasure: data.strMeasure1,
              strIngredient: data.strIngredient1,
            },
            {
              strMeasure: data.strMeasure2,
              strIngredient: data.strIngredient2,
            },
            {
              strMeasure: data.strMeasure3,
              strIngredient: data.strIngredient3,
            },
            {
              strMeasure: data.strMeasure4,
              strIngredient: data.strIngredient4,
            },
          ],
        };
      });

      setFoodDetail(modifiedResponse);
    };

    getFoodDetail();
  }, [id]);

  useEffect(() => {
    const getFavoriteList = async () => {
      try {
        const response = await callApi("/favorites", "GET", {}, {}, {}, true);
        setFavoriteList(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    getFavoriteList();
  }, []);

  // console.log(`Food Detail ${id.id}`, foodDetail);

  return (
    <React.Fragment>
      {foodDetail.length > 0 && (
        <Box className={classes.container}>
          {foodDetail.map((food) => {
            const foodFavorited = favoriteList.find(
              (data) => data.id === food.idMeal
            );
            return (
              <Box className={classes.container__inner} key={food.idMeal}>
                <Box className={classes.recipe}>
                  <Typography
                    variant="h5"
                    className={classes.recipe__name}
                    onClick={() => foodDetailHandler(food.idMeal)}
                  >
                    {food.strMeal}
                  </Typography>
                  <Typography variant="body1" className={classes.recipe__desc}>
                    {stringFormatter(food.strInstructions)}
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.recipe__ingredients}
                  >
                    Ingredients
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                    className={classes.recipe__ingredients_container}
                  >
                    {food.strIngredients.map((i, idx) => {
                      return (
                        <Grid
                          key={idx}
                          item
                          xs={6}
                          className={classes.recipe__ingredients_list}
                        >
                          <Box
                            className={
                              classes.recipe__ingredients_icon_container
                            }
                          >
                            <KitchenIcon />
                          </Box>
                          <Box
                            className={classes.recipe__ingredients_list_item}
                          >
                            <Typography
                              variant="body1"
                              className={
                                classes.recipe__ingredients_list_item_text
                              }
                            >
                              {i.strIngredient}
                            </Typography>
                            <Typography
                              variant="body1"
                              className={
                                classes.recipe__ingredients_list_item_text
                              }
                            >
                              {i.strMeasure}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Box className={classes.button_container}>
                    {/* TODO: Hide Detail Button When On Detail Page */}
                    {!paramsId && (
                      <Button
                        variant="outlined"
                        className={classes.button_list}
                        onClick={() => foodDetailHandler(food.idMeal)}
                      >
                        Detail
                      </Button>
                    )}
                    {!foodFavorited ? (
                      <Button
                        variant="outlined"
                        className={classes.button_list}
                        onClick={() => {
                          favoriteHandler(
                            food.idMeal,
                            food.strMeal,
                            food.strMealThumb
                          );
                        }}
                      >
                        Add to favorites
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        className={classes.button_list}
                        color="error"
                        onClick={() => {
                          deleteFoodHandler(food.idMeal);
                        }}
                      >
                        Remove Favorite
                      </Button>
                    )}
                  </Box>
                </Box>
                <Box
                  className={classes.container_img}
                  onClick={() => foodDetailHandler(food.idMeal)}
                >
                  <img
                    src={food.strMealThumb}
                    alt={food.strMeal}
                    className={classes.recipe__img}
                  />
                </Box>
              </Box>
            );
          })}
          <Box className={classes.backdrop} />
        </Box>
      )}
    </React.Fragment>
  );
};

export default FoodDetail;
