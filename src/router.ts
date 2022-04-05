
import * as path from 'path' 
import * as appPath from 'app-root-path'

export const router = async (input: RouterInput) => {
    const { route } = input
    const modulePath = path.join(appPath.toString() , route)
    const  { default: handler} = await import(modulePath)
    return handler()

}

