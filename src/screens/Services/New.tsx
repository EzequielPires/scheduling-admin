import { useState } from 'react';
import { Container, Content, Title, Header, Button, Form, BForm, ButtonSubmit } from "../../../styles/globals";
import { InputText } from "../../components/Form/InputText";
import { Loading } from "../../components/Loading";
import { useServices } from "../../contexts/ServicesContext";
import { useForm } from "../../hooks/useForm";

export function NewService() {
    const { create } = useServices();
    const name = useForm();
    const price = useForm('price');
    const description = useForm();
    const duration = useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true)
            await create({
                description: description.value,
                duration: duration.value,
                name: name.value,
                price: price.value
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
                    <Title>Adicionar Serviço</Title>
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
                            id='description'
                            title='Descrição:'
                            type='text'
                            placeholder='Entre com a descrição do serviço.'
                            {...description}
                        />
                        <InputText
                            id='price'
                            title='Preço:'
                            type='price'
                            placeholder='Entre com o preço do serviço.'
                            {...price}
                        />
                        <InputText
                            id='duration'
                            title='Duração:'
                            type='text'
                            placeholder='Entre com a duração do serviço.'
                            {...duration}
                        />
                    </BForm>
                    <ButtonSubmit>Adicionar</ButtonSubmit>
                </Form>
            </Content>
        </Container>
    )
}