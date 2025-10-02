import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import MyCounterApp from "./MyCounterApp"

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            `counter:5`
        )
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    })

    test('should increment the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);
        expect(labelH1.innerHTML).toBe('counter:6');
    })

    test('should decrement the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '-1' });

        fireEvent.click(button);
        expect(labelH1.innerHTML).toBe('counter:4');
    })

    test('should reset the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: 'Reset' });

        fireEvent.click(button);
        expect(labelH1.innerHTML).toBe('counter:5');
    })
})