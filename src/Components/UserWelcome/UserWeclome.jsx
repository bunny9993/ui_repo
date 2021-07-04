import React from 'react';
import { mergeStyles } from '@fluentui/react';
import Logo from '../../Assets/las.png';
const classes = {
    header: mergeStyles({
        color: '#ffffff'
    }),
    greeting: mergeStyles({
        paddingTop: '18.5vh',
        letterSpacing: '-0.96px',
    }),
    welcomeMsg: mergeStyles({
        letterSpacing: '-0.02px',
    }),
    bgBanner: mergeStyles({
        background: `url(${Logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height: '25vh',
        maxHeight: '25vh'
    })
}


const UserWelcome = (props) => {
    const { header, subHeader } = props;
    const banner = {
        bgBanner: mergeStyles({
            background: `url(${Logo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            height: '15vw',
            // maxHeight: '25vh'
        })
    }
    return (
        <div className={banner.bgBanner}>
            <div className={`ms-grid ${classes.header}`}>
                <div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-fontWeight-semibold pdL1p5 ms-fontSize-36 ${classes.greeting}`}>
                    {header}
                </div>
                <div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-fontSize-18 pdL1p5 ${classes.welcomeMsg}`}>
                    {subHeader}
                </div>
            </div>
        </div>

    )
}
export default UserWelcome;