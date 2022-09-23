import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
    background-color: hsl(220, 100%, 95%);
`;

export const StyledLegend = styled.legend`
    background-color: hsl(220, 100%, 85%);
    border-radius: 5px;
    padding: 10px;
`;

export const StyledSpan = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const StyledInput = styled.input`
    border: 1px solid #ccc;
    padding: 5px;
    max-width: 400px;
    width: 100%;
    border-radius: 5px;
    margin: 5px;
`;

export const StyledSelect = styled.select`
    border: 1px solid #ccc;
    padding: 5px;
    max-width: 400px;
    width: 100%;
    border-radius: 5px;
    margin: 5px;
`;

export const Button = styled.button`
    width: 50%;
    border: none;
    background-color: hsl(220, 100%, 85%);
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    margin-left: 5px;

    &:hover {
        background-color: hsl(220, 100%, 82%); 
    }

    &:active {
        background-color: hsl(220, 100%, 78%);
    }
`;