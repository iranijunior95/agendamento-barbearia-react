import styled from "styled-components";
import Theme from "../../theme/Theme";
import Header from "../../components/Header";
import TagLogo from "../../components/TagLogo";
import ButtonDefault from "../../components/ButtonDefault";
import { useNavigate } from "react-router-dom";

const DivContainer = styled.div `
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before {
        content: '';
        display: block;
        position: absolute;
        background-image: linear-gradient(to bottom, rgba(21, 21, 21, 0.7), ${props => props.theme.colorBackground.colorBackgroundSecondary}), url('/images/barber_banner.jpg');
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100vh;
        z-index: -1;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 0;
        opacity: 0.9;
    }
`;

const DivCardHome = styled.div `
    position: relative;
    width: 700px;
    height: 70vh;
    padding: 1.25rem;
    background: #14151D;
    border-radius: 0.625rem;
    overflow: hidden;
`;

const DivContentHome = styled.div `
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 80%;
`;

function Home() {
    const navigate = useNavigate();
    
    return (
        <Theme>
            <DivContainer>
                <DivCardHome>
                    <TagLogo />

                    <DivContentHome>
                        <Header 
                            title="Bem-vindo ao Mundo Barbeiro!"
                            subtitle="Estamos muito felizes em ter você conosco! Aqui, você pode agendar seu horário de forma rápida e prática para garantir que seu corte ou barba fiquem sempre impecáveis."
                        />
                                            
                        <ButtonDefault 
                            title="REALIZAR AGENDAMENTOS"
                            enableShadow={true}
                            onHandleClick={() => navigate('/appointments')} 
                        />
                    </DivContentHome>
                </DivCardHome>
            </DivContainer>
        </Theme>
    );
}

export default Home;