import styled from 'styled-components'

export const HomeContainer = styled.main `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        
    }

    h1 {
        color: #fafafa;
        margin-top: 2rem;
        font-weight: 500;
    }

    span {
        color: #fafafa;
        font-size: 2rem;
    }

    .input {
        width: 24rem;
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }   
    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    }

    .button {
        width: 12rem;
        margin-top: 4rem;
    }
    
    .report {

    }
`