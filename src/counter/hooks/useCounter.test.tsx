import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, test } from "vitest"
import { useCounter } from "./useCounter";

describe('useConuter', () => {
    // let result;

    // beforeEach(() => {
    //     const { result: hookValue } = renderHook(() => useCounter());
    //     result = hookValue;
    // })

    test('should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    })

    test('should initialize with value 20', () => {
        const initialValue = 20;
        const { result } = renderHook(() => useCounter(initialValue));
        expect(result.current.counter).toBe(20);
    })

    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.handleAdd();
            result.current.handleAdd();
        });

        expect(result.current.counter).toBe(12);
    })

    test('should decrement counter when handleLess is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleLess();
        })

        expect(result.current.counter).toBe(9);
    })

    test('should reset to initial value counter when handleReset is called', () => {
        const initialValue = 10;

        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.handleLess();
            result.current.handleLess();
            result.current.handleLess();
            result.current.handleLess();
            result.current.handleLess();
        })
        expect(result.current.counter).toBe(5);


        act(() => {
            result.current.handleReset();
        })
        expect(result.current.counter).toBe(initialValue);
    })
})