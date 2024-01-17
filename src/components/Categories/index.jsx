import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import classes from "./style.module.scss";
import { callApi } from "../../domain/api";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");

  const changeCategoryHandler = (c) => {
    setSelectedCategory(c);
  };

  useEffect(() => {
    const FetchData = async () => {
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
    };

    FetchData();
  }, []);

  return (
    <React.Fragment>
      {categoryList.length > 0 && (
        <Box className={classes.category}>
          {categoryList.map((c) => {
            return (
              <Typography
                key={c.idCategory}
                className={
                  selectedCategory === c
                    ? classes.category__list_active
                    : classes.category__list
                }
                onClick={() => changeCategoryHandler(c)}
              >
                {c.strCategory}
              </Typography>
            );
          })}
        </Box>
      )}
    </React.Fragment>
  );
};

export default Categories;
