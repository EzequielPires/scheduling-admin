import { useRouter } from 'next/router';
import { useState } from "react";
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Container, Content, Title, Header, Button, Table, THeader, TBody, Text, THItem, TRow, TBItem, ButtonIcon } from "../../../styles/globals";
import { Alert } from '../../components/Alert';
import { Loading } from '../../components/Loading';
import { useServices } from '../../contexts/ServicesContext';
import { api } from '../../services/api';

export function Services({ data }) {
    const {remove} = useServices();
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [servicesRemoved, setServicesRemoved] = useState(null);
    const [services, setServices] = useState<Array<any>>(data);

    const deleteService = async () => {
        try {
            if(servicesRemoved) {
                setLoading(true);
                const res = await remove(servicesRemoved.id);
                setServices(res);
                setShow(false);
            }
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    }
    return (
        <Container>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Serviços</Title>
                    <Button onClick={() => router.push('/admin/servicos/adicionar')}>Adicionar</Button>
                </Header>
                {loading && <Loading />}
                {
                    show &&
                    <Alert
                        title={`Remover Serviço`}
                        subtitle={`Deseja mesmo remover esse serviço?`}
                        close={() => setShow(false)}
                        onSubmit={() => deleteService()}
                    />
                }
                <Table>
                    <THeader>
                        <THItem mw="64px">
                            <Text>id</Text>
                        </THItem>
                        <THItem>
                            <Text>Nome</Text>
                        </THItem>
                        <THItem>
                            <Text>Descrição</Text>
                        </THItem>
                        <THItem>
                            <Text>Preço</Text>
                        </THItem>
                        <THItem>
                            <Text>Duração</Text>
                        </THItem>
                        <THItem mw="80px">
                            <Text>Ações</Text>
                        </THItem>
                    </THeader>
                    <TBody>
                        {services.length > 0 ? services.map(item => (
                            <TRow>
                                <TBItem mw="64px">
                                    <Text>{item.id}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.name}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.description}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>R$ {item.price}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.duration} min</Text>
                                </TBItem>
                                <TBItem mw="80px">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4
                                    }}>
                                        <ButtonIcon onClick={() => router.push(`/admin/servicos/editar?id=${item.id}`)}>
                                            <FiEdit />
                                        </ButtonIcon>
                                        <ButtonIcon onClick={() => {
                                            setShow(true);
                                            setServicesRemoved(item);
                                        }}>
                                            <FiTrash />
                                        </ButtonIcon>
                                    </div>
                                </TBItem>
                            </TRow>
                        ))
                            :
                            <Text>Você não tem serviços cadastrados.</Text>
                        }
                    </TBody>
                </Table>
            </Content>
        </Container>
    )
}