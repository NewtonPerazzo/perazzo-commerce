import Image from "next/image";

interface LogoProps {
    image?: string
}

export const Logo = ({ image }: LogoProps) => {
    return (image ?
        <Image
            objectFit="cover"
            src={image}
            alt="Logo"
            width={70}
            height={70}
        />
        : <h1>Doce Maria</h1>
    );
}