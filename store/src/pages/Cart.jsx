import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 500px;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Desc = styled.div`
  padding-bottom: 100px;
`;
const SellerDetails = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 10px;
  box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.6);
`;
const SellerTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 10px;
`;
const About = styled.div``;
const Contact = styled.div`
  font-weight: 700;
`;
const Email = styled.div`
  font-weight: 700;
`;
const Location = styled.div`
  font-weight: 700;
`;

const Chat = styled.button`
  margin-top: 10px;
  width: 40%;
  height: 40px;
  background-color: teal;
  color: white;
  border: none;
`;

const ProductName = styled.div`
  font-size: 24px;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  padding-top: 10px;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600;
  border: none;
  flex: 1;
`;

const ChatBox = styled.textarea``;
const TypeAndSend = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled.textarea`
  flex: 5;
  margin-right: 5px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          {/* <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts> */}
          {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                <Details>
                  <Desc>
                    <ProductName>
                      <b>Product:</b> Vintage T-Shirt
                    </ProductName>
                    <ProductPrice>
                      <b>Price:</b> Rs.400
                    </ProductPrice>
                    {/* <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize> */}
                  </Desc>

                  <SellerDetails>
                    <SellerTitle>Seller Details:</SellerTitle>
                    <About>
                      <Contact>Contact:</Contact>
                      <Email>Email:</Email>
                      <Location>Location:</Location>
                    </About>
                    <Chat>Chat with seller</Chat>
                  </SellerDetails>
                </Details>
              </ProductDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Chat</SummaryTitle>
            <ChatBox></ChatBox>
            {/* <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem> */}
            <TypeAndSend>
              <TextBox>Write message...</TextBox>
              <Button>Send</Button>
            </TypeAndSend>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
