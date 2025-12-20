import express from "express";

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.get("/message/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!messages[id]) {
    return res.status.send("Message not found!");
  }
  const message = messages[id];
  res.render("messageDetails", { title: "Message Details", message });
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

export default router;
