import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavItem=({path,label})=>{
    return(
        <Link to={path}>
            <Button variant="contained" fullWidth color="secondary" marginBottom="30px">
                {label}
            </Button>
        </Link>

    );
} 