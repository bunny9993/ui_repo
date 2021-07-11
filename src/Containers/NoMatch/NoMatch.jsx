import React from 'react';
import { mergeStyles, PrimaryButton } from '@fluentui/react';
import { withRouter } from 'react-router';

const classes = {
    center: mergeStyles({
        position: 'absolute',
        top: '45vh',
        left: '50vw',
        mozTransform: 'translateX(-50%) translateY(-50%)',
        webkitTransform: 'translateX(-50%) translateY(-50%)',
        transform: 'translateX(-50%) translateY(-50%)'
    })
}

function NoMatch(props) {
    const navigateToHome = () => {
        props.history.push('/home');
    }
    return (
        <div className={`ms-Grid color-shuttle-gray text-align-center paddingAroundPage ${classes.center}`}>
            <div className={`ms-Grid-row`}>
                <div className={`ms-sm12 ms-md12 ms-lg12 ms-xl12 ms-fontSize-14 ms-fontWeight-semibold pdB2`}>
                    {'404 - Page not found'}
                </div>
                <div className={`ms-sm12 ms-md12 ms-lg12 ms-xl12 ms-fontSize-14 pdB4`}>
                    {'The page you were looking for was moved, or does not exist.'}
                </div>
                <div>
                    <PrimaryButton onClick={navigateToHome}> {'Go Back'}</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NoMatch);
