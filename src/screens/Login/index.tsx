import {useState} from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { BForm, Brand, ButtonSubmit, Container, Form, Header, HForm, LinkSignUp, Subtitle, Title } from "./styles";
import { useForm } from '../../hooks/useForm';
import { InputText } from '../../components/Form/InputText';
import { useAuth } from '../../contexts/AuthContext';
import { Loading } from '../../components/Loading';

export default function Login() {
    const {signIn} = useAuth();
    const email = useForm();
    const password = useForm();
    const router = useRouter();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await signIn(email.value, password.value);
            if (response) {
                {error && setError(true);}
                router.push('/admin');
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Header>
                <Brand href={'/'}>
                    <Image
                        src={logo}
                        alt={''}
                    />
                </Brand>
                <LinkSignUp href={'/'}>
                    SignUp
                    <FiArrowRight />
                </LinkSignUp>
            </Header>
            {loading && <Loading />}
            <Form onSubmit={handleSubmit}>
                <HForm>
                    <Title>Aqui você pode fazer o login. </Title>
                    <Subtitle>Junte-se a nós :)</Subtitle>
                </HForm>
                <BForm>
                    <InputText 
                        id='email'
                        title='Email:'
                        type='email'
                        placeholder='Entre com seu email.'
                        {...email}
                    />
                    <InputText 
                        id='password'
                        title='Senha:'
                        type='password'
                        placeholder='Entre com sua senha.'
                        {...password}
                    />
                </BForm>
                <ButtonSubmit>Entrar</ButtonSubmit>
                <LinkSignUp href={'/'}>
                Esqueceu sua senha?
                </LinkSignUp>
            </Form>
        </Container>
    )
}