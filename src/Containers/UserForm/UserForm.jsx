import React,{useState} from 'react'
import { mergeStyles,TextField,Dropdown,PrimaryButton } from '@fluentui/react'
import { buildOptions } from '../../Helpers/Common'
import { useHistory } from 'react-router'

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
    const[selectedId,setSelectedId]=useState(null)
    const list=[{id:1,Name:'version 1'},{id:2,Name:'version 2'},{id:3,Name:'version 3'}]
    return (
        <>
            <div className={` ms-Grid ms-fontSize-12 ${classes.header} ${classes.navFlex} ${classes.pdL0}`}>
            <div className={`${classes.margin} ${classes.pdB10}`}>Create User</div>
                <div className={`${classes.margin} `}>
                <TextField placeholder={'UserName'} label={'UserName'}  className={classes.input}/>
                </div>
                <div className={`${classes.margin} `}>
                <TextField placeholder={'UserEmail'} label={'UserEmail'}  className={classes.input}/>
                </div>
                <div className={`${classes.margin} `}>
                <Dropdown
                            className={classes.select}
                            placeholder={'Select an option'}
                            onChange={(_, option) => setSelectedId(option.key)}
                            options={list && buildOptions(list, 'id', 'Name')}
                            //multiSelect
                            selectedKey={selectedId}
                            styles={{
                                dropdownOptionText: { paddingTop: '4px' }
                            }}
                            label={'Survey Versions'}
                        />
                </div>
                <div className={`${classes.margin}  ${classes.pdB10}`}>
                        <PrimaryButton className={classes.select} onClick={()=>{history.push('/home')}}>Submit</PrimaryButton>
                </div>
            </div>
        </>
    )
}
export default UserFrom