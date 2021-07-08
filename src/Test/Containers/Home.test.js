import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '../../Containers/Home/Home';

describe("Home component show", () => {
    it("Should be show the <Home> and render properly.", () => {
        const { container } = render(
            <Home />
        );
        expect(container).toBeTruthy();
    });
});