import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import MyCounterApp from "./MyCounterApp";


const handleAddMock = vi.fn();
const handleLessMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleLess: handleLessMock,
        handleReset: handleResetMock,
    })
}));

describe('MyCounterApp', () => {

    test('should render the component', () => {

        render(<MyCounterApp />);
        screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            `counter:20`
        )
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();

    })

    test('should call handled if button is clicked', () => {

        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleLessMock).toHaveBeenCalled();
        expect(handleResetMock).toHaveBeenCalled();

    })


})