import styled from "styled-components";
import IconCalendar from '../../assets/img/icon-calendar.svg';

const DateInput = styled.div `
    padding: 0.75rem;
    min-width: 172px;
    min-height: 48px;
    background: #14151D;
    border: 1px solid ${props => props.theme.colorBorder.colorBorderPrimary};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    
    img {
        height: 20px;
        width: 20px;
        object-fit: cover;
    }
`;

const Input = styled.input `
    font-size: 1rem;
    font-family: ${props => props.theme.fonts.fontInter};
    background: url('/images/icon-arrow-down.svg') no-repeat transparent;
    background-position: calc(100% - 0.5rem) center;
    border: none;
    color: ${props => props.theme.colorContent.colorContentSecondary};

    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        z-index: 2;
        opacity: 0;
    }
`;

function InputDate() {
    return (
        <DateInput>
            <img src={IconCalendar} alt="icon-calendar" />
            <Input 
                type="date" 
                name="input-date" 
                id="input-date"
            />
        </DateInput>
    );
}

export default InputDate;