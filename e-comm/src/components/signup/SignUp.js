import { TextField, Stack, Paper, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import "./SignUp.css";
import { signUpAPI } from "../../common/services/signupservice";
import { Form, Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  contactNumber: "",
  role: ""
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    //validateForm();
    delete values.confirmPassword;
    setValues(values);
    checkRole();
    callSignUpAPI();
    
  }

  const checkRole=()=>{
    if(values.role === "Admin"){
      let rolesArray = ["admin"];
      values.role = rolesArray;
      setValues(values)
    }else{
      delete values.role;
      setValues(values);
    }
  }

  const callSignUpAPI = () => {
    const response = signUpAPI(values);
    response.then((res)=>{
      setValues(initialValues);
      console.log(res.data);
    })
    .catch((err)=>{});
  }

  return (
    <>
      <Paper elevation={3} sx={paperCss}>
        <Form>
          <Stack spacing={2} sx={{ width: "100%" }}>

            <h1 className="signUpHeading">Sign Up</h1>

            <FormControl>
              <TextField
                variant="outlined"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                size="small"
              />
              <span>{errors.firstName}</span>
            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                size="small"
              />
              <span>{errors.lastName}</span>

            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                size="small"
              />
              <span>{errors.email}</span>
            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                label="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                size="small"
              />
              <span>{errors.password}</span>
            </FormControl>

            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                size="small"
              />
              <span>{errors.confirmPassword}</span>
            </FormControl>

            <FormControl>
              <TextField
                variant="outlined"
                label="contactNumber"
                name="contactNumber"
                value={values.contactNumber}
                onChange={handleChange}
                size="small"
              />
              <span>{errors.contactNumber}</span>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                variant="outlined"
                label="role"
                name="role"
                value={values.role}
                onChange={handleChange}
              >
                <MenuItem value={'User'}>User</MenuItem>
                <MenuItem value={'Admin'}>Admin</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            <p>Already have a account ? Login <Link to='/login'>here</Link></p>

          </Stack>
        </Form>
      </Paper>
    </>
  );
};

export default SignUp;
