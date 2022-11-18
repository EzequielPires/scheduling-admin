import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Container, Content, Title, Header, Button, Form, BForm, ButtonSubmit } from "../../../styles/globals";
import { CheckBox } from '../../components/CheckBox';
import { InputText } from "../../components/Form/InputText";
import { Loading } from "../../components/Loading";
import { useProvider } from '../../contexts/ProviderContext';
import { useCheckBox } from '../../hooks/useCheckBox';
import { useForm } from "../../hooks/useForm";

export function EditProvider({ provider, servicesData }) {
    const router = useRouter();
    const {id} = router.query;
    const { update } = useProvider();
    const services = useCheckBox();
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
                phone: phone.value,
                email: email.value,
                name: name.value,
                services: services.value
            });
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (provider) {
            name.setValue(provider.name);
            phone.setValue(provider.phone);
            email.setValue(provider.email);
            services.setValue(provider.services);
        }
    }, [provider]);
    useEffect(() => {
        if (servicesData) {
            services.setOptions(servicesData);
        }
    }, [servicesData]);

    return (
        <Container>
            <Content padding={"1.5rem"}>
                <Header>
                    <Title>Editar Especialistas</Title>
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
                        <CheckBox
                            title="Serviços:"
                            {...services}
                        />
                    </BForm>
                    <ButtonSubmit>Salvar</ButtonSubmit>
                </Form>
            </Content>
        </Container>
    )
}