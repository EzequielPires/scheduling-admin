import { FiX } from "react-icons/fi";
import { ButtonIcon, Header, Text, Title } from "../../../styles/globals";
import { useNotification } from "../../contexts/NotificationContext";
import { Container, Wrapp, Body } from "./styles";

export function NotificationAside() {
    const {handleShowNotification} = useNotification();
    return (
        <Wrapp>
            <Container>
                <Header>
                    <Title>Notificações</Title>
                    <ButtonIcon onClick={handleShowNotification}>
                        <FiX />
                    </ButtonIcon>
                </Header>
                <Body>
                    <Text>Você ainda não possui notificações.</Text>
                </Body>
            </Container>
        </Wrapp>
    )
}