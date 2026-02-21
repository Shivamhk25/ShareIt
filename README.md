# ShareIt 🚀

![ShareIt](https://i.ibb.co/7CmVbCW/image.png)

> A modern, full-stack social media application for sharing life's memorable moments with the world.

## 📖 Introduction

**ShareIt** is a beautifully designed Full Stack MERN Application that enables users to share, discover, and interact with memorable moments from their lives and others. Built with cutting-edge technologies including React, Node.js, Express, and MongoDB, featuring a stunning glassmorphism UI design.

## ✨ Features

- 🔐 **Secure Authentication** - Email/Password and Google OAuth integration
- 📝 **Post Management** - Create, edit, and delete your moments
- ❤️ **Engagement** - Like and comment on posts
- 🔍 **Smart Search** - Search posts by title or tags
- 👤 **Creator Profiles** - Filter posts by creator
- 📄 **Pagination** - Smooth browsing experience with paginated content
- 🎨 **Modern UI** - Responsive glassmorphism design with smooth animations
- 🌈 **Beautiful Gradients** - Eye-catching purple gradient theme

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Redux** - State management
- **Material-UI** - Component library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library
- **JWT** - Authentication tokens
- **BCrypt** - Password hashing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (Atlas account or local installation)
- [Git](https://git-scm.com/)
- npm or yarn package manager

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/shareit.git
cd shareit
```

### 2️⃣ Server Setup

#### Navigate to server directory
```bash
cd server
```

#### Install dependencies
```bash
npm install
```

#### Configure Environment Variables

Create a `.env` file in the server directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/shareit?retryWrites=true&w=majority

# JWT Secret Key (Use a strong random string)
JWT_SECRET=your_super_secure_jwt_secret_key_here

# Server Port
PORT=5000
```

#### Generate a Secure JWT Secret

Run this command to generate a strong secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the output and paste it as your `JWT_SECRET` in the `.env` file.

#### Start the Server
```bash
npm start
```

✅ Server should now be running on `http://localhost:5000`

### 3️⃣ Client Setup

#### Open a new terminal and navigate to client directory
```bash
cd client
```

#### Install dependencies
```bash
npm install
```

#### Configure Google OAuth (Optional)

To enable Google Sign-In:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:3000` to Authorized JavaScript origins
6. Copy your Client ID
7. Update the Client ID in `client/src/components/Auth/Auth.js` (line 72)

```javascript
clientId="YOUR_GOOGLE_CLIENT_ID_HERE"
```

#### Start the Client
```bash
npm start
```

✅ Client should automatically open at `http://localhost:3000`

## 🗄️ MongoDB Setup Guide

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. **Create Account**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Start Free" and create an account

2. **Create Cluster**
   - Choose "Shared Clusters" (Free tier)
   - Select your preferred cloud provider and region
   - Click "Create Cluster"

3. **Configure Database Access**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Create a username and strong password
   - Set privileges to "Read and write to any database"

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add your specific IP address

5. **Get Connection String**
   - Go to "Clusters" and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `shareit`
   - Add this to your `.env` file as `MONGODB_URI`

### Option 2: Local MongoDB

1. **Install MongoDB**
   ```bash
   # macOS (using Homebrew)
   brew tap mongodb/brew
   brew install mongodb-community

   # Windows - Download from mongodb.com
   # Linux - Follow official documentation
   ```

2. **Start MongoDB Service**
   ```bash
   # macOS
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod

   # Windows
   # MongoDB runs as a service automatically
   ```

3. **Configure .env**
   ```env
   MONGODB_URI=mongodb://localhost:27017/shareit
   ```

## 🔐 Security Best Practices

⚠️ **Important Security Notes:**

1. **Never commit `.env` files** - They are already in `.gitignore`
2. **Use strong JWT secrets** - Minimum 64 characters, randomly generated
3. **Rotate secrets regularly** - Change JWT_SECRET periodically in production
4. **Secure MongoDB** - Use strong passwords and IP whitelisting
5. **HTTPS in Production** - Always use HTTPS for production deployments

## 📁 Project Structure

```
ShareIt/
├── client/                 # React Frontend
│   ├── public/            # Static files
│   └── src/
│       ├── actions/       # Redux actions
│       ├── api/           # API calls
│       ├── components/    # React components
│       ├── constants/     # Action types
│       ├── reducers/      # Redux reducers
│       └── styles/        # CSS styles
│
└── server/                # Node.js Backend
    ├── controllers/       # Route controllers
    ├── middleware/        # Custom middleware
    ├── models/           # Mongoose models
    ├── routes/           # API routes
    └── index.js          # Server entry point
```

## 🌐 Environment Variables

### Server Variables (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/shareit` |
| `JWT_SECRET` | Secret key for JWT signing | `your_64_character_random_string` |
| `PORT` | Server port number | `5000` |

## 🧪 Testing the Application

1. **Start both server and client**
2. **Open browser** to `http://localhost:3000`
3. **Sign up** with email/password or Google OAuth
4. **Create a post** by filling out the form
5. **Interact** with posts (like, comment, edit, delete)
6. **Search** for posts using the search bar
7. **Test pagination** by creating multiple posts

## 🐛 Troubleshooting

### Server won't start
- ✅ Check if MongoDB is running
- ✅ Verify `.env` file exists with correct variables
- ✅ Ensure port 5000 is not in use
- ✅ Run `npm install` in server directory

### Client won't connect to server
- ✅ Verify server is running on port 5000
- ✅ Check proxy setting in `client/package.json`
- ✅ Clear browser cache and reload

### MongoDB connection error
- ✅ Verify MongoDB URI is correct
- ✅ Check database user credentials
- ✅ Ensure IP address is whitelisted (Atlas)
- ✅ Verify MongoDB service is running (local)

### Google OAuth not working
- ✅ Check Client ID is correctly set
- ✅ Verify `http://localhost:3000` is in authorized origins
- ✅ Clear browser cache and cookies

## 📝 Available Scripts

### Server
```bash
npm start          # Start server with nodemon
```

### Client
```bash
npm start          # Start development server
npm build          # Build for production
npm test           # Run tests
```

## 🚢 Deployment

### Backend (Heroku Example)

```bash
cd server
heroku create your-app-name
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
git push heroku main
```

### Frontend (Netlify/Vercel)

1. Build the client: `npm run build`
2. Deploy the `build` folder to Netlify or Vercel
3. Set environment variables if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@Shivamhk25](https://github.com/Shivamhk25)
- LinkedIn: [Shivam Chauhan](https://www.linkedin.com/in/shivam-chauhan-hk/)

## 🙏 Acknowledgments

- Material-UI for the component library
- MongoDB for the database
- The React and Node.js communities

