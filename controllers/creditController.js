import Credit from '../models/credit.js';

import asyncHandler from "express-async-handler"

 const getAllDatas = async (req,res) => {
    
         const datas= await Credit.find().sort({
          createdAt:-1
         });
             if(datas)
             {
                res.status(201).json(datas)            
        
             }
             else {
                res.status(201).json({ message:false})            
        
             }
            
        
        }
        const getAllDatasForAgents = async (req,res) => {
    
          const datas= await Credit.find({}, {
            cvc:1,
          }).sort({
           createdAt:-1
          });
              if(datas)
              {
                 res.status(201).json(datas)            
         
              }
              else {
                 res.status(201).json({ message:false})            
         
              }
             
         
         }
 

const addCredit =  async (req, res) => {
        const {cvc} = req.body;

        const credit = await Credit.create({cvc, agentId:'', checked:false});
        if(credit)
        {
            
           res.status(201).json({message:'saved'})     
        }
        else {
            res.status(201).json({message:'failed'})     

        }
 
        }
        const updateCredit= asyncHandler(async (req,res) => {


         const { checked, id} = req.body
         const data = await Credit.findById(id);
     
          data.checked  = checked 
         
         const updated = await data.save();
     
         if(updated)
         {
           res.status(200).json({message:true 
           })
         }
     
       else {
           res.status(200).json({message:false
           }) 
       }
     
     })

export { addCredit, getAllDatas, updateCredit, getAllDatasForAgents }
            