import styled from "styled-components";

interface Props {
    icon?: boolean;
    error?: boolean;
}

export const Container = styled.div`
    border: 1px solid ${({theme}) => theme.colors.border_grey};
    padding: 1rem;
    border-radius: 12px;
`
export const Header = styled.div`

`
export const Title = styled.span`

`
export const Row = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    button {
        height: 40px;
    }
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 112px;
    position: relative;

    svg {
        position: absolute;
        top: 36px;
        left: 12px;

        color: ${({theme}) => theme.colors.text};
        font-size: 1.5rem;
        :nth-child(3) {
            left: unset !important;
            right: 12px;
            cursor: pointer;
        }
    }
`
export const Label = styled.label`
    font-size: .875rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 6px;
`
export const Input = styled.input<Props>`
    height: 40px;
    border: .5px solid ${({theme}) => theme.colors.text};
    border-radius: 8px;
    background: ${({theme}) => theme.colors.gray_200};
    padding: ${({icon}) => icon ? '0 2.6rem' : '0 .75rem'};
    color: ${({theme}) => theme.colors.white};
    font-size: .875rem;
    width: 100%;
    transition: .3s;
    ::placeholder {
        color: ${({theme}) => theme.colors.text};
    }
    :focus {
        border: .5px solid ${({theme}) => theme.colors.primary};
        outline: 0;
    }
`
export const Body = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    max-width: 368px;
`
export const List = styled.ul`
    list-style: none;
    padding-top: 1rem;
`
export const Item = styled.li`

`

export const Tabs = styled.div`
    display: flex;
    gap: .5rem;
    margin-bottom: 1.5rem;
`
interface ILinkItem {
    active?: boolean;
}

export const Tab = styled.button<ILinkItem>`
    height: 32px;
    
    display: flex;
    align-items: center;
    
    background: ${({theme, active}) => active ? theme.colors.gray_100 : 'transparent'};
    border-radius: 8px;
    border: 0;
    padding: 0 .75rem;

    color: ${({active, theme}) => active ? '#fff' : theme.colors.text};
    font-size: .875rem;
    text-transform: capitalize;
    transition: all .15s ease-in-out !important;

    pointer-events: ${({active}) => active ? 'none' : 'all'};
    white-space: nowrap;
    cursor: pointer;

    :hover {
        background: ${({theme, active}) => active ? theme.colors.gray_100 : theme.colors.gray_200};
        color: #fff;
    }
`