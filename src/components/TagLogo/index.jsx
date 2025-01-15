import styled from "styled-components";
import IconTag from '../../assets/img/icon-tag.png';

const SpanTagLogo = styled.span `
    position: absolute;
    top: 0px;
    left: 0px;
    height: 48px;
    width: 200px;
    padding: 0.75rem 1.25rem;
    border-bottom-right-radius: 0.75rem;
    background: #2E2C30;
    font-family: "Familjen Grotesk", serif;
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colorContent.colorContentBrand};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    img {
        height: 20px;
        width: 20px;
        object-fit: cover;
    }
`;

function TagLogo() {
    return (
        <SpanTagLogo>
            <img src={IconTag} alt="icon tag" />
            MUNDO BARBEIRO
        </SpanTagLogo>
    );
}

export default TagLogo;