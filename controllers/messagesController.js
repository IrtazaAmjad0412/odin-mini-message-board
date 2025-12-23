import {
  getAllMessages,
  getMessageByID,
  insertMessage,
  deleteMessageById,
} from "../db/queries.js";

export const getAndShowMessageList = async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.render("messageList", { title: "Mini Messageboard", messages: messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const showMessageForm = (req, res) => {
  try {
    res.render("messageForm", { title: "New Message" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const showMessageDetails = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const message = await getMessageByID(id);
    if (!message) {
      return res.status(404).send("Message not found!");
    }
    res.render("messageDetails", { title: "Message Details", message });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const createMessage = async (req, res) => {
  try {
    const { messageUser, messageText } = req.body;
    if (!messageUser || !messageText) {
      return res.status(400).send("Both user and message are required");
    }
    await insertMessage(messageText, messageUser);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deletedMessage = await deleteMessageById(id);
    if (!deletedMessage) {
      return res.status(404).send("Message not found!");
    }
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
