import { useRouter } from "next/router";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Container, Content, Title, Header, Button, Table, THeader, TBody, Text, THItem, TRow, TBItem, ButtonIcon } from "../../../styles/globals";
import { Alert } from "../../components/Alert";
import { useAside } from "../../contexts/AsideContext";
import { api } from "../../services/api";

export function Schedules({ data }) {
    const {show} = useAside();
    const [showAlert, setShowAlert] = useState(false);
    const [schedulesRemoved, setSchedulesRemoved] = useState(null);
    const router = useRouter();
    const [schedules, setSchedules] = useState<Array<any>>(data);

    const getDate = (date: string) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    }

    const deleteSchedules = async () => {
        if(schedulesRemoved) {
            await api.delete(`scheduling/${schedulesRemoved.id}`);
            const schedules = await api.get(`scheduling`).then(res => res.data);
            setSchedules(schedules);
            setShowAlert(false);
        }
    } 

    return (
        <Container asideHidden={!show}>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Agendamentos</Title>
                    <Button>Adicionar</Button>
                </Header>
                {
                    showAlert &&
                    <Alert
                        title={`Remover Agendamento`}
                        subtitle={`Deseja mesmo remover esse agendamento?`}
                        close={() => setShowAlert(false)}
                        onSubmit={() => deleteSchedules()}
                    />
                }
                <Table>
                    <THeader>
                        <THItem>
                            <Text>Cliente</Text>
                        </THItem>
                        <THItem>
                            <Text>Especialista</Text>
                        </THItem>
                        <THItem>
                            <Text>Serviço</Text>
                        </THItem>
                        <THItem>
                            <Text>Data</Text>
                        </THItem>
                        <THItem>
                            <Text>Horário</Text>
                        </THItem>
                        <THItem mw="80px">
                            <Text>Ações</Text>
                        </THItem>
                    </THeader>
                    <TBody>
                        {schedules.length > 0 ? schedules.map(item => (
                            <TRow>
                                <TBItem>
                                    <Text>{item.client.name}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.collaborator.name}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.service.name}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{getDate(item.date)}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.start}</Text>
                                </TBItem>
                                <TBItem mw="80px">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4
                                    }}>
                                        <ButtonIcon onClick={() => router.push(`/admin/especialistas/editar?id=${item.id}`)}>
                                            <FiEdit />
                                        </ButtonIcon>
                                        <ButtonIcon onClick={() => {
                                            setSchedulesRemoved(item);
                                            setShowAlert(true);
                                        }}>
                                            <FiTrash />
                                        </ButtonIcon>
                                    </div>
                                </TBItem>
                            </TRow>
                        ))
                            :
                            <Text>Você não tem agendamentos cadastrados.</Text>
                        }
                    </TBody>
                </Table>
            </Content>
        </Container>
    )
}