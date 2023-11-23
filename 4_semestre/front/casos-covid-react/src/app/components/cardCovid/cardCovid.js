import './cardCovid.css'
import { Card, CardContent, Icon, ThemeProvider, Typography } from "@mui/material"
import theme from '@/app/theme/theme'
import { PlaceOutlined, CoronavirusOutlined } from '@mui/icons-material'

export default function CardCovid({ estado, casos }) {
    return (
        <Card variant="outlined" className="card" elevation={"5"} sx={{ width: "400px", textAlign: "center" }}>
            <CardContent>
                <Typography variant="h4" textAlign={"center"}>
                    <PlaceOutlined fontSize='large'></PlaceOutlined> {estado}
                </Typography>
                <Typography variant="h4">
                    <CoronavirusOutlined fontSize='large'></CoronavirusOutlined> {casos}
                </Typography>
            </CardContent>
        </Card>
    )
}