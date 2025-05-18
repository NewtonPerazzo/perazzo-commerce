import { Box } from "@mui/material";
import Image from "next/image";

interface LogoProps {
    onClick?: () => void
    image?: string
}

export const Logo = ({ image, onClick }: LogoProps) => {
    return (image ?
        <Image
            objectFit="cover"
            onClick={onClick}
            src={image}
            alt="Logo"
            width={70}
            height={70}
        />
        : (
            <Box onClick={onClick}>
                <h1>Doce Maria</h1>
            </Box>
        )
    );
}