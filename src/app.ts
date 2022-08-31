import cors from 'cors';
import dotenv from 'dotenv';
import express, {json} from 'express';
import 'express-async-err';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());