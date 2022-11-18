import styled from "styled-components";

interface Props {
    active?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.span`
    font-size: .875rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.white};

    margin-bottom: .75rem;
`
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
`
export const CheckWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`
export const CheckTitle = styled.span`
    font-size: .875rem;
    font-weight: 300;
    color: ${({theme}) => theme.colors.white};

    cursor: pointer;
`
export const Check = styled.span<Props>`
    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme, active}) => active ? theme.colors.primary : theme.colors.gray_200};

    border: 1px solid ${({theme, active}) => active ? theme.colors.primary : theme.colors.text};
    border-radius: 8px;

    cursor: pointer;

    svg {
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.white};
    }
`
