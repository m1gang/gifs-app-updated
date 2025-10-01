import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {
    const title = 'Test id';
    test('should render the title correctly', () => {
        render(<CustomHeader title={title} />);
        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render the description when provided', () => {
        const desc = 'test description'
        render(<CustomHeader title={title} description={desc} />);
        expect(screen.getByText(desc)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(desc);

    });

    test('should not render description when not provided', () => {
        //container = render();
        const { container } = render(<CustomHeader title={title} />);
        const divElement = container.querySelector('.content-center')
        const h1 = divElement?.querySelector('h1');
        // expect(h1?.innerHTML).toBe(title);
        console.log(h1?.innerHTML);
        const p = divElement?.querySelector('p');
        expect(p).toBeNull();

    });

});