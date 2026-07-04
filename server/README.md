# Vaibhava Wealth Backend Setup

This backend server handles saving consultation requests to MySQL database.

## Prerequisites

1. **MySQL Server** - Install MySQL Community Server v5.7 or higher
   - [Download MySQL](https://dev.mysql.com/downloads/mysql/)
   - Or install via package manager: `brew install mysql` (macOS), `apt install mysql-server` (Linux), `choco install mysql` (Windows)

2. **Node.js** - v16 or higher

## Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Step 1: Start MySQL Server

**On Windows (with MySQL Installer):**
```bash
net start MySQL80
```

**On macOS (with Homebrew):**
```bash
brew services start mysql
```

**On Linux:**
```bash
sudo systemctl start mysql
```

### Step 2: Create Database & User

Connect to MySQL as root:
```bash
mysql -u root -p
```

Then run:
```sql
CREATE DATABASE vaibhava_wealth;
CREATE USER 'vaibhava_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON vaibhava_wealth.* TO 'vaibhava_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### Step 3: Update .env Configuration

Edit `server/.env` file with your MySQL credentials:

```
PORT=5000
DB_HOST=localhost
DB_USER=vaibhava_user
DB_PASSWORD=secure_password
DB_NAME=vaibhava_wealth
```

**Using root user (default):**
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=vaibhava_wealth
```

## Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST `/api/consultations`
Save a new consultation request

**Request body:**
```json
{
  "name": "John Doe",
  "phone": "+91 9952960792",
  "email": "john@example.com",
  "city": "Chennai",
  "goal": "Retirement Planning",
  "message": "Looking to plan for retirement"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Consultation request saved successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    ...
  }
}
```

### GET `/api/consultations`
Retrieve all consultation requests (for admin dashboard)

## Troubleshooting

**Error: "Access denied for user 'root'@'localhost'"**
- Check your MySQL password in `.env`
- Reset MySQL root password if needed

**Error: "Can't connect to MySQL server"**
- Make sure MySQL service is running
- Check if MySQL is listening on port 3306

**Error: "Unknown database"**
- Create the database as shown in Step 2

## Testing

1. Check if server is running:
   ```
   curl http://localhost:5000/health
   ```

2. Test form submission through the frontend contact form

## Database Schema

The `consultations` table includes:
- `id` - Auto-increment primary key
- `name` - User's full name
- `phone` - Contact phone number
- `email` - Email address
- `city` - City
- `goal` - Investment goal
- `message` - Additional message
- `created_at` - Record creation timestamp
- `updated_at` - Last update timestamp
