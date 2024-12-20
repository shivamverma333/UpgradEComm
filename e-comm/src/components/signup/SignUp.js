import { TextField, Stack, Paper, Button } from "@mui/material";
import { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  contact: "",
};

const SignUp = () => {
  const paperCss = {
    padding: "2em",
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
            <h1 className="signUpHeading">Sign Up</h1>

            <TextField
              variant="outlined"
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              size="small"
            />

            <TextField
              variant="outlined"
              name="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              size="small"
            />
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
            <TextField
              variant="outlined"
              label="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              size="small"
            />
            <TextField
              variant="outlined"
              label="Contact"
              name="contact"
              value={values.contact}
              onChange={handleChange}
              size="small"
            />
            <Button variant="contained">Submit</Button>
            <p>Already have a account ? Login <Link to='/login'>here</Link></p>
          </Stack>
        </form>
      </Paper>
    </>
  );
};

export default SignUp;
