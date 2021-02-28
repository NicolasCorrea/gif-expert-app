import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks';

describe('test on useFetchGifs', () => {
    
    test('should return initial state', async () => {
        const { result, waitForNextUpdate }  = renderHook(() => useFetchGifs("One Piece"));
        const { data, loading } = result.current; 
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
        
    })
    
    
    test('should return array of images and loading false', async () => {
        const { result, waitForNextUpdate }  = renderHook(() => useFetchGifs("One Piece"));
        await waitForNextUpdate();
        const { data, loading } = result.current; 
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })
    
    
})
