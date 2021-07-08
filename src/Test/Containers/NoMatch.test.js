import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import NoMatch from '../../Containers/NoMatch/NoMatch';
import { render, fireEvent } from '@testing-library/react';

describe("NoMatch component show", () => {
    it("Should be show the <NoMatch> and render properly.", () => {
        const history = createMemoryHistory();
        const { getByText } = render(
            <Router history={history}>
                <NoMatch />
            </Router>
        );
        const goBack = getByText("Go Back")
        fireEvent.click(goBack);
    });
});