import bcrypt from 'bcrypt';
import 'dotenv/config';
import prisma from '../src/config/db.js';
console.log('Clearing database and resetting IDs...');
await prisma.$queryRaw`TRUNCATE users, trucks, orders, routes RESTART IDENTITY CASCADE;`;
console.log('Database cleared!');


const usersData = [
    { id: 1, email: 'admin@email.com', password: 'password1', role: 'ADMIN', address: '123 HQ Way' },
    { id: 2, email: 'driver1@email.com', password: 'password2', role: 'EMPLOYEE', address: '456 Road St' },
    { id: 3, email: 'client1@email.com', password: 'password3', role: 'CLIENT', address: '789 Customer Ln' },
];

const users = [];

  for (const userData of usersData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        role: userData.role || 'USER',
        address: userData.address
      },
    });

    users.push(user);
  }

await prisma.user.createMany({
data: users,
skipDuplicates: true,
});

const trucks = [
    { id: 1, name: 'Truck1', licenseNumber: 'TRK-001', userID: 2 },
    { id: 2, name: 'Truck2', licenseNumber: 'TRK-002', userID: 1 },
];

await prisma.truck.createMany({
data: trucks,
skipDuplicates: true,
});

const orders = [
    { id: 1, name: 'Order #101', price: 299.99, shippingAddress: '789 Customer Ln', userID: 3, truckID: 1 },
    { id: 2, name: 'Order #102', price: 45.50, shippingAddress: '789 Customer Ln', userID: 3, truckID: 2 },
];

await prisma.order.createMany({
data: orders,
skipDuplicates: true,
});

const routes = [
    { id: 1, name: 'North Route', street: 'Highway 101', userID: 1 },
    { id: 2, name: 'South Route', street: 'Interstate 95', userID: 2 },
];

await prisma.route.createMany({
data: routes,
skipDuplicates: true,
});


console.log('Database seeded');
await prisma.$disconnect();


