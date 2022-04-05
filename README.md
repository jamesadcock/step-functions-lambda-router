# step-functions-lambda-router

## Motivation

AWS Step Functions are a great tool for orchestrating multi-step serverless workflows. They enable us to visualise and break down complex workflows into multiple lambda functions. This however can come with a performance penalty, especially on cold starts. This package provides a simple router that enables you to use one lambda per Step Function which avoid multiple cold starts, whilst still allowing you to break up your workflow into different modules.

## Installation

**NPM**
```
npm i step-functions-lambda-router
```
**Yarn**
```
yarn add step-functions-lambda-router
```

## Use in Serverless framework project
import router and export
```
import { router } from 'step-functions-lambda-router'

export const handler =.router  
```
reference in serverless.yml

```
functions:
  myStepFunctionRouter:
    handler: path-to-handler.handler
```
create module
```
// location src/my-module.ts

export  default ({name, age}) => {
return  `My name is ${name}`
}
```



use in Step Function
```
{
   "MyState":{
      "Type":"Task",
      "Resource":"arn:aws:states:::lambda:invoke",
      "Parameters":{
         "Payload":{
            "route.$":"src/my-module",
            "props":{
               "name":"James"
            }
         },
         "FunctionName":"arn:aws:lambda:eu-west-1:0000000:myStepFunctionRoute"
      },
      "end":"true"
   }
}
 ```

