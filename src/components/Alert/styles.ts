import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    background: #171722f5;
`
export const Container = styled.div`
    width: 500px;
    height: auto;

    display: flex;
    flex-direction: column;
    padding: 1rem;

    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border_grey};
    border-radius: 12px;
`
export const Title = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
`
export const Subtitle = styled.span`
    font-size: .875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text};
`
export const Buttons = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
`
export const ButtonCancel = styled.button`
    height: 40px;
    padding: 0 2rem;
    margin-right: .5rem;

    border-radius: 8px;
    border: 0;
    
    background: ${({ theme }) => theme.colors.gray_200};
    cursor: pointer;
`
export const ButtonConfirm = styled.button`
    height: 40px;
    padding: 0 2rem;

    border-radius: 8px;
    border: 0;

    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`