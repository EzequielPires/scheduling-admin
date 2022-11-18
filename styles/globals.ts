import styled from "styled-components";

interface IProps {
    asideHidden?: boolean;
    asideShow?: boolean;
    margin?: string;
    padding?: string | number;
    color?: string;
    background?: string;
    w?: string;
    mw?: string;
    mh?: string;
}

export const Container = styled.div<IProps>`
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    padding: ${({asideHidden}) => asideHidden ? '48px 0 0 48px' : '48px 0 0 324px'};

    @media (max-width: 720px) {
        padding: 48px 0 0 48px;
    }
`

export const Content = styled.div<IProps>`
    width: 100%;
    height: 100%;
    max-width: 1278px;
    margin: 0 auto;
    padding: ${({ padding }) => padding ?? 'none'};
`
export const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: 500;
`
export const Header = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0 16px;
`
export const Body = styled.div`
    display: flex;
    flex-direction: column;
`
export const ButtonIcon = styled.button`
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 8px;

    background: transparent;
    cursor: pointer;
    transition: all .15s;

    svg {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
        transition: all .15s;
    }

    :hover {
        background: ${({ theme }) => theme.colors.gray_200};
        svg {
            color: ${({ theme }) => theme.colors.white};
        }
    }
`
export const Button = styled.button`
    height: 32px;

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
export const Table = styled.div`
    width: 100%;

    border: solid 1px ${({ theme }) => theme.colors.border_grey};
    border-radius: 12px;
    overflow-y: hidden;
    overflow-x: auto;
`
export const THeader = styled.div`
    width: 100%;
    min-width: fit-content;
    height: 40px;

    display: flex;
    align-items: center;
    gap: 1rem;
    
    background: ${({ theme }) => theme.colors.dark};
    border-bottom: solid 1px ${({ theme }) => theme.colors.border_grey};
    padding: 0 16px;
`
export const TBody = styled.div`
    width: 100%;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5rem 0;
`
export const THItem = styled.div<IProps>`
    width: fit-content;
    max-width: ${({ mw }) => mw ?? 'unset'};
    flex: 1;
    min-width: ${({mw}) => mw ?? '200px'};
`
export const TRow = styled.div`
    width: 100%;
    min-width: fit-content;
    min-height: 40px;

    display: flex;
    align-items: center;
    gap: 1rem;
    
    //background: ${({ theme }) => theme.colors.dark};
    border-bottom: solid 1px ${({ theme }) => theme.colors.border_grey};
    padding: 0 16px;

    :last-child {
        border: 0;
    }
`
export const TBItem = styled.div<IProps>`
    width: fit-content;
    max-width: ${({ mw }) => mw ?? 'unset'};
    flex: 1;
    min-width: ${({mw}) => mw ?? '200px'};
`
export const Text = styled.span`
    color: ${({ theme }) => theme.colors.text};
    font-size: .7rem;
    font-weight: 500;
    text-transform: uppercase;
`
export const Form = styled.form`
    background: ${({ theme }) => theme.colors.dark};
    max-width: 500px;   
    padding: 16px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;
`
export const HForm = styled.div`

`
export const BForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
export const ButtonSubmit = styled.button`
    width: 100%;
    height: 40px;

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