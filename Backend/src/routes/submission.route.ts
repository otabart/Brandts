import express from 'express';
import UserController from '../controllers/submission.controller';
const { createSubmission, disqualifyCreator } = new UserController();
const router = express.Router();

//create submission
router.post("/", createSubmission);

//disqualify a creator
router.delete("/:creatorId", disqualifyCreator);

export default router;