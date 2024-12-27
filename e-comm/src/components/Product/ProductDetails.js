import { Alert, Button, Chip, Grid2 as Grid, Paper, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom';
import { getProductById } from '../../common/services/getproductbyid';
import './ProductDetails.css';

export const ProductDetails = ({productId,setActiveStep,activeStep}) => {

    const [quantity, setQuantity] = useState('');

    const paperCss = {
        padding: "4em",
        display: "flex",
        alignItems: "center",
        marginTop: "2em",
        marginLeft: "10%",
        marginRight: "10%",
        height: "auto",
        justifyContent: "left"
    };

    const chipCss = {
        font: "bold", bgcolor: "#3f51b5",
        color: "white", marginTop: "3px", marginLeft: "10px"
    };

    const buttonCss = {
        bgcolor: "#3f51b5",
        color: "white", marginTop: "10px"
    };

    const productInitialValues = {
        id: "",
        name: "",
        category: "",
        price: 0.0,
        description: "",
        manufacturer: "",
        availableItems: 0,
        imageUrl: ""
    }

    //const { productId } = useParams();
    const [product, setProduct] = useState(productInitialValues);
    const [open, setOpen] = useState({ isOpen: false, message: "" });

    useEffect(() => {
        const response = getProductById(productId);
        response.then((res) => {
            setProduct(res.data);
        }
        ).catch((error) => {
            console.log(error);
        });
    }, [productId]);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleSubmit = () => {
        if (quantity === '') {
            setOpen({ isOpen: true, message: 'Quantity cannot be empty' });
            return;
        } else if (isNaN(quantity)) {
            setOpen({ isOpen: true, message: 'Invalid value entered' });
            return;
        } else if (quantity > product.availableItems) {
            setOpen({ isOpen: true, message: 'Quantity Entered cannot be greater than available items' });
            return;
        }

        setActiveStep(activeStep+1);

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ ...open, isOpen: false });
    }

    return (
        <>
            <Paper elevation={3} sx={paperCss}>
                <Grid container spacing={3} style={{ marginTop: "20px", width: "100%" }} >
                    <Grid item xs={12} sm={6} ms={6} key={0}>
                        <div className='img-container'>
                            <img className='product-image'
                                srcSet={product.imageUrl}
                                src={product.imageUrl}
                                alt={product.title}
                                loading="lazy"
                            />
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6} ms={6} key={1}>
                        <div className="heading">
                            <Typography variant="h4">{product.name}</Typography>
                            <Chip size="small" sx={chipCss} label={`Available quantity : ${product.availableItems}`}
                                variant="filled" />
                        </div>

                        <Typography variant="p">Category :<b> {product.category}</b></Typography>
                        <div className="description-box">
                            <Typography variant="p" >{product.description}</Typography>
                        </div>
                        <Typography variant="h5" style={{ color: "red", marginTop: "10px" }}>$ {product.price}</Typography>
                        <Form >
                            <TextField size="small" sx={{ marginTop: "20px" }}
                                name="quantity" value={quantity}
                                label="Enter Quantity"
                                onChange={handleChange}
                            ></TextField>
                            <div>
                                <Button variant="contained" size="small" sx={buttonCss}
                                    onClick={handleSubmit}
                                >Place Order</Button>

                            </div>
                        </Form>
                    </Grid>
                </Grid>
                <Snackbar open={open.isOpen} autoHideDuration={6000} onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert
                        onClose={handleClose}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {open.message}
                    </Alert>
                </Snackbar>
            </Paper>
        </>
    );
}
