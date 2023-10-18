import { CardContent, Grid,Button,Card } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Monuments=()=>{
    const[name,setName]=useState("Charminar");
    const[path,setPath]=useState("");

    useEffect(()=>{
        setPath(`imgs/${name}.jpg`)
    },[name])
    return(
        <Grid container spacing={2}  align="center">
            <Grid item xs={12}>
                <Card sx={{height:"600px", bgcolor:"coral",}}>
                    <CardContent>
                        <h1>{name}</h1>
                        <img src={path} alt={name} height="550px" width="1000px"  />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}  align="center">
                <Button color="success" onClick={()=>setName("Charminar")} variant="contained" fullWidth>CharMinar</Button>
            </Grid>
            <Grid item xs={4}>
                <Button color="success" onClick={()=>setName("mysore-palace")} variant="contained" fullWidth>Mysore Palace</Button>
            </Grid>
            <Grid item xs={4}>
                <Button color="success" onClick={()=>setName("Red-Fort-Delhi")} variant="contained" fullWidth>Lal Quila</Button>
            </Grid>
           
        </Grid>
    );
}