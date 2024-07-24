// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  margin-bottom: 40px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  /* box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.2); */

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  margin-bottom: 10px;
`;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.5s ease;
//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 10px;
  border: none;
  padding: 10px;
  background-color: hsl(180, 100%, 25.098039215686274%, 0.9);
  color: white;
  width: 80%;
`;
const ProductName = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: center;
`;
const ProductPrice = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img} />
      <Info>
        {/* <Icon>
          <ShoppingCartOutlined />
          </Icon>
          <Icon>
          <SearchOutlined />
          </Icon>
          <Icon>
          <FavoriteBorderOutlined />
          </Icon> */}
      </Info>
      <Details>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>Rs. {item.price}</ProductPrice>
      </Details>
    </Container>
  );
};

export default Product;
