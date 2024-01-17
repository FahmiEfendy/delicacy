import { Box } from "@mui/material";

import FoodDetail from "../FoodDetail";
import classes from "./style.module.scss";

const FoodList = ({ foodByCategoryList }) => {
  return (
    // TODO: Remove Scrollbar
    <Box className={classes.container}>
      {foodByCategoryList.map((data) => {
        return <FoodDetail key={data.idMeal} id={data.idMeal} />;
      })}
    </Box>
  );
};

export default FoodList;
