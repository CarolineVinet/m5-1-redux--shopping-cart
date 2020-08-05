import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import StoreItem from "./StoreItem";
import ItemGrid from "./ItemGrid";
import { getStoreItemArray } from "../reducers";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(getStoreItemArray);
  let totalprice = 0;
  let totalquantity = 0;
  cartItems.forEach((item) => {
    totalprice = item.price * item.quantity + totalprice;
    totalquantity = item.quantity + totalquantity;
  });
  console.log(cartItems);
  return (
    <CartBody>
      <Header>
        <CartTitle>Your Cart</CartTitle>
        <NumofItems>{totalquantity} items</NumofItems>
      </Header>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <CheckoutDiv>
        <Total>Total:$ {totalprice}</Total>
        <CartButton>Purchase</CartButton>
      </CheckoutDiv>
    </CartBody>
  );
};

const CartBody = styled.div`
  background-color: #551d55;
  border: 3px dashed #c460c4;
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  justify-content: left;
  color: white;
  padding-left: 20px;
`;

const CartTitle = styled.p`
  font-size: 24px;
`;

const NumofItems = styled.p``;

const CheckoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const Total = styled.p`
  color: white;
  font-size: 18px;
`;

const CartButton = styled.button`
  background-color: #d94e8f;
  padding: 3px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  width: 150px;
`;

export default Cart;
