import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import MenuButton from '../../Components/MenuButton/MenuButton';

describe("MenuButton component show", () => {
    it("Should be show the <MenuButton> and render properly.", () => {
        const { container } = render(
            <MenuButton />
        );
        expect(container).toBeTruthy();
    });
});