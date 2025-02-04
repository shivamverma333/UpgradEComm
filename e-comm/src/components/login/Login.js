import { TextField, Stack, Paper, Button } from "@mui/material";
import { useState } from "react";
import "./Login.css";
import { Link ,useNavigate} from "react-router-dom";
import { signInAPI } from "../../common/services/loginservice";
import { useAuth } from "../../utils/auth";
import { getToken, setToken } from "../../utils/token.js";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const paperCss = {
    padding: "1em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2em",
    marginLeft: "10%",
    marginRight: "10%",
    width: "70%",
  };

  const [values, setValues] = useState(initialValues);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    //validateForm();
    callSignInAPI();
    setValues(initialValues);
        
  }

  const callSignInAPI=()=>{
    const response = signInAPI(values);
    response.then((res)=>{
      setAuth(res.data);
      setToken();
    })
    .catch((err)=>{
    console.log(err.message);
    });
  }

  const setAuth=(user)=>{
    auth.login(user);
    navigate('/',{replace: true});

  }

  return (
    <>
      <Paper elevation={3} sx={paperCss}>
        <form>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <h1 className="loginHeading">Login</h1>
            <TextField
              variant="outlined"
              label="Email"
              name="username"
              value={values.username}
              onChange={handleChange}
              size="small"
            />
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              size="small"
            />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            <p>New user? Sign up <Link to='/signup'>here</Link></p>
          </Stack>
        </form>
      </Paper>
    </>
  );
};

export default Login;
