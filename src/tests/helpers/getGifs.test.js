import { getGifs } from "../../helpers/getGifs"

describe('helper getGifs', () => {
    
    
    test('should get 10 items', async () => {
        
        const gifs = await getGifs("Something")
        expect(gifs.length).toBe(10)
    })
    
    test('should get 0 with a void string', async () => {
        
        const gifs = await getGifs("")
        expect(gifs.length).toBe(0)
        
    })
    
    
    
    
})
