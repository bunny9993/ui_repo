import React, { useState } from 'react'
import { mergeStyles, TextField, PrimaryButton } from '@fluentui/react'
import MenuButton from '../../Components/MenuButton/MenuButton'
import { useHistory } from 'react-router'

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
    const AddQuestion = (type) => {
        let tempArr = [...questionList]
        if (type === 'freeText') {
            tempArr.push({ questionType: 'Free Text', questionValue: '', id: questionList.length + 1 })
        } if (type === 'singleChoice') {
            tempArr.push({ questionType: 'Single Choice', questionValue: '', id: questionList.length + 1 })
        }
        if (type === 'multipleChoice') {
            tempArr.push({ questionType: 'Multiple Choice', questionValue: '', id: questionList.length + 1 })
        }
        setQuestionList(tempArr)

    }
    // const list=[{id:1,Name:'version 1'},{id:2,Name:'version 2'},{id:3,Name:'version 3'}]
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
                    <TextField placeholder={'Survey Version'} label={'Survey Version'} className={classes.input} />
                </div>
                <div>{questionList.length > 0 && questionList.map((i) =>
                    <div className={`${classes.margin} `} key={i.id}>
                        <TextField placeholder={'Question'} label={`Question ${i.id}: Catogery ${i.questionType}`} className={classes.input} />
                        {i.questionType !== 'Free Text' && <div style={{ display: "flex", margin: "5px", alignItems: 'center' }}> <div style={{ paddingRight: "5px" }}><TextField placeholder={'Option1'} label={`Option1`} className={classes.input} /></div> <div style={{ paddingRight: "5px" }}><TextField placeholder={'Option2'} label={`Option2`} className={classes.input} /> </div><TextField placeholder={'Option3'} label={`Option3`} className={classes.input} /></div>}
                    </div>)}</div>
                <div className={`${classes.margin}  ${classes.pdB10}`}>
                    <PrimaryButton className='btnWidth' onClick={() => { history.push('/home') }}>Submit</PrimaryButton>
                </div>
            </div>
        </>
    )
}
export default AddSurvey