import styled from "styled-components";
import { mobile } from "../responsive";
import bgImage from "../assets/background.jpg";
import Navbar from "../components/Navbar";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Adjust the path to where your AuthContext is defined

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
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      const { accessToken, ...user } = res.data;

      // Store user and token in local storage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", accessToken);

      // Update user state
      setUser(user);
      navigate("/");
      alert("Login successful!");
    } catch (err) {
      console.log(err);
      alert("Login failed!");
    }
  };
  return (
    <>
      <Navbar />

      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter Username"
              name="username"
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
            <Button type="submit">LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
