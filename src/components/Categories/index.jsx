import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Loading from "../Loading";
import classes from "./style.module.scss";
import { callApi } from "../../domain/api";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const changeCategoryHandler = (c) => {
    setSelectedCategory(c);
  };

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        const response = await callApi("/categories.php", "GET");

        const slicedResponse = response.categories.slice(0, 6);

        const formattedCategory = [
          ...slicedResponse,
          {
            idCategory: 7,
            strCategory: "Favorite",
          },
        ];

        setCategoryList(formattedCategory);
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    };

    getCategories();
  }, []);

  return (
    <React.Fragment>
      {!isLoading ? (
        categoryList.length > 0 && (
          <Box className={classes.category}>
            {categoryList.map((c) => {
              return (
                <Typography
                  key={c.idCategory}
                  className={
                    selectedCategory === c.strCategory
                      ? classes.category__list_active
                      : classes.category__list
                  }
                  onClick={() => changeCategoryHandler(c.strCategory)}
                >
                  {c.strCategory}
                </Typography>
              );
            })}
          </Box>
        )
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default Categories;
