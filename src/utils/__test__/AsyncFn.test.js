import { fetchData } from '../AsyncFn'

describe('async fn test', () => {
    test('if fetchData resolves', async () => {
        try {
            const data = await fetchData(true)
            expect(data).toBe('you are loged in')
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e).toMatch('error')
        }
    })

    test('if fetchData rejects', async () => {
        try {
            const data = await fetchData(false)
            expect(data).toBe('error')
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e).toMatch('error')
        }
    })
})

describe('mock async fn test', () => {
    test('if fetchData resolves', () => {
        const resolved = jest.fn().mockImplementation(() => Promise.resolve('resolved'))
 
        return resolved().then(data => expect(data).toEqual('resolved'))
    })

    test('if fetchData rejects', () => {
        const rejected = jest.fn().mockImplementation(() => Promise.reject('reject'))
 
        return rejected().catch(data => expect(data).toEqual('reject'))
    })
})