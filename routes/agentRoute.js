 import express from 'express';
 import {authAgent, registerAgent, logoutAgent, getAgentProfile, updateAgentProfile, deleteAgentProfile , getAllAgents, sendEmail} from '../controllers/agentController.js'

 import {protect } from '../middleware/authMiddlewareAdmin.js';
import  {protectAgent} from '../middleware/authMiddlewareAgent.js'
const router = express.Router()

router.post('/', registerAgent)
router.get('/', protect,  getAllAgents)
router.post('/auth', authAgent)
router.post('/email', sendEmail)

router.post('/logout', logoutAgent)
router.post('/delete', protect, deleteAgentProfile)

router.get('/profile', protect, getAgentProfile)
router.post('/profile', protect, updateAgentProfile)
router.post('/delete', protect, deleteAgentProfile)

export default router 
