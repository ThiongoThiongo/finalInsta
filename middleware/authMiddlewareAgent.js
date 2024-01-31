import jwt from 'jsonwebtoken'

import asyncHandler from 'express-async-handler'

import Agent from '../models/agentModel.js'

const protectAgent = asyncHandler(async (req, res, next) => {
    let token ; 

    token =req.headers['token'];

    if(token)
    {
       try {
           const decoded = jwt.verify(token, process.env.JWT_SECRET)
           req.user = await Agent.findById(decoded.userId).select('-password')
           next()

        }    
       catch{
        res.status(401)
        throw new Error('Wrong token ')
       }
    } else {
        res.status(401)
        throw new Error('Not authorized, no token ')
    }
})


export  { protectAgent }