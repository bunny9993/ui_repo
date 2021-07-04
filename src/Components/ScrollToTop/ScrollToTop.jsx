import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

const ScrollToTop = (props) => {
    const { history, children } = props;
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    });
    return <>
        {children}
    </>
}

export default withRouter(ScrollToTop);