# Annotation Backend - [ Project Link : https://annotation-frontend-gilt.vercel.app ]

This is the backend service for the Annotation Canvas application.  
It provides authentication and CRUD APIs for managing annotations.

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Railway (Deployment)

## 🔐 Authentication
Authentication is handled using **JWT tokens**.

- Token is issued on login
- Token must be sent in `Authorization` header:

## 📌 API Endpoints

### Auth
| POST | `/auth/login`   | Login user |

### Annotations (Protected)
| POST | `/annotations` | Create annotation |
| GET | `/annotations` | Get all user annotations |
| PUT | `/annotations/:id` | Update annotation (position, size, name) |
| DELETE | `/annotations/:id` | Delete annotation |
