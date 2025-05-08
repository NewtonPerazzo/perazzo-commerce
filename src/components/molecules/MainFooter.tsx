"use client";
import { Box } from "@mui/material";
import { Text } from "../atoms/Text";

export const MainFooter = () => {
    return (
        <Box 
            sx={{
                height: 40,
                position: "fixed",
                bottom: 0,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderTop: "1px solid #ccc",
            }}
        >
            <Text value="Desenvolvido por Newton Perazzo" />
        </Box>
    );
}