import {useState} from 'react';
import { Container, Content, Title, Header, Button, Form, BForm, ButtonSubmit } from "../../../styles/globals";
import { InputText } from "../../components/Form/InputText";
import { Loading } from '../../components/Loading';
import { useCustomers } from "../../contexts/CustomersContext";
import { useForm } from "../../hooks/useForm";

export function NewCustomers() {
    const {create} = useCustomers();
    const name = useForm();
    const phone = useForm('phone');
    const email = useForm();
    const password = useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true)
            await create({
                phone: phone.value,
                email: email.value,
                name: name.value,
                password: password.value
            });
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }
    return (
        <Container>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Adicionar Cliente</Title>
                </Header>
                {loading && <Loading />}
                <Form onSubmit={handleSubmit}>
                    <BForm>
                        <InputText
                            id='name'
                            title='Nome:'
                            type='text'
                            placeholder='Entre com o nome do cliente.'
                            {...name}
                        />
                        <InputText
                            id='phone'
                            title='Telefone:'
                            type='cell'
                            placeholder='Entre com o telefone/celular do cliente.'
                            {...phone}
                        />
                        <InputText
                            id='email'
                            title='Email:'
                            type='email'
                            placeholder='Entre com o email do cliente.'
                            {...email}
                        />
                        <InputText
                            id='password'
                            title='Senha:'
                            type='password'
                            placeholder='Entre com a senha do cliente.'
                            {...password}
                        />
                    </BForm>
                    <ButtonSubmit>Adicionar</ButtonSubmit>
                </Form>
            </Content>
        </Container>
    )
}