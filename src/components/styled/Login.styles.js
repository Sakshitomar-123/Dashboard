// :Login Styled Components

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #eef2f3, #d9e4ea);
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoginSection = styled.div`
  width: 40%;
  background: #fff;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const RightSection = styled.div`
  width: 50%;
  text-align: center;
  padding: 2rem;
  color: #333;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 1rem;
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border: none;
  background: ${({ facebook }) => (facebook ? "#1877f2" : "#fff")};
  color: ${({ facebook }) => (facebook ? "#fff" : "#333")};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }
`;

const Divider = styled.div`
  margin: 1rem 0;
  font-size: 14px;
  color: #777;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Extras = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #777;
`;

const ForgotPassword = styled.a`
  color: #ff4d4d;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #ff4d4d;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    background: #ff3333;
  }
`;

const SignUpText = styled.p`
  margin-top: 1rem;
  font-size: 14px;
  color: #555;

  a {
    color: #ff4d4d;
    text-decoration: none;
    font-weight: bold;
  }
`;

const WelcomeText = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Illustration = styled.div`
  font-size: 50px;
`;

export {
  Description,
  Illustration,
  WelcomeText,
  SignUpText,
  LoginButton,
  LoginSection,
  Logo,
  ForgotPassword,
  RememberMe,
  Extras,
  Input,
  Divider,
  SocialButton,
  SocialLogin,
  Container,
  RightSection,
  Title
};
