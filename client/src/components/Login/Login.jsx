import React, { useState } from "react";
import s from "./Login.module.css";
import { TextField, Button } from "@mui/material";
import { validateLogin } from "../../utils/registerValidations";
import { postLogin } from "../../utils/login";
import { useDispatch } from "react-redux";
import { setCookie } from "../../redux/actions";
import {GoogleLogin, googleData} from "react-google-login";
import axios from "axios";

function Login({ setLogin, setLoginModal }) {
  const dispatch = useDispatch();
  const [start, setStart] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [inputsErrors, setInputErrors] = useState({});

  const handleChange = (e) => {
    if (start) {
      setStart(() => false);
    }
    setInputs((prev) => {
      //guard el input modificado
      const input = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      // seteo los errores
      setInputErrors(() => {
        return validateLogin(input);
      });
      // seteo el estado
      return input;
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await postLogin(inputs);

      setInputs({
        username: "",
        password: "",
      });

      setLogin(() => true);
      setLoginModal(() => false);
      dispatch(setCookie(document.cookie));
    } catch (e) {
      setInputErrors(() => {
        let error = {};
        if (e.response.data === "user incorrect") {
          error.username = "User incorrect";
        } else {
          error.password = "Password incorrect";
        }
        return error;
      });
    }
  };
  const handleLogin = async googleData => {
    try{
     const token = googleData.tokenId
console.log(googleData)
    const res = await axios.post(`/login?token=${token}`)
    setLogin(() => true);
      setLoginModal(() => false);
      dispatch(setCookie(document.cookie));
    }catch(e){
     alert("Unregistered user")
    }
      // store returned user somehow
    }


  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          error={inputsErrors.username ? true : false}
          helperText={inputsErrors.username}
          name="username"
          value={inputs.username}
          label="Username"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          error={inputsErrors.password ? true : false}
          helperText={inputsErrors.password}
          name="password"
          value={inputs.password}
          label="Password"
          type="password"
          variant="outlined"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={Object.keys(inputsErrors).length ? true : false}
        >
          Sing in
        </Button>
        <GoogleLogin
    clientId="316128007785-fif02sojlsoinu9s5eugus3qaagiclid.apps.googleusercontent.com"
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={inputsErrors.google}
    helperText={inputsErrors.google}
/>
      </form>
    </div>
  );
}

export default Login;
