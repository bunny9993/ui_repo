import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Userlanding from '../../Components/Userlanding/Userlanding';

describe("Userlanding component show", () => {
    it("Should be show the <Userlanding> and render properly.", () => {
        const { container } = render(
            <Userlanding />
        );
        expect(container).toBeTruthy();
    });
});