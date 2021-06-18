import styled from 'styled-components'

export const QuizContainer = styled.main `

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
`

export const ContinueContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    h3 {
        color: #fafafa;
        font-weight: 500;
        font-size: 24px;

        margin-bottom: 15px;

    }

    .button {
        margin-left: 5px;
        margin-right: 5px;
    }

`
export const QuestionsContainer = styled.section `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {

        width: 60%;
        color: #fafafa;
        font-size: 36px;
        margin-bottom: 30px;

    }

    div {
        width: 50%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

    }

    .button {
        width: 250px;
        margin: 10px;
    }

`
export const ReportContainer = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .backButton {
        margin-top: -8rem;
    }

`