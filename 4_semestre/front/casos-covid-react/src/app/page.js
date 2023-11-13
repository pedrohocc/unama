"use client"

import { useEffect, useState } from 'react'
import './page.css'
import apiFetch from './api/apiFetch'
import { Box, CircularProgress, ThemeProvider, Typography } from '@mui/material'
import LoadingScreen from './screens/loading'
import ListScreen from './screens/list'
import theme from './theme/theme'

export default function Home() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCards() {
      const cards = await apiFetch()
      setCards(cards)
    }

    fetchCards()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div>
        {cards.length < 1 ? <LoadingScreen></LoadingScreen> : <ListScreen listaCards={cards}></ListScreen>}
      </div>
    </ThemeProvider>
  )
}
