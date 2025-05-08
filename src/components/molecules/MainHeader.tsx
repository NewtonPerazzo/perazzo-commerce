"use client";
import { Box } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Logo } from "../atoms/Logo";

export const MainHeader = () => {
    return (
        <Box 
            sx={{
                position: "fixed",
                padding: 2,
                height: 70,
                top: 0,
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                backgroundColor: "pink"
            }}
        >
            <WhatsAppIcon />
            <Logo  /> {/*  image="/imgs/logo.png" */}
            <ShoppingCartIcon />
        </Box>
    );
}