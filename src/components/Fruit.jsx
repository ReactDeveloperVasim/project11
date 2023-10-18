import { Grid,Card,CardContent,Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Fruit=()=>{
    const[name,setName]=useState("orange");
    const[path,setPath]=useState("");

    useEffect(()=>{
        setPath(`imgs/${name}.jpg`);
    },[name])

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card sx={{height:"500px"}}>
                    <CardContent>
                        <h1>{name}</h1>
                        <img src={path} alt={name} height="300px"/>
                    </CardContent>
                </Card>
               
            </Grid>
            <Grid item xs={4}>
                    <Button onClick={()=>setName("orange")} variant="contained" color="success" fullWidth>Orange</Button>
                </Grid>
            <Grid item xs={4}>
                    <Button onClick={()=> setName("strawberry")} variant="contained" color="warning" fullWidth>StrawBerry</Button>
            </Grid>
            <Grid item xs={4}>
                    <Button onClick={()=>setName("pears")} variant="contained" color="info" fullWidth>Pears</Button>
            </Grid>
        </Grid>
    );
}