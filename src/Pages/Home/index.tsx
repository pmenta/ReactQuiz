import { HomeContainer } from './styles'
import Char1 from '../../assets/char1.png'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Button, Popover } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom'
import { Report } from '../../components/Report';

export function Home() {

    const [numberOfQuestions, setNumberOfQuestions] = useState() as any
    const [report] = useState(() => {
        const storagedReport = localStorage.getItem('@report')

        if ( storagedReport ) {
            return JSON.parse(storagedReport)
        }

        return []
    })

    function handleChange(event: any) {
        setNumberOfQuestions(event.target.value)
    }

    return(
        <HomeContainer>
            
            <h1>The everything quiz!</h1>
            <img src={ Char1 } alt="Boy using a computer"/>
            <TextField
                id="standard-basic" label="Choose the number of questions" 
                className='input' type='number' 
                value={ numberOfQuestions } onChange={handleChange}/>
            { numberOfQuestions > 0 ? 
            <Button 
                variant="contained" color="primary" 
                className='button' component={ Link } 
                to={`/quiz/${ numberOfQuestions }`}>
                <NavigateNextIcon/>
            </Button> : 
            <Button 
                variant="contained" color="primary" 
                className='button' disabled 
                component={ Link } to={`/quiz/${ numberOfQuestions }`}>
                <NavigateNextIcon/>
            </Button>}

            { report && (
                <Report report={report.report} id={report.id} wins={report.wins}/>
            )
            }

        </HomeContainer>
    )
}