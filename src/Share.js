import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    outline: none;
    background-color: black;
    color: white;
    padding: 0.5em 1em;
    border-radius: 0.3em;
`;

export default function Share () {
    
    return(
        <>
        <StyledButton>Share <FontAwesomeIcon icon={faShareNodes}/></StyledButton>
        </>
    );
}