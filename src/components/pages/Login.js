import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  Description,
  Illustration,
  WelcomeText,
  SignUpText,
  LoginButton,
  LoginSection,
  Logo,
  Input,
  Divider,
  SocialButton,
  SocialLogin,
  Container,
  RightSection,
  Title,
} from "../styled/Login.styles";

const GOOGLE_CLIENT_ID =
  "339346172312-2dvgub5mm3rij2os67kpimcp98uli9h5.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Optional, if needed for backend authentication

  // Handle Google Login
  const handleGoogleLogin = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);

    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);
    const userEmail = decodedToken.email;

    console.log("User Email:", userEmail);

    // Store email in localStorage
    localStorage.setItem("userEmail", userEmail);
    navigate("/dashboard");
  };

  const handleGoogleLoginFailure = () => {
    console.log("Google Login Failed");
  };

  // Handle Email/Password Login
  const handleEmailPasswordLogin = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    console.log("Email/Password Login Success:", email);

    // Store email in localStorage
    localStorage.setItem("userEmail", email);

    // Navigate to Dashboard
    navigate("/dashboard");
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Container>
        <LoginSection>
          <Logo>ScannerGo</Logo>
          <Title>Login to your account</Title>
          <SocialLogin>
            <SocialButton>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={handleGoogleLoginFailure}
              />
            </SocialButton>
          </SocialLogin>
          <Divider>Or use e-mail address</Divider>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={handleEmailPasswordLogin}>Login now</LoginButton>
          <SignUpText>
            Don’t have an account? <a href="/">Join free today</a>
          </SignUpText>
        </LoginSection>
        <RightSection>
          <WelcomeText>WELCOME BACK!</WelcomeText>
          <Description>
            You're just one step away from a high-quality scanning experience.
          </Description>
          <Illustration>
            📄 {/* Replace with an actual image/icon */}
          </Illustration>
        </RightSection>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default Login;
