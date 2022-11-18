import styled from "styled-components";
import Link from "next/link"

interface IProps {
    show?: boolean;
}

export const Container = styled.aside<IProps>`
    width: ${({show}) => show ? '324px' : '48px'};
    height: calc(100vh - 48px);

    position: fixed;
    top: 48px;
    left: 0;

    background: ${({theme}) => theme.colors.background};
    border-right: solid 1px ${({theme}) => theme.colors.border_grey};

    transition: .15s;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 12px 12px 24px;
`
export const Text = styled.span`
    color: ${({theme}) => theme.colors.text};
    font-size: .7rem;
    font-weight: 500;
    text-transform: uppercase;
`
export const Button = styled.button`
    color: ${({theme}) => theme.colors.text};
    font-size: .7rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 16px;
    border: 0;
    background: #232334;

    cursor: pointer;
`
export const ListLinks = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: .25rem;

    padding: .75rem;
`

interface ILinkItem {
    active?: boolean;
}

export const LinkItem = styled(Link)<ILinkItem>`
    width: 100%;
    height: 36px;

    display: flex;
    align-items: center;

    background: ${({theme, active}) => active ? theme.colors.gray_100 : 'transparent'};
    border-radius: 8px;
    padding: 0 .75rem;

    color: ${({active, theme}) => active ? '#fff' : theme.colors.text};
    font-size: .875rem;
    font-weight: 500;
    transition: all .15s ease-in-out !important;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
        background: ${({theme, active}) => active ? theme.colors.gray_100 : theme.colors.gray_200};
        color: #fff;
    }
`
export const Icon = styled.div`
    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme}) => theme.colors.gray_200};
    margin-right: 8px;
    border-radius: 24px;
`
