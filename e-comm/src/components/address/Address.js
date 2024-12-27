import { TextField, Stack, Paper, Button, MenuItem, Select, InputLabel, FormControl, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./Address.css";
import { Form, Link } from "react-router-dom";



const Address = ({ address, saveAddress,addressList }) => {
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


    const [values, setValues] = useState(address);

    const [errors, setErrors] = useState({});

    const [selectAddress ,setSelectAddress] = useState('');

    const handleChange = (e) => {
        setSelectAddress(e.target.value);
    };

    const handleFormChange=(e)=>{
        const {name,value} = e.target;
        setValues({...values,[name]:value});
    }

    const handleSave = () => {
        saveAddress(values);
        setValues(address);
    }


    return (
        <>
            <Paper elevation={3} sx={paperCss}>

                <Form>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Address</InputLabel>
                        <Select
                            sx={{ marginBottom: "10px" }}
                            size="small"
                            value={selectAddress}
                            label="Select Address"
                            onChange={handleChange}
                        >
                            {addressList.map((add)=>(
                                <MenuItem key={add.key} value={add.name}>{add.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                        <h5 className="line-break">OR</h5>

                    <Stack spacing={2} sx={{ width: "100%" }}>

                        <Typography variant="h5" className="add-address">Add Address</Typography>

                        <FormControl>
                            <TextField
                                variant="outlined"
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={handleFormChange}
                                size="small"
                            />
                            <span>{errors.name}</span>
                        </FormControl>

                        <FormControl>
                            <TextField
                                variant="outlined"
                                name="contactNumber"
                                label="Contact"
                                value={values.contactNumber}
                                onChange={handleFormChange}
                                size="small"
                            />
                            <span>{errors.contactNumber}</span>

                        </FormControl>

                        <FormControl>
                            <TextField
                                variant="outlined"
                                label="Street"
                                name="street"
                                value={values.street}
                                onChange={handleFormChange}
                                size="small"
                            />
                            <span>{errors.street}</span>
                        </FormControl>

                        <FormControl>
                            <TextField
                                variant="outlined"
                                label="City"
                                name="city"
                                value={values.city}
                                onChange={handleFormChange}
                                size="small"
                            />
                            <span>{errors.city}</span>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField
                                variant="outlined"
                                label="State"
                                name="state"
                                value={values.state}
                                onChange={handleFormChange}
                                size="small"
                            />
                            <span>{errors.state}</span>
                        </FormControl>

                        <FormControl>
                            <TextField
                                variant="outlined"
                                label="Landmark"
                                name="landmark"
                                value={values.landmark}
                                onChange={handleFormChange}
                                size="small"
                            />
                            <span>{errors.landmark}</span>
                        </FormControl>

                        <FormControl>
                            <TextField
                                variant="outlined"
                                label="Zip"
                                name="zipcode"
                                value={values.zipcode}
                                onChange={handleFormChange}
                                size="small"
                            />
                            <span>{errors.zip}</span>
                        </FormControl>
                        <FormControl>
                            <Button size="small" fullWidth variant="contained"
                            sx={{bgcolor:"#3f51b5"}}
                             onClick={handleSave}>Save</Button>
                        </FormControl>
                    </Stack>
                </Form>
            </Paper>
        </>
    );
};

export default Address;
