import { act, renderHook } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { useGifs } from "./useGifs"

describe('useGifs', () => {

    test('should returns default values and methods', () => {
        const { result } = renderHook(() => useGifs());
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleSearch.length).toBeDefined();
        expect(result.current.handleTermClicked.length).toBeDefined();

    })

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleSearch('goku');
        });
        expect(result.current.gifs.length).toBe(10);

    })

    test('should return a list of gifs when handledTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleTermClicked('goku');
        });
        expect(result.current.gifs.length).toBe(10);
    })

})