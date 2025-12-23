import express from "express";
import {
  createMessage,
  showMessageDetails,
  showMessageForm,
  getAndShowMessageList,
} from "../controllers/messagesController.js";

const router = express.Router();

router.get("/", getAndShowMessageList);
router.get("/new", showMessageForm);
router.get("/message/:id", showMessageDetails);
router.post("/new", createMessage);

export default router;
