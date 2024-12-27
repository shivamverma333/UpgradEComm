import { Button, Step, StepLabel, Stepper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ProductDetails } from '../Product/ProductDetails';
import { useParams } from 'react-router-dom';
import './ProgressStepper.css';
import Address from '../address/Address';
import { getAddressList } from '../../common/services/getAddressList';
import { CreateAddress } from '../../common/services/createAddress';

export const ProgressStepper = () => {

    const address = {
        name: "",
        contactNumber: "",
        street: "",
        city: "",
        state: "",
        landmark: "",
        zipcode: ""
      };

    const steps = ['Items', 'Select Address', 'Confirm Order'];
    const [activeStep, setActiveStep] = useState(0);
    const { productId } = useParams();
    const [addressList,setAddressList] = useState([]);

    const saveAddress=(address)=>{
        //api call to create address
        const response=CreateAddress(address);
        response.then((res)=>{
            getAddresses();
        }).catch((err)=>{
            console.log(err);
        })
    }

    const components = [<ProductDetails productId={productId} setActiveStep={setActiveStep} 
        activeStep={activeStep} />,<Address address={address} saveAddress={saveAddress} 
        addressList={addressList}/>]

    const buttonCss = {
        bgcolor: "#3f51b5",
        color: "white", 
        marginTop: "20px",
        marginLeft:"5px",
        marginRight:"5px"
    };

    

    const incrementStep=()=>{
        setActiveStep(activeStep+1);
    }

    const decrementStep=()=>{
        setActiveStep(activeStep-1);
    }

    const getAddresses=()=>{
        const response = getAddressList();
        response.then((res)=>{
            setAddressList(res.data);

            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getAddresses();
    },[])

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                {
                    components[activeStep]
                }
            </>
            {activeStep > 0 &&
                <div class="button-wrapper">
                <Button variant="contained" disabled={activeStep === 0} onClick={decrementStep} sx={buttonCss} size="small">Back</Button>
                <Button variant="contained" disabled={activeStep === steps.length-1} onClick={incrementStep} sx={buttonCss} size="small">Next</Button>
            </div>
            }

        </div>
    )
}
