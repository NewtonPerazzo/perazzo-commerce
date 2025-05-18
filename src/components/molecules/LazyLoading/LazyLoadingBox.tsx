import { Colors } from "@/styles/colors";
import { Box, Skeleton } from "@mui/material";

export const LazyLoadingBox = () => (
    <Box sx={{ 
        width: 120, 
        height: '100%', 
        backgroundColor: Colors.white.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1
    }}>
        {/* <Box sx={{ 
            backgroundColor: Colors.gray.lazyLoading, 
            width: 100, 
            height: 100,
            borderRadius: 2,
        }}>
        </Box>
        <Box sx={{ width: '100%', height: 10, backgroundColor: Colors.gray.lazyLoading, borderRadius: 8 }} />
        <Box sx={{ width: '70%', height: 10, backgroundColor: Colors.gray.lazyLoading, borderRadius: 8 }} /> */}
        <Skeleton variant="rectangular" width={210} height={118} />
    </Box>
)