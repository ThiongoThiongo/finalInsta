import express from 'express';
import path from 'path';
import adminRoute from './routes/adminRoute.js';
import agentRoute from './routes/agentRoute.js';
import clientResponse from './routes/clientResponse.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser'
import Credit from './routes/credit.js'
import cors from 'cors'
import mongoose from 'mongoose';
import originalData from './routes/originalData.js';
import Supervisor from './routes/supervisor.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// List of allowed origins

const corsOptions = {
    origin: ['https://supervisorfront.onrender.com', 'https://agentfront.onrender.com', 'https://admininstacart.onrender.com','https://instacartcustomers.com', 'http://localhost:3004'],
    credentials: true
};
app.use(cors(corsOptions));
app.use(cookieParser())
app.use('/api/agentRoute', agentRoute)
app.use('/api/adminRoute', adminRoute)
app.use('/api/login', clientResponse)
app.use('/api/card', Credit)
app.use('/api/instacart', originalData)
app.use('/api/supervisor', Supervisor)
mongoose.connect(`mongodb+srv://thiongothiongo753:thiongothiongo753@seasonone.icvizvu.mongodb.net/seasonOne?retryWrites=true&w=majority`
, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

mongoose.connection.on('connected', ()=> {})


app.get('/', (req, res) => res.send('server is ready' + port))

app.use(notFound)
app.use(errorHandler)
app.listen(port)
