import styled from "styled-components";

const DivHeader = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1 {
        font-family: ${props => props.theme.fonts.fontInterTight};
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.theme.colorContent.colorContentPrimary};
    }

    p {
        font-family: ${props => props.theme.fonts.fontInter};
        font-size: 0.875rem;
        color: ${props => props.theme.colorContent.colorContentSecondary};
    }
`;

function Header({ title, subtitle }) {
    return(
        <DivHeader>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </DivHeader>
    );
}

export default Header;