import { useRouter } from "next/router";
import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Container, Content, Title, Header, Button, Table, THeader, TBody, Text, THItem, TRow, TBItem, ButtonIcon } from "../../../styles/globals";
import { Alert } from "../../components/Alert";
import { useCustomers } from "../../contexts/CustomersContext";

export function Customers({ data }) {
    const router = useRouter();
    const {remove} = useCustomers();
    const [customers, setCustomers] = useState<Array<any>>(data);
    const [show, setShow] = useState(false);
    const [customersRemoved, setCustomersRemoved] = useState(null);

    const handleRemove = async () => {
        if(customersRemoved) {
            const res = await remove(customersRemoved.id);
            setCustomers(res);
            setShow(false);
        }
    }

    return (
        <Container>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Clientes</Title>
                    <Button onClick={() => router.push('/admin/clientes/adicionar')}>Adicionar</Button>
                </Header>
                {
                    show &&
                    <Alert
                        title={`Remover Cliente`}
                        subtitle={`Deseja mesmo remover esse cliente?`}
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
                        {customers.length > 0 ? customers.map(item => (
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
                                        <ButtonIcon onClick={() => router.push(`/admin/clientes/editar?id=${item.id}`)}>
                                            <FiEdit />
                                        </ButtonIcon>
                                        <ButtonIcon onClick={() => {
                                            setShow(true);
                                            setCustomersRemoved(item);
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