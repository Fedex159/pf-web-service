import React, { useState } from "react";
import s from "./Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validateLogin } from "../../utils/registerValidations";
import { postLogin } from "../../utils/login";
import { useDispatch } from "react-redux";
import { setCookie } from "../../redux/actions";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import Divider from "@mui/material/Divider";

function Login({ setLogin, setLoginModal, setRegisterModal }) {
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
      const response = await postLogin(inputs);

      setInputs({
        username: "",
        password: "",
      });

      setLoginModal(() => false);
      dispatch(setCookie(response.data));
      setLogin && setLogin(true);
    } catch (e) {
      setInputErrors(() => {
        let error = {};
        if (e.response && e.response.data === "user incorrect") {
          error.username = "User incorrect";
        } else {
          error.password = "Password incorrect";
        }
        return error;
      });
    }
  };
  const handleLogin = async (googleData) => {
    try {
      const token = googleData.tokenId;
      const res = await axios.post(`/login?token=${token}`);
      // console.log(res.data);
      setLoginModal(() => false);
      dispatch(setCookie(res.data));
      setLogin && setLogin(true);
    } catch (e) {
      alert("Unregistered user");
    }
  };

  const handleCreateAccount = () => {
    setRegisterModal((prev) => !prev);
    setLoginModal((prev) => !prev);
  };

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
          sx={{ marginTop: "4%", marginBottom: "4%" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={Object.keys(inputsErrors).length ? true : false}
          fullWidth={true}
        >
          Sing in
        </Button>
      </form>
      <Divider
        sx={{
          width: "100%",
          border: "1px solid rgba(0,0,0,.1)",
          borderRadius: 12,
          marginBottom: "5%",
          marginTop: "5%",
        }}
      />

      <div className={s.new}>
        <p>New to WebService?</p>

        <Button
          variant="outlined"
          color="secondary"
          disableElevation
          size="small"
          sx={{ marginRight: "4%" }}
          onClick={handleCreateAccount}
        >
          CREATE ACCOUNT
        </Button>

        <GoogleLogin
          clientId="316128007785-fif02sojlsoinu9s5eugus3qaagiclid.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={inputsErrors.google}
          helperText={inputsErrors.google}
        />
      </div>
    </div>
  );
}

export default Login;
