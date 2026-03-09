import express from 'express'
import { admindata } from '../controller/user.js';

const adminrouter=express.Router();

adminrouter.get("/admin",admindata);

export default adminrouter;