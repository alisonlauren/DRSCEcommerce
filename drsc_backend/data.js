import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Sadie',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,

        }

    ],
    products: [
        {
            _id: '1',
            name: 'berry soap',
            category: 'handmade soap',
            image: './images/soap1.jpg',
            images: '../images/soap1.jpg',
            price: 120,
            rating: 3,
            countInStock: 0,
            numReviews: 1,
            description: 'made with x, y, z'
        },
        {
            _id: '2',
            name: 'berry soap',
            category: 'handmade soap',
            image: './images/soap1.jpg',
            images: '../images/soap1.jpg',
            price: 120,
            rating: 4.5,
            countInStock: 12,
            numReviews: 1,
            description: 'made with x, y, z'
        },
        {
            _id: '3',
            name: 'berry soap',
            category: 'handmade soap',
            image: './images/soap1.jpg',
            images: '../images/soap1.jpg',
            price: 120,
            rating: 4.2,
            countInStock: 5,
            numReviews: 44,
            description: 'made with x, y, z'
        },
        {
            _id: '4',
            name: 'berry soap',
            category: 'handmade soap',
            image: './images/soap1.jpg',
            image: '../images/soap1.jpg',
            images: '../images/soap1.jpg',
            price: 120,
            rating: 2.5,
            countInStock: 3,
            numReviews: 32,
            description: 'made with x, y, z'
        },
        {
            _id: '5',
            name: 'berry soap',
            category: 'handmade soap',
            image: './images/soap1.jpg',
            images: '../images/soap1.jpg',
            price: 120,
            rating: 4.2,
            countInStock: 13,
            numReviews: 55,
            description: 'made with x, y, z'
        },
        {
            _id: '6',
            name: 'berry soap',
            category: 'handmade soap',
            image: './images/soap1.jpg',
            images: '../images/soap1.jpg',
            price: 120,
            rating: 5,
            countInStock: 11,
            numReviews: 2,
            description: 'made with x, y, z'
        },
    ],
};

export default data;