"use client";
import { Box, IconButton, styled } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Logo } from "../atoms/Logo";
import { redirect, useRouter } from "next/navigation";
import { Pages } from "@/enums/Pages";
import { useAppSelector } from "@/store/hooks";
import Badge, { badgeClasses } from '@mui/material/Badge';
import { Colors } from "@/styles/colors";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
    font-size: 16px;
    color: ${Colors.pink.font};
    background-color: ${Colors.white.default};
  }
`;

export const MainHeader = () => {
    const router = useRouter()
    const { count } = useAppSelector(state => state.cart)
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
                backgroundColor: "pink",
                zIndex: 999
            }}
        >
            <WhatsAppIcon />
            <Logo onClick={() => router.push(Pages.HOME)} /> {/*  image="/imgs/logo.png" */}
            <IconButton onClick={() => redirect(Pages.CART)}>
                <ShoppingCartIcon />
                {count > 0 && <CartBadge badgeContent={count} overlap="circular" />}
            </IconButton>
        </Box>
    );
}