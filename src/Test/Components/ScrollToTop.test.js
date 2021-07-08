import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
describe("ScrollToTop component show", () => {
    it("Should be show the <ScrollToTop> and render properly.", () => {
        const history = createMemoryHistory();
        const { container } = render(
            <Router history={history}>
                <ScrollToTop />
            </Router>

        );
        expect(container).toBeTruthy();
    });
});