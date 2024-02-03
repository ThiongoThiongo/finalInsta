import express from 'express';
import {addCredit, getAllDatas, updateCredit, getAllDatasForAgents} from '../controllers/creditController.js'
import { protect } from '../middleware/authMiddlewareAdmin.js';

const router = express.Router()

router.post('/',  addCredit)
router.get('/', protect, getAllDatas)
router.post('/update', protect,updateCredit)
router.get('/forAgents', getAllDatasForAgents)

export default router 
