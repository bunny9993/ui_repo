import React, { useState, useEffect } from 'react'
import UserWelcome from '../UserWelcome/UserWeclome'
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions } from '../../Redux/Services/FetchQuestions.services';
import { mergeStyles, TextField, ChoiceGroup, Checkbox, Stack,DefaultButton,PrimaryButton,Spinner, SpinnerSize } from '@fluentui/react';
import axios from 'axios'
import Api from '../../Helpers/Api'


const classes = {
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
    })
}
const UserLanding = () => {
    const dispatch = useDispatch();
    const userType=sessionStorage.getItem('userType')
    const { Data } = useSelector((state) => {
        return {
            Data: state.FetchQuestionsReducer.questionsData,
        }
    })
    const [surveyData, setSurveyData] = useState([]);
    const [surveyStatus, setSurveyStatus] = useState(null);
    const [userValues, setUserValues] = useState(null);
    const [pageFlag,setPageFlag]=useState(null);
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        if(userType==='Anonymous'){
            dispatch(fetchQuestions(sessionStorage.getItem('user_id'),userType))
        }else{
            dispatch(fetchQuestions(sessionStorage.getItem('user_id'),userType))
        }
        
    }, [dispatch])

    useEffect(()=>{
        if(pageFlag && userType==='User'){
            setPageFlag(null);
            dispatch(fetchQuestions(sessionStorage.getItem('user_id'),userType))
        }else if(pageFlag){
            setPageFlag(null);
            setSurveyStatus('submit')
            setLoading(true)
        }
    },[pageFlag,userType])
    useEffect(() => {
        if (Data) {
            setSurveyData(Data.questionsList)
            setSurveyStatus(Data.survey_status)
            if (Data.survey_status === 'draft') {
                setUserValues(Data.saveChoiceList)
            } else if(Data.survey_status === 'notstarted') {
                setUserValues(Data.questionsList.map(i => { return { question_id: i.question_id, choice_selected: i.choice_selected, map_id: i.mapId } }))
            }
            setLoading(true)
        }
    }, [Data])
    // Used to add spacing between example checkboxes
    const stackTokens = { childrenGap: 10 };
    const checkBoxI = { iconName: 'AcceptIcon' }
    const onChangeText = (e, data, k) => {
        if (data.question_category === 'freeText') {
            setUserValues(prev => {
                if (prev) {
                    let temp = [...prev]
                    return temp.map(value => {
                        if (value.question_id === data.question_id) {
                            value.choice_selected = e
                        }
                        return value;
                    });
                } 
            })
        } else if (data.question_category === "multiSelect") {
            setUserValues(prev => {
                if (prev) {
                    let temp = [...prev]
                    return temp.map(value => {
                        
                        if (value.question_id === data.question_id) {
                            if (e) {
                                let choice = value.choice_selected === '' || value.choice_selected === null ? k : value.choice_selected.split(',').concat(k).join(',')
                                value.choice_selected = choice
                            } else {
                                let choice = value.choice_selected.split(',').filter(item => !item.includes(k)).join(',');
                                value.choice_selected = choice !== ',' ? choice : ''
                            }
                        }
                        return value
                    })
                }
            })
        }else if((data.question_category === "singleSelect")){
            setUserValues(prev => {
                if(prev){
                    let temp = [...prev]
                    return temp.map(value => {
                    if (value.question_id === data.question_id) {
                        value.choice_selected=e.key
                    }
                    return value
                })
                }
            })
        }
    }
    const onSave=(type)=>{
        const payLoad={mapId:userValues[0].map_id,UserAnswers:userValues.map(i => { return { question_id: i.question_id, userChoice: i.choice_selected, mapId: i.map_id } })}
        const api = new Api();
        const urlPrefix = api.getUrlPrefix();
        const url=urlPrefix+'saveSurvey'
        if(type==='draft'){
            payLoad.surveyFlag='draft'
            axios.post(url,payLoad).then(res=>setPageFlag(res.data.resultObj)).catch(err=>console.log(err));
            setLoading(false)
        }else if(type==='submit'){
            payLoad.surveyFlag='submit'
            axios.post(url,payLoad).then(res=>setPageFlag(res.data.resultObj)).catch(err=>console.log(err));
            setLoading(false)
        }
     
    }
    return (
        <>
            <UserWelcome header={`Welcome ${sessionStorage.getItem('userType')}`} subHeader={sessionStorage.getItem('user_email')} />
            <>
            {loading?<div style={{ marginLeft: '3%', marginTop: '3%', marginRight: '10%' ,paddingBottom:'3%'}}>
                {surveyStatus && surveyStatus !== 'submit' ? <div>{surveyData.map((i, index) => {
                    return (
                        <div key={i.question_id}><div className='ms-fontSize-20'><span>{index + 1}: </span>{i.question}</div><div style={{ paddingTop: '10px', paddingBottom: '10px' }}>{i.question_category === "freeText" ? <><TextField placeholder={'Text'} onChange={(_, e) => onChangeText(e, i)} className={classes.input} value={userValues && userValues[index] !== undefined && userValues[index].choice_selected==='null'?'':userValues[index].choice_selected} /></> : i.question_category === "multiSelect" ? <><Stack tokens={stackTokens}>{i.userChoice.map((v, k) => { return (<div key={k}><Checkbox checkmarkIconProps={checkBoxI} label={v.text} onChange={(_, e) => onChangeText(e, i, v.text)} checked={userValues && userValues[index] !== undefined && userValues[index].choice_selected && userValues[index].choice_selected !== undefined && userValues[index].choice_selected.split(',').includes(v.text) ? true : false} /></div>) })}</Stack></> : <><ChoiceGroup options={i.userChoice} required={true} onChange={(_, e) => onChangeText(e, i, index)} selectedKey={userValues && userValues[index] !== undefined && userValues[index].choice_selected} /></>}</div></div>)
                })}<div >{userType==='User'&&<DefaultButton  onClick={()=>onSave('draft')} className='btnWidth'>Save Draft</DefaultButton>}<span style={{float:'right'}}><PrimaryButton  onClick={()=>onSave('submit')} className='btnWidth'>Submit</PrimaryButton></span></div></div> : <>You have Succefully Submitted survey</>}
                
            </div>:<div className="spinCenter"><Spinner size={SpinnerSize.large} label={"Loading ..."} /></div>}
            </>
        </>
    )
}
export default UserLanding