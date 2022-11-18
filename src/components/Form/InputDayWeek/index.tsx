import { useEffect, useState } from "react";
import VMasker from "vanilla-masker";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Button, ButtonIcon, Table, TBItem, TBody, Text, THeader, THItem, TRow } from "../../../../styles/globals";
import {
    Container,
    Header,
    Title,
    Row,
    InputBox,
    Label,
    Input,
    Body,
    Tabs,
    Tab
} from "./styles";
import { useOpeningHours } from "../../../contexts/OpeningHoursContext";
import { Loading } from "../../Loading";

export const IDaysOfTheWeek = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

export function InputDayWeek({ data }) {
    const {create, find, remove} = useOpeningHours();
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [days, setDays] = useState(null);
    const [active, setActive] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleAdd = async () => {
        try {
            setLoading(true);
            await create({
                day: IDaysOfTheWeek[active],
                end,
                start
            });
        } catch (error) {
            
        } finally {
            setLoading(false);
            const res = await find();
            {res ? setDays(res) : null};
            setStart('');
            setEnd('');
        }
    }
    const handleRemove = async (id: number) => {
        try {
            setLoading(true);
            await remove(id);
        } catch (error) {
            
        } finally {
            setLoading(false);
            const res = await find();
            {res ? setDays(res) : null};
        }
    }

    useEffect(() => {
        if (data) {
            setDays(data);
        };
    }, [data]);

    return (
        <Container>
            {loading && <Loading />}
            <Header>
                <Title></Title>
                <Tabs>
                    <Tab active={active === 1} onClick={() => setActive(1)}>Segunda</Tab>
                    <Tab active={active === 2} onClick={() => setActive(2)}>Terça</Tab>
                    <Tab active={active === 3} onClick={() => setActive(3)}>Quarta</Tab>
                    <Tab active={active === 4} onClick={() => setActive(4)}>Quinta</Tab>
                    <Tab active={active === 5} onClick={() => setActive(5)}>Sexta</Tab>
                    <Tab active={active === 6} onClick={() => setActive(6)}>Sábado</Tab>
                    <Tab active={active === 0} onClick={() => setActive(0)}>Domingo</Tab>
                </Tabs>
                <Row>
                    <InputBox>
                        <Label>Início:</Label>
                        <Input 
                            placeholder="00:00"
                            value={start}
                            onChange={e => {
                                setStart(VMasker.toPattern(e.target.value, "99:99"))
                            }}
                        />
                    </InputBox>
                    <InputBox>
                        <Label>Final:</Label>
                        <Input 
                            placeholder="00:00"
                            value={end}
                            onChange={e => {
                                setEnd(VMasker.toPattern(e.target.value, "99:99"))
                            }}
                        />
                    </InputBox>
                    <Button onClick={handleAdd}>Adicionar</Button>
                </Row>
            </Header>
            <Body>
                <Table>
                    <THeader>
                        <THItem>
                            <Text>Início</Text>
                        </THItem>
                        <THItem>
                            <Text>Final</Text>
                        </THItem>
                        <THItem mw="40px">
                            <Text>Ações</Text>
                        </THItem>
                    </THeader>
                    <TBody>
                        {days && days[IDaysOfTheWeek[active]].length > 0 ? days[IDaysOfTheWeek[active]].map(item => (
                            <TRow key={item.id}>
                                <TBItem>
                                    <Text>{item.start}</Text>
                                </TBItem>
                                <TBItem>
                                    <Text>{item.end}</Text>
                                </TBItem>
                                <TBItem mw="40px">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4
                                    }}>
                                        <ButtonIcon onClick={() => {
                                            handleRemove(item.id)
                                        }}>
                                            <FiTrash />
                                        </ButtonIcon>
                                    </div>
                                </TBItem>
                            </TRow>
                        ))
                            :
                            <Text>Você não tem horários cadastrados.</Text>
                        }
                    </TBody>
                </Table>
            </Body>
        </Container>
    )
}