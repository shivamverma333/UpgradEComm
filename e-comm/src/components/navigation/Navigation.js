import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Stack,
    TextField,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import "./Navigation.css";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  
  const Navigation = () => {
    const button = {
      bgcolor: "#FF007F",
    };
  
    const textField = {
      "& .MuiInputBase-root": {
        height: 40,
        borderRadius: "5px",
        textColor: "white",
      },
      "& .MuiInputBase-root::before": {
        borderBottom: "none",
      },
    };
  
    return (
      <div>
        <AppBar position="static" sx={{bgcolor:"#3f51b5" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              area-label="logo"
            >
              <ShoppingCartIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
              upGrad E-Shop
            </Typography>
            <Stack spacing={2} direction={"row"} sx={{ flexGrow: 0.5 }}>
              <TextField
                variant="filled"
                label="Search"
                size="small"
                sx={textField}
              />
            </Stack>
            <Stack spacing={2} direction={"row"}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Add Product</Button>
              <Link to='/login'><Button variant="contained" sx={button}>
                Login
              </Button></Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  export default Navigation;
  