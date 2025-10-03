import { act, renderHook } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";



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

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('Esto es un error'));

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);

    })


    test('should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());
        vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

        for (let index = 0; index < 10; index++) {
            await act(async () => {
                await result.current.handleSearch(`goku${index}`);
            });

        }
        console.log(result.current.previousTerms);

        expect(result.current.previousTerms.length).toBe(8);
        expect(result.current.previousTerms).toStrictEqual([
            'goku9', 'goku8',
            'goku7', 'goku6',
            'goku5', 'goku4',
            'goku3', 'goku2'
        ])

    })



})