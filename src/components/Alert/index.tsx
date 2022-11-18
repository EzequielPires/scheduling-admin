import { Container, Wrapper, Title, Subtitle, Buttons, ButtonCancel, ButtonConfirm } from "./styles";

export function Alert({
    title,
    subtitle,
    close,
    onSubmit
}) {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Buttons>
                    <ButtonCancel onClick={close}>Cancelar</ButtonCancel>
                    <ButtonConfirm onClick={onSubmit}>Confirmar</ButtonConfirm>
                </Buttons>
            </Container>
        </Wrapper>
    )
}