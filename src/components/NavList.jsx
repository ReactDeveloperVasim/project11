import { Grid } from "@mui/material";
import React from "react";
import { NavItem } from "./NavItem";

export const NavList=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <NavItem path="/" label="Home" />
            </Grid>
            <Grid item xs={3}>
                <NavItem path="/fruit" label="fruit" />
            </Grid>
            <Grid item xs={3}>
                <NavItem path="/monuments" label="monuments" />
            </Grid>
            <Grid item xs={3}>
                <NavItem path="/speedo" label="speedo" />
            </Grid>
        </Grid>
    );
}