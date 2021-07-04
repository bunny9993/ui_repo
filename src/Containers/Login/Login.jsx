import React,{useState} from 'react'
import { mergeStyles,TextField,PrimaryButton } from '@fluentui/react';
import Logo from '../../Assets/las.png';
import { useHistory } from 'react-router';

const classes = {
    bgLogo: mergeStyles({
        background: `url(${Logo}) no-repeat`,
        backgroundSize: 'cover'
    }),
    headerText:mergeStyles({
        alignItems:'center',
        color:'white',
        fontSize:'26px',
        paddingTop:'10%'
    }),
    main:mergeStyles({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // height:'50%'
    }),
    login:mergeStyles({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // height:'50%'
        paddingTop:'10px'
    }),
    anonymous:mergeStyles({
        paddingTop:'20px',
        color: '#7500c0',
        // paddingRight: '0.64vw',
        selectors: {
            ':hover': {
                color: '#A101FF'
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
const Login = () => {
    const[userEmail,setUserEmail]=useState('')
    const[userPassword,setUserPassword]=useState('')
    const history=useHistory()
    const onLogin=()=>{
        console.log(userEmail,userPassword)
    }
    const onRef=()=>{
        localStorage.setItem('userType',"Admin")
        history.push('/home')
    }
    return (
        <>
            <div className={`ms-Grid full-height  ${classes.bgLogo}`} dir="ltr">
                <div className={`ms-Grid-row ${classes.main}`}>
                    <div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-x12 ${classes.headerText}`}>
                        Oracle Survey
                    </div>
                </div>
                <div className={`ms-Grid-row ${classes.login}`}>
                    <div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-x12 login-box`}>
                        <TextField className={`${classes.input}`} label='User Email' placeholder='User Email'value={userEmail} type='email'onChange={(_,value)=>setUserEmail(value)}   autoComplete="off"/>
                        <div style={{paddingTop:'5px',paddingBottom:'20px'}}>
                        <TextField className={`${classes.input}`} label='User Password' placeholder='User Password' type='password'value={userPassword}  onChange={(_,value)=>setUserPassword(value)}   autoComplete="off"/>
                        </div>
                        <PrimaryButton onClick={onLogin}>Login</PrimaryButton>
                        <div className={`cursor-pointer ${classes.anonymous}`} onClick={onRef}>Continue as anonymous user</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login