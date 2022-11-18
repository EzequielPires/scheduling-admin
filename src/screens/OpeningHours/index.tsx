import {useState} from "react";
import { useRouter } from "next/router";
import { Button, Container, Content, Header, Title, Body } from "../../../styles/globals";
import { Alert } from "../../components/Alert";
import { InputDayWeek } from "../../components/Form/InputDayWeek";

export function OpeningHours({data}) {
    const router = useRouter();
    const [show, setShow] = useState(false);
    return (
        <Container>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Horário de funcionamento</Title>
                </Header>
                {
                    show &&
                    <Alert
                        title={`Remover Especialista`}
                        subtitle={`Deseja mesmo remover esse especialista?`}
                        close={() => setShow(false)}
                        onSubmit={() => {}}
                    />
                }
                <Body>
                    <InputDayWeek 
                        data={data}
                    />
                </Body>
            </Content>
        </Container>
    )
}