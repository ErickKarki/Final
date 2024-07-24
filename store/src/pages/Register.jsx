import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import bgImage from "../assets/background.jpg";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
    passwordRepeat: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordRepeat) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log(res.data);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter First Name"
              name="name"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="Enter Last Name"
              name="lastname"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              placeholder="Repeat Password"
              name="passwordRepeat"
              onChange={handleChange}
              required
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
