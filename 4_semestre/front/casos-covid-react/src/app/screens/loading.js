import { Box, CircularProgress, Typography } from "@mui/material";
import theme from "../theme/theme";

export default function LoadingScreen() {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <CircularProgress></CircularProgress>
        </Box>
    )
}