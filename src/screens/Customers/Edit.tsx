import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Container, Content, Title, Header, Button, Form, BForm, ButtonSubmit } from "../../../styles/globals";
import { InputText } from "../../components/Form/InputText";
import { Loading } from "../../components/Loading";
import { useCustomers } from '../../contexts/CustomersContext';
import { useProvider } from '../../contexts/ProviderContext';
import { useForm } from "../../hooks/useForm";

export function EditCustomer({customer}) {
    const { update } = useCustomers();
    const router = useRouter();
    const {id} = router.query;
    const name = useForm();
    const phone = useForm('phone');
    const email = useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            await update({
                id: id.toString(),
                name: name.value,
                email: email.value,
                phone: phone.value
            });
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(customer) {
            name.setValue(customer.name);
            phone.setValue(customer.phone);
            email.setValue(customer.email);
        }
    }, [customer]);

    return (
        <Container>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Editar Cliente</Title>
                </Header>
                {loading && <Loading />}
                <Form onSubmit={handleSubmit}>
                    <BForm>
                        <InputText
                            id='name'
                            title='Nome:'
                            type='text'
                            placeholder='Entre com o nome do serviço.'
                            {...name}
                        />
                        <InputText
                            id='phone'
                            title='Telefone:'
                            type='cell'
                            placeholder='Entre com o telefone/celular do especialista.'
                            {...phone}
                        />
                        <InputText
                            id='email'
                            title='Email:'
                            type='email'
                            placeholder='Entre com o email do especialista.'
                            {...email}
                        />
                    </BForm>
                    <ButtonSubmit>Salvar</ButtonSubmit>
                </Form>
            </Content>
        </Container>
    )
}