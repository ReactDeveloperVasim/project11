import { Card, CardContent, Grid , Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Home = () => {
    const[greet,setGreet]=useState("Day");
    const[msg,setMsg]=useState("");

    useEffect(()=>{
        setMsg(`Good ${greet}!!!!`)
    },[greet])
    
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <Card sx={{bgcolor:"crimson" , height:"300px"}}>
          <CardContent>
          <h1>{msg}</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={()=>setGreet("Morning")} variant="contained" fullWidth>
          Morning
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={()=>setGreet("Afternoon")} variant="contained" fullWidth>
          Afternoon
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={()=>setGreet("Evening")} variant="contained" fullWidth>
          Evening
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={()=>setGreet("Night")} variant="contained" fullWidth>
          Night
        </Button>
      </Grid>
    </Grid>
  );
};
