import { router } from "./router"

describe('router', () => {
    it('should invoke the default export that route param is referencing', async () => {
        const result = await router({route: 'tests/no-params'})
        expect(result).toEqual({succeeded: true})
    })

    it('should invoke the default export that route param is referencing with the correct props', async () => {
        const result = await router({route: 'tests/with-params', props: { name: 'James', age: 41, }})
        expect(result).toEqual('My name is James I am 41 years old')
    })
})