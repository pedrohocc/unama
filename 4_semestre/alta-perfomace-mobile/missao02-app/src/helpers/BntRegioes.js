import { StyleSheet } from "react-native"
import { Button } from "react-native-paper"


const BntRegioes = (props) => {
    const regioes = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]
    return regioes.map((item) => {
        return <Button key={item} style={styles.bnt} mode="contained" onPress={() => {
            props.onRegiaoPress(item)
        }}>{item}</Button>
    })
}

const styles = StyleSheet.create({
    bnt: {
        marginTop: 20,
        width: 200
    }
})

export default BntRegioes