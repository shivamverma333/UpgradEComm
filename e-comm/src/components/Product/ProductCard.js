import { Container, Grid2 as Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardStructure from "./CardStructure.js";
import '../../common/services/productservice.js';
import { getAllProducts } from "../../common/services/productservice.js";
import Toggle from "../toggle/Toggle.js";


const ProductCard = () => {

  const [products, setProducts] = useState([]);

  const [displayProducts, setDisplayProducts] = useState([]);

  const [filter, setFilter] = useState('ALL');

  const APPAREL = ['Clothes', 'Pants', 'Shoes', 'CLOTHES', 'ACCESSORIES'];
  const ELECTRONICS = ['electronics', 'Watches','Cooking'];
  const PERSONALCARE = ['makeups', 'Perfumes', 'Fitness'];

  useEffect(() => {
    const products = getAllProducts();
    products.then((res) => {
      setProducts(res.data);
      setDisplayProducts(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    filterCategory();
  },[filter]);

  const filterCategory = () => {
    console.log("inside filter category", filter)
    if (filter === 'APPAREL') {
      setDisplayProducts(products.filter((product) =>
        APPAREL.indexOf(product.category) >= 0));
    } else if (filter === 'ELECTRONICS') {
      setDisplayProducts(products.filter((product) =>
        ELECTRONICS.indexOf(product.category) >= 0));
    } else if (filter === 'PERSONALCARE') {
      setDisplayProducts(products.filter((product) =>
        PERSONALCARE.indexOf(product.category) >= 0));
    } else if (filter === 'ALL') {
      setDisplayProducts(products);
    }

  }


  return (
    <>
      <Toggle setFilter={setFilter} />
      <Container maxWidth="lg">
        <Grid container spacing={5} style={{ marginTop: "20px" }} sx={{ justifyContent: 'center', alignContent: 'center' }}>
          {displayProducts.map((result, index) => {
            return (
              <Grid item xs={12} sm={4} ms={4} key={index}>
                <CardStructure result={result} />
              </Grid>);
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ProductCard;
