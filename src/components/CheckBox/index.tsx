import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { OptionCheckBoxProps } from "../../hooks/useCheckBox";
import { Body, Check, CheckTitle, CheckWrapper, Container, Title } from "./styles";

interface Props {
    title?: string;
    description?: string;
    options: OptionCheckBoxProps[];
    value: OptionCheckBoxProps[];
    onChange: (option: OptionCheckBoxProps) => void;
    isActive: (option: OptionCheckBoxProps) => boolean;
}

export function CheckBox({ options, description, title, isActive, onChange, value }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <Body>
                {options.map((option) => (
                    <CheckWrapper key={option.id}>
                        <Check
                            active={isActive(option)}
                            onMouseDown={() => onChange(option)}
                        >
                            {isActive(option) && <FiCheck />}
                        </Check>
                        <CheckTitle onMouseDown={() => onChange(option)}>{option.name}</CheckTitle>
                    </CheckWrapper>
                ))}
            </Body>
        </Container>
    )
}