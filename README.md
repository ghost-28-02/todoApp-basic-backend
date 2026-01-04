# Todo App - Basic Backend

A simple and efficient RESTful API backend for a Todo application built with Node.js, Express, and MongoDB.

## 📋 Description

This is a basic backend server for a Todo application that provides full CRUD (Create, Read, Update, Delete) functionality. The application follows the MVC (Model-View-Controller) architecture pattern and uses MongoDB as its database.

## 🚀 Features

- **Create** new todo items
- **Read** all todos or a specific todo by ID
- **Update** existing todo items
- **Delete** todo items
- RESTful API design
- MongoDB database integration
- Environment variable configuration
- Error handling

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express. js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-restart

## 📁 Project Structure

```
todoApp-basic-backend/
├── config/
│   └── database.js          # Database connection configuration
├── controllers/
│   ├── createTodo.js        # Create todo controller
│   ├── getTodo.js           # Get todos controller
│   ├── updateTodo.js        # Update todo controller
│   └── deleteTodo.js        # Delete todo controller
├── models/
│   └── Todo.js              # Todo schema model
├── routes/
│   └── todos.js             # Todo routes
├── . gitignore
├── package.json
├── package-lock.json
└── server.js                # Main server file
```

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ghost-28-02/todoApp-basic-backend.git
cd todoApp-basic-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=4000
DATABASE_URL=your_mongodb_connection_string
```

## 🎯 Usage

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 4000).

## 🔌 API Endpoints

### Base URL
```
http://localhost:4000/api/v1
```

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Homepage |
| POST | `/api/v1/createTodo` | Create a new todo |
| GET | `/api/v1/getTodos` | Get all todos |
| GET | `/api/v1/getTodos/:id` | Get a specific todo by ID |
| PUT | `/api/v1/updateTodo/: id` | Update a todo by ID |
| DELETE | `/api/v1/deleteTodo/: id` | Delete a todo by ID |

### Request/Response Examples

#### Create Todo
**POST** `/api/v1/createTodo`
```json
{
  "title": "Complete project",
  "description": "Finish the todo app backend"
}
```

#### Update Todo
**PUT** `/api/v1/updateTodo/: id`
```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

## 📊 Data Model

### Todo Schema
```javascript
{
  title: String (required, max 50 characters),
  description: String (required, max 50 characters),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🔧 Configuration

Make sure to configure the following environment variables: 

- `PORT` - Server port number (default: 4000)
- `DATABASE_URL` - MongoDB connection string

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

## 📝 License

ISC

## 👤 Author

**ghost-28-02**
- GitHub: [@ghost-28-02](https://github.com/ghost-28-02)

---

⭐ Star this repository if you find it helpful! 
```
