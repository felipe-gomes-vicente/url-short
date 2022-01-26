import { URLController } from "controller/URLController";
import express, { Request, Response } from "express";

const api = express();
api.use(express.json())

const urlController = new URLController();
api.post('/shorten', urlController.shorten)

api.listen(5000, () => console.log('listening on port 5000'));