import { useState } from "react"
import { Button, Dialog, Portal, Text } from "react-native-paper"

const BoxDialog = ({ children, action }) => {
    const [visible, setVisible] = useState(true)
    const hideDialog = () => setVisible(false)

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Mensagem do Sistema</Dialog.Title>
                <Dialog.Content>
                    <Text>{children}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Cancelar</Button>
                    <Button onPress={() => action()}>Confirmar</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default BoxDialog;