# Odin Mini Messageboard

A simple Node.js project using **Express** and **EJS** to create a mini messageboard. Users can view messages, add new messages, and view message details.

## Features

- Display all messages on the homepage (`/`)
- Add a new message via a form (`/new`)
- View message details (`/message/:id`)
- Simple in-memory storage (messages are not persisted on server restart)

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- HTML/CSS (basic structure)
- ES Modules (`import/export` syntax)

## Installation

1. Clone the repository:

```bash
git clone git@github.com:IrtazaAmjad0412/odin-mini-message-board.git
cd odin-message-board
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node js/app.js
```

## Usage

- Visit / to see all messages.
- Click "Add a new message" to submit a new message.
- Click "Open" next to any message to view its details.
