import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { api } from '../../services/api';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Report } from '../../components/Report'

import { QuizContainer, ContinueContainer, QuestionsContainer, ReportContainer } from './styles'
import { ShuffleArray } from '../../utils/ShuffleArray'

import { QuestionsData, ReportData } from '../../interfaces/index'

export function Quiz() {

    const { id } = useParams() as any;
    const [ questions, setQuestions ] = useState([] as Array<QuestionsData>)
    const [ acceptedContinue, setAcceptedContinue ] = useState(false)
    const [ actualQuestion, setActualQuestion ] = useState(0)
    const [ actualAnswers, setActualAnswers ] = useState([] as Array<string>)

    const [ report, setReport ] = useState([] as Array<ReportData>)
    const [ wins, setWins ] = useState(0)
    
    useEffect(() => {
        api.get(`api.php?amount=${id}`)
            .then( response => setQuestions( response.data.results ) )
    }, [ id ])

    useEffect(() => {
        if ( questions.length > 0 ) {
            if ( actualQuestion < Number(id) ) {
                setActualAnswers(ShuffleArray([questions[actualQuestion].correct_answer, ...questions[actualQuestion].incorrect_answers]))
            }   
        }
    }, [ questions, actualQuestion, id ])

    useEffect(() => {
        if ( actualQuestion === Number(id) ) {
            const localReport = {report, id, wins}
            localStorage.setItem('@report', JSON.stringify(localReport))
        }
    }, [actualQuestion, id, report, wins])
    

    return(
        <>
        { actualQuestion >= Number(id) ? (
            <ReportContainer>
                <Report report={report} id={id} wins={wins}/>
                <Button variant="contained" color="secondary" className='backButton' component={ Link } to='/' >Voltar ao ínicio</Button>
            </ReportContainer>
        ) : 
        (<QuizContainer>
            { !acceptedContinue ? 
                <ContinueContainer>
                    <h3>Então, vamos jogar?!</h3>
                    <div>
                        <Button variant="contained" color="secondary" className='button' component={ Link } to='/' >CANCELAR</Button>
                        <Button variant="contained" color="primary" className='button' onClick={() => setAcceptedContinue(true)}>
                            CONTINUAR
                        </Button>
                    </div>
                </ContinueContainer> 
            : (
                <QuestionsContainer>
                    <h2 dangerouslySetInnerHTML={{__html: questions[actualQuestion].question }}></h2>
                    <div>
                        { actualAnswers.map( answer => (
                            <Button variant='contained' className='button' key={ answer } onClick={() => {
                                setActualQuestion(actualQuestion + 1)
                                setReport([...report, {...questions[actualQuestion], selected_answer: answer, id: actualQuestion}])

                                if ( answer ===  questions[actualQuestion].correct_answer ) {
                                    setWins(wins + 1)
                                }

                            }}> { answer } </Button>
                        ) ) }
                    </div>
                </QuestionsContainer>
            ) }
        </QuizContainer>)}
        </>
    )
}