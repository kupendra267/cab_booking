# ER Diagram - Cab Booking System

## Entities
- User
- Driver
- Ride
- Vehicle
- Payment

## Relationships

### User → Ride
- One user can book multiple rides.
- Each ride belongs to one user.

### Ride → Driver
- One driver can handle multiple rides.
- Each ride is assigned to one driver.

### Driver → Vehicle
- One driver is assigned one vehicle.

### User → Payment
- One user can make multiple payments.
- Each payment belongs to one user.

## Description
This ER diagram represents the database structure of the Cab Booking System. It shows the entities and the relationships between users, drivers, rides, vehicles, and payments.