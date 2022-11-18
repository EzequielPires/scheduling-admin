import styled from "styled-components";
import Link from "next/link";

export const Container = styled.header`
    width: 100vw;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    background: ${({theme}) => theme.colors.background};
    box-shadow: inset 0 -1px #2d2d3d;
    padding: 6px 24px;
`
export const Brand = styled(Link)`
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 2rem;
    img {
        width: auto;
        height: 100%;
    }
`
export const Rigth = styled.div`
    height: 100%;
    
    display: flex;
    align-items: center;
    gap: 8px;
`
export const Left = styled.div`
    height: 100%;
    
    display: flex;
    align-items: center;
    gap: 8px;
`
export const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 720px) {
        display: none;
    }
`
interface ILinkItem {
    active?: boolean;
}

export const BreadcrumbLink = styled(Link)<ILinkItem>`
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;

    background: ${({theme, active}) => active ? theme.colors.gray_100 : 'transparent'};
    border-radius: 8px;
    padding: 0 .75rem;

    color: ${({active, theme}) => active ? '#fff' : theme.colors.text};
    font-size: .875rem;
    text-transform: capitalize;
    transition: all .15s ease-in-out !important;

    pointer-events: ${({active}) => active ? 'none' : 'all'};
    white-space: nowrap;

    :hover {
        background: ${({theme, active}) => active ? theme.colors.gray_100 : theme.colors.gray_200};
        color: #fff;
    }
`
export const Divisor = styled.div`
    height: 60%;
    border-right: solid 1px ${({theme}) => theme.colors.border_grey};
`
export const Button = styled.button`
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 24px;
    border: 0;
    border-radius: 8px;

    background: ${({theme}) => theme.colors.primary};

    font-size: .875rem;
`