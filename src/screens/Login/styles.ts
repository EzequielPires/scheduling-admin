import Link from 'next/link';
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: url('/bg-login.svg');
    background-size: cover;
    background-position: center;
`
export const Header = styled.header`
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 6px 24px;
`
export const Brand = styled(Link)`
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: auto;
        height: 100%;
    }
`
export const LinkSignUp = styled(Link)`
    display: flex;
    align-items: center;
    gap: .5rem;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 72px;
`
export const HForm = styled.div`
    display: flex;
    flex-direction: column;
`
export const BForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
export const Title = styled.h2`
    font-size: 2rem;
    color: ${({theme}) => theme.colors.primary_light};
    margin-bottom: 6px;
`
export const Subtitle = styled.p`

`
export const ButtonSubmit = styled.button`
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 24px;
    border: 0;
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: all .15s;

    :hover {
        filter: brightness(1.1);
    }
`