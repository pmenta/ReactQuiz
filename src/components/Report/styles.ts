import styled from 'styled-components'

export const ReportContainer = styled.main `
    
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;

height: 100vh;

> div {
        background: #fafafa;
        width: 500px;
        height: 50%;

        span {
            color: #000;
            font-size: 18px;
        }

        .resume {
            margin-top: 18%;
        }

    }
`