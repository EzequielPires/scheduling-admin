import styled from "styled-components";

export const Wrapp = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: fixed;
    top: 0;
    left: 0;

    background: #171722f5;
`

export const Container = styled.aside`
    width: 380px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border_grey};
`
export const Body = styled.aside`
    padding: 0 1rem;
`