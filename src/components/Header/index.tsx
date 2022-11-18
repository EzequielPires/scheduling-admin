import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { Button, ButtonIcon } from '../../../styles/globals';
import { Container, Brand, Rigth, Divisor, Left, Breadcrumb, BreadcrumbLink } from "./styles";
import { FiBell, FiHelpCircle } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import { useNotification } from '../../contexts/NotificationContext';

export function Header() {
    const {handleShowNotification} = useNotification();
    const {user} = useAuth();
    const router = useRouter();
    const paths = router.asPath.split('/');

    const generateLink = (indexPath: number) => {
        let link = '/';
        paths.forEach((item, index) => {
            if (index <= indexPath) link = link + '/' + item;
        })
        return link;
    }

    return (
        <Container>
            <Left>
                <Brand href={'/'}>
                    <Image
                        src={logo}
                        alt={''}
                    />
                </Brand>
                <Breadcrumb>
                    {paths?.map((item, index) => (
                        <>
                            {item != '' && <BreadcrumbLink key={index} href={generateLink(index)} active={index === (paths.length - 1)}>{item}</BreadcrumbLink>}
                        </>
                    ))}
                </Breadcrumb>
            </Left>
            <Rigth>
                <ButtonIcon>
                    <FiHelpCircle />
                </ButtonIcon>
                <Divisor />
                <ButtonIcon onClick={handleShowNotification}>
                    <FiBell />
                </ButtonIcon>
                <Divisor />
                {user && <Button>{user.name}</Button>}
            </Rigth>
        </Container>
    )
}