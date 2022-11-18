import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { OptionSelectProps } from "../../../hooks/useSelect";
import { Button, Container, Item, Label, List, Overflow } from "./styles";

interface Props {
    title: string;
    value: OptionSelectProps;
    onChange: any;
    options?: OptionSelectProps[];
    onBlur?: (str: string) => void;
}

export function InputSelect({ title, value, onChange, onBlur, options }: Props) {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(-1);

    const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);

    const setSelectedThenCloseDropdown = (index: any) => {
        onChange(options[index]);
        setSelectedOption(index);
        setIsOptionsOpen(false);
    };

    const handleKeyDown = (index: any) => (e: any) => {
        switch (e.key) {
            case " ":
            case "SpaceBar":
            case "Enter":
                e.preventDefault();
                setSelectedThenCloseDropdown(index);
                break;
            default:
                break;
        }
    };

    const handleListKeyDown = (e: any) => {
        switch (e.key) {
            case "Escape":
                e.preventDefault();
                setIsOptionsOpen(false);
                break;
            case "ArrowUp":
                e.preventDefault();
                setSelectedOption(
                    selectedOption - 1 >= 0 ? selectedOption - 1 : options.length - 1
                );
                break;
            case "ArrowDown":
                e.preventDefault();
                setSelectedOption(
                    selectedOption == options.length - 1 ? 0 : selectedOption + 1
                );
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Container show={isOptionsOpen}>
                <Label>{title}</Label>
                <Button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={isOptionsOpen}
                    active={isOptionsOpen}
                    className={isOptionsOpen ? "expanded" : ""}
                    onClick={(toggleOptions)}
                    onKeyDown={handleListKeyDown}
                >
                    {value?.name ?? 'Escolha um valor'}
                    <FiChevronDown />
                </Button>
                {options?.length > 0 &&
                    <List
                        show={isOptionsOpen}
                        role="listbox"
                        //aria-activedescendant={options[selectedOption].id ?? ''}
                        tabIndex={-1}
                        onKeyDown={handleListKeyDown}
                    >
                        {options?.map((option, index) => (
                            <Item
                                key={index}
                                //id={option.id ?? index.toString()}
                                role="option"
                                aria-selected={selectedOption === index && option.name === value?.name}
                                tabIndex={0}
                                onKeyDown={handleKeyDown(index)}
                                onClick={() => {
                                    setSelectedThenCloseDropdown(index);
                                }}
                            >
                                {option.name}
                            </Item>
                        ))}
                    </List>
                }
            </Container>
            {isOptionsOpen && <Overflow onMouseDown={() => setIsOptionsOpen(false)} />}
        </>
    )
}