# MVC Pattern - Cab Booking System

## Model-View-Controller (MVC)

The Cab Booking System follows the Model-View-Controller (MVC) architecture to separate the application into different layers.

## Model Layer

Responsibilities:
- Stores application data.
- Connects to MongoDB using Mongoose.
- Performs CRUD operations.
- Defines database schemas.

Examples:
- User Model
- Driver Model
- Ride Model
- Vehicle Model
- Payment Model

---

## Controller Layer

Responsibilities:
- Receives client requests.
- Validates request data.
- Executes business logic.
- Calls model functions.
- Sends responses to the client.

Examples:
- User Controller
- Ride Controller
- Driver Controller
- Payment Controller

---

## View Layer (Routes)

Responsibilities:
- Defines API routes.
- Receives HTTP requests.
- Calls controller methods.

Examples:
- GET /rides
- POST /login
- POST /book
- PUT /ride/:id
- DELETE /ride/:id

---

## Advantages of MVC

- Separation of Concerns
- Easy Maintenance
- Scalability
- Code Reusability
- Better Testing
- Team Collaboration

---

## Conclusion

Using the MVC architecture makes the Cab Booking System clean, modular, maintainable, and easy to scale for future development.