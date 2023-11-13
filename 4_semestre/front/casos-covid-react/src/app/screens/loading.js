import { Box, CircularProgress } from "@mui/material";

export default function LoadingScreen() {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <CircularProgress></CircularProgress>
        </Box>
    )
}