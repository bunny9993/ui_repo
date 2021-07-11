import React, { useEffect } from 'react'
import { mergeStyles, PrimaryButton } from '@fluentui/react'
import UserWelcome from '../UserWelcome/UserWeclome'
import { useHistory } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAdminDashboard } from '../../Redux/Services/FetchAdminDashboard.services';
import { useState } from 'react';

const classes = {
    cardHead: mergeStyles({
        fontSize: "25px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "10px"
    }),
}
const AdminLaning = () => {
    const history= useHistory();
    const [mainData,setMainData]=useState([])
    const { DasboardData } = useSelector((state) => {
        return {
            DasboardData: state.FetchAdminDashboardReducer.dashBoardData,
        }
    })
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchAdminDashboard(sessionStorage.getItem('user_id')))
    },[dispatch])
    useEffect(()=>{
        console.log(DasboardData)
        if(DasboardData){
            setMainData(DasboardData)
        }
    },[DasboardData])
    //const Data = [{ version: "1", CompletionCount: 6 }, { version: "1", CompletionCount: 7 }, { version: "1", CompletionCount: 8 }, { version: "1", CompletionCount: 1 }, { version: "1", CompletionCount: 1 }, { version: "1", CompletionCount: 1 }, { version: "1", CompletionCount: 1 }, { version: "1", CompletionCount: 1 }, { version: "1", CompletionCount: 1 }, { version: "1", CompletionCount: 1 }, { version: "1", CompletionCount: 1 }]
    return (
        <div>
            <UserWelcome header={`Welcome ${sessionStorage.getItem('userType')}`} subHeader={sessionStorage.getItem('user_email')} />
            <div className={`${classes.cardHead}`}>Survey Dashboard <span style={{ float: 'right', paddingRight: '10px' }}><div><PrimaryButton onClick={()=>{history.push('/createuser')}}>Add User</PrimaryButton><span style={{ paddingLeft: '10px' }}><PrimaryButton onClick={()=>{history.push('/createsurvey')}}>Add Survey</PrimaryButton></span></div></span></div>
            <div className={`flex ms-Grid-row`} style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {mainData && mainData.map((i, index) =>
                    <div className={`ms-Grid-col ms-sm4 ms-md4 ms-lg4 msxl4`} style={{ padding: '0vh 1.26vw 2.35vh 0vw' }} key={index}>
                        <div className="card">
                            <div className="container">
                                <h4><b>Survey Name: {i.survey_name}</b></h4>
                                <p>Version: {i.survey_version}</p>
                                <p>No.of Persons saved as draft: {i.draft_count}</p>
                                <p>No.of Persons Completed Survey: {i.completed_count}</p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}
export default AdminLaning