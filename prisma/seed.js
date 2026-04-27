import 'dotenv/config';
import prisma from '../src/config/db.js';
console.log('Clearing database and resetting IDs...');
await prisma.$queryRaw`TRUNCATE users, trucks, orders, routes RESTART IDENTITY CASCADE;`;
console.log('Database cleared!');


const users = [
    { email: 'admin@email.com', password: 'hashed_password_1', role: 'ADMIN', address: '123 HQ Way' },
    { email: 'driver1@email.com', password: 'hashed_password_2', role: 'EMPLOYEE', address: '456 Road St' },
    { email: 'client1@email.com', password: 'hashed_password_3', role: 'CLIENT', address: '789 Customer Ln' },
];

await prisma.user.createMany({
data: users,
skipDuplicates: true,
});

const trucks = [
    { name: 'Truck1', licenseNumber: 'TRK-001', userID: 2 },
    { name: 'Truck2', licenseNumber: 'TRK-002', userID: 1 },
];

await prisma.truck.createMany({
data: trucks,
skipDuplicates: true,
});

const orders = [
    { name: 'Order #101', price: 299.99, shippingAddress: '789 Customer Ln', userID: 3, truckID: 1 },
    { name: 'Order #102', price: 45.50, shippingAddress: '789 Customer Ln', userID: 3, truckID: 2 },
];

await prisma.order.createMany({
data: orders,
skipDuplicates: true,
});

const routes = [
    { name: 'North Route', street: 'Highway 101', userID: 1 },
    { name: 'South Route', street: 'Interstate 95', userID: 2 },
];

await prisma.route.createMany({
data: routes,
skipDuplicates: true,
});


console.log('Database seeded with 10 posts and 16 comments!');
await prisma.$disconnect();


