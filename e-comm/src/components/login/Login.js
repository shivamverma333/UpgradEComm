import { TextField, Stack, Paper, Button } from "@mui/material";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(value);
  };

  return (
    <>
      <Paper elevation={3} sx={paperCss}>
        <form>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <h1 className="loginHeading">Login</h1>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={values.email}
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
            <Button variant="contained">Submit</Button>
            <p>New user? Sign up <Link to='/signup'>here</Link></p>
          </Stack>
        </form>
      </Paper>
    </>
  );
};

export default Login;
