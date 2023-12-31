import { Grid , Button, Card, CardContent} from "@mui/material";
import React, { useEffect, useState } from "react";

export const Speedo=()=>{
    const[curr,setCurr]=useState(0);
    const[clr,setClr]=useState("");

    useEffect(()=>{
        if(curr>0 && curr<=30){
            setClr("yellow");
        }
        else if(curr>=30 && curr<=55){
            setClr("green");
        }
        else{
            setClr("coral");
        }

    },[curr])

    return(
        <Grid container spacing={2} align="center">
        <Grid item xs={12} >
            <h1>Speedo Meter</h1>
        </Grid>
            <Grid item xs={3}>
                <Button onClick={()=>curr>0 && setCurr(curr-5)} variant="contained" color="success" sx={{height:125}} fullWidth>De Accelerate(-)</Button>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{bgcolor:clr}}>
                    <CardContent><h1>{curr}</h1></CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={()=>curr<100 && setCurr(curr+5)} variant="contained" color="success" sx={{height:125}} fullWidth>Accelerate(+)</Button>
            </Grid>
        </Grid>
    );
}