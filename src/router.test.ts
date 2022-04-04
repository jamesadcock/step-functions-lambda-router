import { router } from "./router"

describe('router', () => {
    it('should invoke the function that route param is referencing', async () => {
        const result = await router({route: 'tests/test-function.handler'})
        expect(result).toEqual({succeeded: true})
    })
})