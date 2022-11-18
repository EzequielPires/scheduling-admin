import { useRouter } from "next/router";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Container, Content, Title, Header, Button, Table, THeader, TBody, Text, THItem, TRow, TBItem, ButtonIcon } from "../../../styles/globals";
import { Alert } from "../../components/Alert";
import { useProvider } from "../../contexts/ProviderContext";

export function Providers({ data }) {
    const {remove} = useProvider();
    const router = useRouter();
    const [providers, setProviders] = useState<Array<any>>(data);
    const [show, setShow] = useState(false);
    const [providersRemoved, setProvidersRemoved] = useState(null);

    const handleRemove = async () => {
        if(providersRemoved) {
            const res = await remove(providersRemoved.id);
            setProviders(res);
            setShow(false);
        }
    }

    return (
        <Container>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Especialistas</Title>
                    <Button onClick={() => router.push('/admin/especialistas/adicionar')}>Adicionar</Button>
                </Header>
                {
                    show &&
                    <Alert
                        title={`Remover Especialista`}
                        subtitle={`Deseja mesmo remover esse especialista?`}
                        close={() => setShow(false)}
                        onSubmit={() => handleRemove()}
                    />
                }
                <Table>
                    <THeader>
                        <THItem>
                            <Text>Nome</Text>
                        </THItem>
                        <THItem>
                            <Text>Email</Text>
                        </THItem>
                        <THItem>
                            <Text>Telefone</Text>
                        </THItem>
                        <THItem mw="80px">
                            <Text>Ações</Text>
                        </THItem>
                    </THeader>
                    <TBody>
                        {providers.length > 0 ? providers.map(item => (
                            <TRow>
                                <TBItem>
                                    <Text>{item.name}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.email}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.phone}</Text>
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
                                            setShow(true);
                                            setProvidersRemoved(item);
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