import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiGrid, FiCalendar, FiScissors, FiUser, FiUsers, FiClock, FiEye } from 'react-icons/fi';
import { Button, Container, Header, Text, ListLinks, LinkItem, Icon } from "./styles";
import { ButtonIcon } from '../../../styles/globals';
import { useAside } from '../../contexts/AsideContext';

export function Aside() {
    const {show, handleShow} = useAside();
    const router = useRouter();

    const isActive = (path: string) => {
        return path === router.asPath;
    };

    

    return (
        <Container show={show}>
            {show ?
                <>
                    <Header>
                        <Text>Visualizações</Text>
                        <Button onClick={handleShow}>Ocultar</Button>
                    </Header>
                    <ListLinks>
                        <LinkItem href={'/admin'} active={isActive('/admin')}>
                            <Icon>
                                <FiGrid />
                            </Icon>
                            Visão geral
                        </LinkItem>
                        <LinkItem href={'/admin/agendamentos'} active={isActive('/admin/agendamentos')}>
                            <Icon>
                                <FiCalendar />
                            </Icon>
                            Agendamentos
                        </LinkItem>
                        <LinkItem href={'/admin/servicos'} active={isActive('/admin/servicos')}>
                            <Icon>
                                <FiScissors />
                            </Icon>
                            Serviços
                        </LinkItem>
                        <LinkItem href={'/admin/especialistas'} active={isActive('/admin/especialistas')}>
                            <Icon>
                                <FiUser />
                            </Icon>
                            Especialistas
                        </LinkItem>
                        <LinkItem href={'/admin/clientes'} active={isActive('/admin/clientes')}>
                            <Icon>
                                <FiUsers />
                            </Icon>
                            Clientes
                        </LinkItem>
                        <LinkItem href={'/admin/horario-funcionamento'} active={isActive('/admin/horario-funcionamento')}>
                            <Icon>
                                <FiClock />
                            </Icon>
                            Horário de funcionamento
                        </LinkItem>
                    </ListLinks>
                </>
                :
                <div style={{
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <ButtonIcon onClick={handleShow}>
                    <FiEye />
                </ButtonIcon>
                </div>
            }
        </Container>
    )
}