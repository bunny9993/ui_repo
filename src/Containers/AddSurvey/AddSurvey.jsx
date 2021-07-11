import React, { useState, useEffect } from 'react'
import { mergeStyles, TextField, PrimaryButton } from '@fluentui/react'
import MenuButton from '../../Components/MenuButton/MenuButton'
import { useHistory } from 'react-router'
import axios from 'axios'
import Api from '../../Helpers/Api'

const classes = {
    header: mergeStyles({
        minHeight: '92vh',
        background: '#F3F5F6',
    }),
    navFlex: mergeStyles({
        alignItems: 'center',
        display: 'block'
    }),
    pdL0: mergeStyles({
        paddingLeft: '0 !important',
        paddingRight: '0 !important'
    }),
    margin: mergeStyles({
        marginLeft: '20% !important',
        marginRight: '20% !important'
    }),
    pdB10: mergeStyles({
        paddingBottom: '10px',
        paddingTop: '10px',
        fontSize: '20px'
    }),
    select: mergeStyles({
        selectors: {
            '.ms-Dropdown-title': {
                height: "48px",
                lineHeight: '46px',
                border: "2px solid #bac3ca",
                ':hover': {
                    border: "2px solid #e8ebed !important"
                }
            },
            '.ms-Dropdown-caretDownWrapper': {
                height: '48px',
                lineHeight: '46px'
            },
        }
    }),
    input: mergeStyles({
        selectors: {
            '.ms-TextField-fieldGroup': {
                height: "48px",
                border: "2px solid #bac3ca",
                // ...styles,
                ':hover': {
                    border: "2px solid #e8ebed"
                }
            },
        }
    }),
    pullRight: mergeStyles({
        float: 'right',
        paddingBottom: '2vh',
        marginRight: '8px'
    }),
}

const AddSurvey = () => {
    const history = useHistory();
    const [questionList, setQuestionList] = useState([])
    const [surveyName, setSurveyName] = useState(null);
    const [surveyVersion, setSurveyVersion] = useState(null);
    const [status,setStatus]=useState(null);
    const api = new Api();
    const urlPrefix = api.getUrlPrefix();
    const AddQuestion = (type) => {
        let tempArr = [...questionList]
        if (type === 'freeText') {
            tempArr.push({ questionType: type, question_Type: 'Free Text', question: '', id: questionList.length + 1 })
        } if (type === 'singleChoice') {
            tempArr.push({ questionType: type, question_Type: 'Single Choice', question: '', id: questionList.length + 1 })
        }
        if (type === 'multipleChoice') {
            tempArr.push({ questionType: type, question_Type: 'Multiple Choice', question: '', id: questionList.length + 1 })
        }
        setQuestionList(tempArr)

    }

    const onSubmit = () => {
        let payLoad = { surveyName: surveyName, surveyVersion: surveyVersion, userId: sessionStorage.getItem('user_id'), questionDtoList: questionList }

        if (payLoad.surveyName === null || payLoad.surveyVersion === null) {
            alert('Please fill all mandatory fields')
        } else {
            console.log(payLoad)
            const url=urlPrefix+`addSurvey`
            axios.post(url,payLoad).then(res=>setStatus(res.data.resultObj)).catch(err=>console.log(err))
        }
        // history.push('/home')
    }

    useEffect(()=>{
        if(status){
            if(status==='Suvrey Name or Survey Vesion alfready exist'){
                alert('Suvrey Name or Survey Vesion alfready exist')
                setStatus(null)
            }if(status==='Successfuly Updated'){
                alert('Survey created Successfully')
                setStatus(null)
                history.push('/home')
            }
            setStatus(null)
        }
    },[status,history])

    return (
        <>
            <div className={` ms-Grid ms-fontSize-12 ${classes.header} ${classes.navFlex} ${classes.pdL0}`}>
                <div className={`${classes.margin} ${classes.pdB10}`}>Configure Survey
                    <span className={`${classes.pullRight}`}>
                        <MenuButton
                            buttonLabel={'Add Question'}
                            menuProps={[{
                                key: 'freeText',
                                text: 'Free Text',
                                className: 'btnWidth',
                                onClick: () => AddQuestion('freeText')
                            },
                            {
                                key: 'singleChoice',
                                text: 'Single Choice',
                                className: 'btnWidth',
                                onClick: () => AddQuestion('singleChoice')
                            },
                            {
                                key: 'multipleChoice',
                                text: 'Multiple Choice',
                                className: 'btnWidth',
                                onClick: () => AddQuestion('multipleChoice')
                            }]}
                        />
                    </span>
                </div>
                <div className={`${classes.margin} `}>
                    <TextField placeholder={'Survey Name'} label={'Survey Name'} className={classes.input} onChange={(_, e) => setSurveyName(e)} />
                    <TextField placeholder={'Survey Version'} label={'Survey Version'} className={classes.input} onChange={(_, e) => setSurveyVersion(e)} />
                </div>
                <div>{questionList.length > 0 && questionList.map((i) =>
                    <div className={`${classes.margin} `} key={i.id}>
                        <TextField placeholder={'Question'} label={`Question ${i.id}: Catogery ${i.question_Type}`} className={classes.input} onChange={(_, e) => setQuestionList(prev => { let temp = [...prev]; temp.map(value => { if (value.id === i.id) { value.question = e } }); return temp })} />
                        {i.question_Type !== 'Free Text' && <div style={{ display: "flex", margin: "5px", alignItems: 'center' }}> <div style={{ paddingRight: "5px" }}><TextField placeholder={'Option1'} label={`Option1`} className={classes.input} onChange={(_, e) => setQuestionList(prev => { let temp = [...prev]; temp.map(value => { if (value.id === i.id) { value.choice1 = e } }); return temp })} /></div> <div style={{ paddingRight: "5px" }}><TextField placeholder={'Option2'} label={`Option2`} className={classes.input} onChange={(_, e) => setQuestionList(prev => { let temp = [...prev]; temp.map(value => { if (value.id === i.id) { value.choice2 = e } }); return temp })} /> </div><TextField placeholder={'Option3'} label={`Option3`} className={classes.input} onChange={(_, e) => setQuestionList(prev => { let temp = [...prev]; temp.map(value => { if (value.id === i.id) { value.choice3 = e } }); return temp })} /></div>}
                    </div>)}</div>
                <div className={`${classes.margin}  ${classes.pdB10}`}>
                    <PrimaryButton className='btnWidth' onClick={onSubmit}>Submit</PrimaryButton>
                </div>
            </div>
        </>
    )
}
export default AddSurvey