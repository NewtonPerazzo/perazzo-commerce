import { fontSizeDefaultBreakpoints } from "@/styles/breakpoints/fontSizeDefaultBreakpoints";
import { Box } from "@mui/material";

interface TextProps {
    value?: string | number;
    style?: any;
    variant?: any;
    size?: string;
}

export const Text = ({ value, style, size, variant = "p" }: TextProps) => {
    return (
        <Box
            component={variant}
            sx={{
                fontSize: size || fontSizeDefaultBreakpoints,
                ...style,
            }}
        >
        {value}
      </Box>
    )
}