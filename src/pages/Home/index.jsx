import styled from "styled-components";
import Theme from "../../theme/Theme";
import Header from "../../components/Header";

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
    width: 700px;
    height: 70vh;
    padding: 1.25rem;
    background: ${props => props.theme.colorBackground.colorBackgroundSecondary};
    border-radius: 0.625rem;
`;

function Home() {
    return (
        <Theme>
            <DivContainer>
                <DivCardHome>
                    <span>Mundo Barbeiro</span>

                    <Header 
                        title="Bem-vindo ao Mundo Barbeiro!"
                        subtitle="Estamos muito felizes em ter você conosco! Aqui, você pode agendar seu horário de forma rápida e prática para garantir que seu corte ou barba fiquem sempre impecáveis."
                    />
                    
                    <p>Fique à vontade para agendar e aproveitar uma experiência única. Estamos prontos para atendê-lo!</p>
                    
                    <button type="button">ACESSAR</button>
                </DivCardHome>
            </DivContainer>
        </Theme>
    );
}

export default Home;