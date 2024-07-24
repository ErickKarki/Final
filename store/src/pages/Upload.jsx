import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import bgImage from "../assets/background.jpg";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bgImage}) center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const Upload = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("image", formData.image);

    try {
      const token = localStorage.getItem("token"); // Assumes token is stored in localStorage

      const res = await axios.post(
        "http://localhost:5001/api/products/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Product uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to upload product.");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>ADD YOUR PRODUCT</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name of your product"
              name="name"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="Price of your product"
              name="price"
              onChange={handleChange}
              required
            />

            <Input
              type="file"
              name="image"
              onChange={handleFileChange}
              required
            />
            <Select name="category" onChange={handleChange} required>
              <Option disabled selected>
                Select Category
              </Option>
              <Option value="Kids">Kids</Option>
              <Option value="Women">Women</Option>
              <Option value="Men">Men</Option>
            </Select>

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">UPLOAD</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Upload;
