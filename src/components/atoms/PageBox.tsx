import { pageLayoutGrid } from "@/styles/breakpoints/pages/pageLayoutGrid";
import { pageLayoutPadding } from "@/styles/breakpoints/pages/pageLayoutPadding";
import { Box } from "@mui/material";

export const PageBox = ({ children }: { children: React.ReactNode }) => (
    <Box sx={{ display: 'flex', flexDirection: pageLayoutGrid, padding: pageLayoutPadding }}>
      {children}
    </Box>
)