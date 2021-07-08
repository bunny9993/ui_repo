import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import NavRoutes from '../../Components/NavRoutes/NavRoutes';

describe("NavRoutes component show", () => {
    it("Should be show the <NavRoutes> and render properly.", () => {
        const { container } = render(
            <NavRoutes />
        );
        expect(container).toBeTruthy();
    });
});