import { Box, Typography } from "@mui/material"

export default function ListScreen({listaCards}) {
    return (
        <Box display="flex" justifyContent="center" alignItems={"center"} flexDirection={"column"}>
            <Typography variant="h2">Casos de Covid - Brasil</Typography>
            <Typography variant="body1">Este site usa essa <a href="https://apify.com/pocesar/covid-brazil" target="_blank">api</a>  para capturar as informações de casos em cada Estado do Brasil.</Typography>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
                {listaCards}
            </Box>
        </Box>
    )
}