import { AppBar, Tabs, Tab } from "@material-ui/core";
import { ReportContainer } from "./styles";
import { a11yProps, TabPanel } from "../Tabs/Tabs";
import { useState } from "react";

interface ReportData {
        category: string,
        type: string,
        difficulty: string,
        question: string,
        correct_answer: string,
        incorrect_answers: [
            string
        ],
        selected_answer: string,
        id: number
    }

    interface ReportProps {
        report: Array<ReportData>,
        id: number,
        wins: number
    }

export function Report(props: ReportProps) {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };


    return(
        <ReportContainer>
                <div>
                    <AppBar position="static" color="default">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        >
                        <Tab label='Resumo' {...a11yProps(0)} />
                        { props.report.map(question => (
                            <Tab label={`${question.id + 1}º questão`} {...a11yProps(question.id + 1)} />
                        )) }
                        </Tabs>
                        </AppBar>
                            <TabPanel value={value} index={0}>
                                <div className='resume'>
                                    <h2>Resumo</h2>
                                    <div>
                                        <h3>Você acertou {props.wins} de { props.id } questões!</h3>
                                    </div>
                                </div>
                            </TabPanel>
                        { props.report.map(question => (
                            <TabPanel value={value} index={question.id + 1}>
                                <h2 dangerouslySetInnerHTML={{__html: question.question}}></h2>
                                <div>
                                    <h3>Respostas erradas</h3>
                                    <div>
                                        { question.incorrect_answers.map(answer => (
                                            <p>{answer}</p>
                                        )) }
                                    </div>
                                    <h3>Resposta correta</h3>
                                    <div>
                                        { question.correct_answer }
                                    </div>
                                    <h3>Sua resposta</h3>
                                    <div>
                                        { question.selected_answer }
                                    </div>
                                </div>
                            </TabPanel>
                        ))}
                </div>             
            </ReportContainer>
    )
}