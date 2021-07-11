import React,{useState,useEffect} from 'react'
import { mergeStyles,TextField,Dropdown,PrimaryButton } from '@fluentui/react'
import { buildOptions } from '../../Helpers/Common'
import { useHistory } from 'react-router'
import axios from 'axios'
import Api from '../../Helpers/Api'

const classes = {
    header: mergeStyles({
        minHeight:'92vh',
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
    pdB10:mergeStyles({
        paddingBottom:'10px',
        paddingTop:'10px',
        fontSize:'20px'
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
                border:  "2px solid #bac3ca",
                // ...styles,
                ':hover': {
                    border: "2px solid #e8ebed"
                }
            },
        }
    })
}

const UserFrom = () => {
    const history=useHistory();
    const[selectedId,setSelectedId]=useState(null);
    const [list,setList]=useState([]);
    const [selectSurvey,setSelectSurvey]=useState(null);
    const [surveyList,setSurveyList]=useState([])
    const api = new Api();
    const urlPrefix = api.getUrlPrefix();
    const[userName,setUserName]=useState(null);
    const[userEmail,setUserEmail]=useState(null);
    const [status,setStatus]=useState(null);
   //const list=[{id:"version 1'",Name:'version 1'},{id:'version 2',Name:'version 2'},{id:'version 3',Name:'version 3'}]
    useEffect(()=>{
        const url=urlPrefix+`fetchSurvey/${sessionStorage.getItem('user_id')}`
        axios.get(url).then(res=>setSurveyList(res.data.resultObj)).catch(err=>console.log(err))
    },[urlPrefix])
    useEffect(()=>{
        if(selectSurvey){
        const url=urlPrefix+`fetchSurveyVersions/${sessionStorage.getItem('user_id')}/surveyName/${selectSurvey}`
        axios.get(url).then(res=>setList(res.data.resultObj)).catch(err=>console.log(err))
        }
    },[selectSurvey,urlPrefix])

    const onSubmit=()=>{
        let payLoad={userName:userName,userEmail:userEmail,surveyId:selectedId,userId:sessionStorage.getItem('user_id')}
        if(payLoad.userName===null||payLoad.userEmail===null||payLoad.surveyId===null){
            alert('Please fill all fields')
        }else{
            const url=urlPrefix+`addUser`
            axios.post(url,payLoad).then(res=>setStatus(res.data.resultObj)).catch(err=>console.log(err)) 
        }
    }
    useEffect(()=>{
        if(status){
            if(status==='User Email already exisits'){
                alert('User Email already exisits')
                setStatus(null)
            }if(status==='Successfuly Updated'){
                alert('User created Successfully')
                setStatus(null)
                history.push('/home')
            }
            setStatus(null)
        }
    },[status,history])
    return (
        <>
            <div className={` ms-Grid ms-fontSize-12 ${classes.header} ${classes.navFlex} ${classes.pdL0}`}>
            <div className={`${classes.margin} ${classes.pdB10}`}>Create User</div>
                <div className={`${classes.margin} `}>
                <TextField placeholder={'UserName'} label={'UserName'}  className={classes.input} required onChange={(_,e)=>setUserName(e)}/>
                </div>
                <div className={`${classes.margin} `}>
                <TextField placeholder={'UserEmail'} label={'UserEmail'}  className={classes.input} required onChange={(_,e)=>setUserEmail(e)}/>
                </div>
                <div className={`${classes.margin} `}>
                <Dropdown
                            className={classes.select}
                            placeholder={'Select an option'}
                            onChange={(_, option) => setSelectSurvey(option.key)}
                            options={surveyList && buildOptions(surveyList, 'survey_name', 'survey_name')}
                            selectedKey={selectSurvey}
                            styles={{
                                dropdownOptionText: { paddingTop: '4px' }
                            }}
                            label={'Survey Name'}
                            required
                        />
                </div>
                <div className={`${classes.margin} `}>
                <Dropdown
                            className={classes.select}
                            placeholder={'Select an option'}
                            onChange={(_, option) => setSelectedId(option.key)}
                            options={list && buildOptions(list, 'survey_id', 'survey_version')}
                            //multiSelect
                            selectedKey={selectedId}
                            styles={{
                                dropdownOptionText: { paddingTop: '4px' }
                            }}
                            label={'Survey Versions'}
                            required
                        />
                </div>
                <div className={`${classes.margin}  ${classes.pdB10}`}>
                        <PrimaryButton className={classes.select} onClick={onSubmit}>Submit</PrimaryButton>
                </div>
            </div>
        </>
    )
}
export default UserFrom