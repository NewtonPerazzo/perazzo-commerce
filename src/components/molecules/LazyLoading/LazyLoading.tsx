import { Colors } from "@/styles/colors";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import { LazyLoadingBox } from "./LazyLoadingBox";

export const LazyLoading = () => (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
        }}
    >
        <Skeleton sx={{ borderRadius: 2, marginBottom: 4 }} variant="rectangular" width="50%" height={10} />
                
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'center'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
        </Box>

        <CircularProgress sx={{ color: Colors.pink.font, margin: 2 }} size={16} />

        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'center'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={118} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
                <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width={120} height={10} />
            </Box>
        </Box>

        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', gap: 1, width: '70%', alignItems: 'center' }}>
            <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width="100%" height={10} />
            <Skeleton sx={{ borderRadius: 2 }} variant="rectangular" width="80%" height={10} />
        </Box>
    </Box>
)