import { Card, CardContent, Typography } from "@mui/material";
import CardCovid from "../components/cardCovid/cardCovid";

export default async function apiFetch() {
    const url =
        "https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro na rede");
        }
        const data = await response.json();
        const cardsEstados = await toCard(data.infectedByRegion);
        return cardsEstados
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
}

async function toCard(estados) {
    const listaCards = estados.map((item, index) => <CardCovid estado={item.state} casos={item.count} key={index}/>);

    return listaCards
}