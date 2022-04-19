import React from 'react'

import BasketHeader from "../components/Basket/BasketHeader/BasketHeader";
import Payment from "../components/Basket/Payment/Payment"
import MainLayout from '../layouts';

const PaymentPage = () => {
  return (
    <div>
        <MainLayout>
            <BasketHeader/>
            <Payment/>
        </MainLayout>
    </div>
  )
}

export default PaymentPage