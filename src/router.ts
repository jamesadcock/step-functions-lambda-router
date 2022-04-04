
import * as path from 'path' 
import * as appPath from 'app-root-path'

export const router = async (input: RouterInput) => {

    const { route } = input
    const functionName = input.route.split('.').pop()
    const newPath = route.substring(0, route.lastIndexOf(".") )

    console.log(newPath)
  
    const modulePath = path.join(appPath.toString() , newPath)
    const  { default: handler}   = await import(modulePath)
    return handler()

}

