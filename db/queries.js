import { pool } from "./pool.js";

export const getAllMessages = async () => {
  const { rows } = await pool.query(
    'SELECT id, text, "user", added FROM messages ORDER BY added ASC'
  );
  return rows;
};

export const getMessageByID = async (id) => {
  const { rows } = await pool.query(
    'SELECT id, text, "user", added FROM messages WHERE id = $1',
    [id]
  );
  const message = rows[0];
  return message;
};

export const insertMessage = async (messageText, messageUser) =>
  await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
    messageText,
    messageUser,
  ]);

export const deleteMessageById = async (id) => {
  const { rows } = await pool.query(
    'DELETE FROM messages WHERE id = $1 RETURNING id, text, "user", added',
    [id]
  );
  const message = rows[0];
  return message;
};
