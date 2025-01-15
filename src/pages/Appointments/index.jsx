import styled from "styled-components";
import Theme from "../../theme/Theme";
import TagLogo from "../../components/TagLogo";
import Header from '../../components/Header';
import InputDate from '../../components/InputDate';

const DivContainerScheduling = styled.div `
    background: #14151D;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivContent = styled.div `
    height: 100vh;
    width: 70%;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const DivHeader = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

function Appointments() {
    return (
        <Theme>
            <DivContainerScheduling>
                <TagLogo />

                <DivContent>
                    <DivHeader>
                        <Header 
                            title="Sua agenda"
                            subtitle="Aqui você pode ver todos os clientes e serviços agendados para hoje."
                        />

                        <InputDate />
                    </DivHeader>
                </DivContent>
            </DivContainerScheduling>
        </Theme>
    );
}

export default Appointments;