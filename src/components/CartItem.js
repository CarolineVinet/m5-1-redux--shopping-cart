import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../actions";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ItemInCart>
      <TopDiv>
        <ItemName>{item.title}</ItemName>{" "}
        <CloseButton onClick={() => dispatch(removeItem(item))}>X</CloseButton>
      </TopDiv>
      <BottomDiv>
        <ItemQuantity>
          Quantity:{" "}
          <QuantityInput
            onChange={(event) => {
              const inputValue = parseInt(event.target.value) || 0;
              dispatch(updateQuantity({ ...item, quantity: inputValue }));
            }}
            value={item.quantity}
          ></QuantityInput>
        </ItemQuantity>
      </BottomDiv>
    </ItemInCart>
  );
};

const ItemInCart = styled.div`
  background-color: #551d55;
  border: 1px dashed white;
  margin: 20px;
  border-radius: 3px;
`;

const TopDiv = styled.div`
  color: white;
  font-size: 18px;
  padding: 10px;
  background-color: purple;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const ItemName = styled.div``;

const CloseButton = styled.button`
  background-color: purple;
  color: white;
  border: none;
`;

const BottomDiv = styled.div`
  color: white;
  font-size: 16px;
  padding: 10px;
  background-color: #551d55;
`;

const ItemQuantity = styled.p``;

const QuantityInput = styled.input`
  margin: 5px;
  width: 40px;
`;

export default CartItem;
