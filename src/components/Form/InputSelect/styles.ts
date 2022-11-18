import styled, { css } from "styled-components";

interface ListPros {
    show: boolean;
}

export const Container = styled.div<ListPros>`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    ${({ show }) => show && css`
        z-index: 999;
    `}
`
export const Label = styled.label` 
    margin-bottom: 6px;

    font-size: .875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_200};
`
interface ButtonProps {
    active?: boolean;
}
export const Button = styled.button<ButtonProps>`
    height: 48px;
    width: 100%;

    border-radius: 8px;
    border: 1px solid ${({ theme, active }) => active ? theme.colors.gray_400 : '#d3d3d3'};
    padding: .75rem ;

    font-size: .875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_200};

    background: ${({ theme }) => theme.colors.white};

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.gray_200};
    }
`
export const InputText = styled.input`
    height: 48px;
    width: 100%;

    border-radius: 8px;
    border: .5px solid #d9d9d9;
    padding: .75rem ;

    color: ${({ theme }) => theme.colors.gray_200};
    font-size: .875rem;

    outline: 0;

    :focus {
        border: .5px solid ${({ theme }) => theme.colors.gray_200};
        outline: 0;
    }
`
export const List = styled.ul<ListPros>`
    position: absolute;
    top: 95%;
    right: .75rem;
    left: .75rem;

    border: 1px solid hotpink;
    display: none;
    list-style: none;
    padding: 4px 0;
    margin-top: -4px;
    z-index: 999;

    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
    padding: .75rem ;

    ${({ show }) => show && css`
        display: block;
    `}
`
export const Item = styled.button`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: start;

    padding: .25rem .75rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.gray_200};
    background: transparent;
    border: 0;
    font-weight: 300;
    cursor: pointer;
    transition: .2s;
    &:hover {
        background: ${({ theme }) => theme.colors.gray_500};
        color: ${({ theme }) => theme.colors.gray_200};
        font-weight: 300;
    }
    &[aria-selected='true'] {
        background: ${({ theme }) => theme.colors.gray_500};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 500;
    }
`
export const Overflow = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`