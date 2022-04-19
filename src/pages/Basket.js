import React from "react";
import PropTypes from "prop-types";
import BasketHeader from "../components/Basket/BasketHeader/BasketHeader";
import ItemBasket from "../components/Basket/ItemBasket/ItemBasket";
import MainLayout from "../layouts";
const LayoutBasket = props => {
  return (
    <>
      <MainLayout>
        <BasketHeader/>
        <ItemBasket/>
      </MainLayout>
      
      
    </>
  )
}

LayoutBasket.propTypes = {}

export default LayoutBasket