import styled from "styled-components";

const Button = styled.button `
    height: 48px;
    padding: 0.75rem 1.25rem;
    font-family: ${props => props.theme.fonts.fontInterTight};
    font-weight: bold;
    font-size: 1rem;
    color: #050505;
    text-align: center;
    border: none;
    border-radius: 0.5rem;
    background: ${props => props.theme.colorContent.colorContentBrand};
    box-shadow:${props => props.$ativivarShadow ? '0px 0px 20px 0.6px rgba(146,130,250,0.57)' : 'none'};
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.colorBackground.colorBackgroundHighlights};
    }

    &:active {
        transform: scale(0.99);
    }
`;

function ButtonDefault({ title, enableShadow, onHandleClick }) {
    return (
        <Button 
            type="button"
            $ativivarShadow={enableShadow}
            onClick={(event) => onHandleClick()}
        >{title}</Button>
    );
}

export default ButtonDefault;