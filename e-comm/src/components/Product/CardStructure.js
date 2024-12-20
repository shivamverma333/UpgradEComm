import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import './CardStructure.css'
import React from "react";

const CardStructure = ({ result }) => {

  return (
    <div>
      <Card elevation={4} sx={{ width: 350,height:400 }}>
        <CardMedia
          sx={{ objectFit: 'contain', width: '100%', height: 200 }}
          image={result.imageUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography style={{ display: 'inline-block' }} sx={{textDecoration:"bold"}} gutterBottom variant="subtitle1" component="div">
            {result.name}
          </Typography>
          <Typography style={{ display: 'inline-block', float: 'right' }} variant="h6" sx={{ color: "text.secondary" }}>
            {"$" + result.price}
          </Typography>
          <div>
            <Typography variant="p" align="justify" noWrap="true">
                <div className="text">{result.description}</div>
            </Typography>
          </div>

        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" sx={{ bgcolor: "#3f51b5" }}>Buy</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardStructure;
