import { useState } from "react";
import { StyleSheet, View} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { ApiNews } from "../api/ApiNews";

const AddScreen = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function createNews() {
        if(!title || !content) return alert('Preencha todos os campos');
        const api = new ApiNews();
        api.createNews(title, content);
        setTitle('');
        setContent('');
        alert('Noticia criada com sucesso');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo} variant="headlineMedium" >Criar Noticia</Text>
            <View>
                <TextInput style={styles.input} label={'Titulo'} placeholder="Ex: 'Hoje fez 30 graus'" value={title} onChangeText={text => setTitle(text)}></TextInput>
                <TextInput style={styles.input} label={'Conteudo'} placeholder="Ex: 'Na grande metropole...'" value={content} onChangeText={text => setContent(text)}></TextInput>
                <Button mode="contained" onPress={() => createNews()}>Enviar</Button>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },

    titulo: {
        marginBottom: 10,
    },

    input: {
        width: 250,
        marginBottom: 10,
    },

})

export default AddScreen;