import { useState } from "react";
import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";

const Categories = () => {
  const categories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Favorite",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Beef");

  const changeCategoryHandler = (c) => {
    setSelectedCategory(c);
  };

  return (
    <Box className={classes.category}>
      {categories.map((c, i) => {
        return (
          <Typography
            key={i}
            className={
              selectedCategory === c
                ? classes.category__list_active
                : classes.category__list
            }
            onClick={() => changeCategoryHandler(c)}
          >
            {c}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Categories;
