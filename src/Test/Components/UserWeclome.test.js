import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import UserWeclome from '../../Components/UserWelcome/UserWeclome';

describe("UserWeclome component show", () => {
    it("Should be show the <UserWeclome> and render properly.", () => {
        const props = { subHeader: true }
        const { container } = render(
            <UserWeclome {...props} />
        );
        expect(container).toBeTruthy();
    });
});