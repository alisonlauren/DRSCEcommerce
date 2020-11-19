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
            name: 'berry soap1',
            image: '../images/soap2.jpg',
            brand: 'SoapBrand',
            category: 'handmade soap',
            description: 'made with x, y, z',
            price: 120,
            countInStock: 0,
            rating: 3,
            numReviews: 1,
        },
        {
            name: 'berry soap2',
            image: '../images/soap2.jpg',
            brand: 'SoapBrand',
            category: 'handmade soap',
            description: 'made with x, y, z',
            price: 125,
            countInStock: 5,
            rating: 3,
            numReviews: 1,
        },
        {
            name: 'berry soap3',
            image: '../images/soap3.jpg',
            brand: 'SoapBrand',
            category: 'handmade soap',
            description: 'made with x, y, z',
            price: 13,
            countInStock: 10,
            rating: 4,
            numReviews: 1,
            
            
        },
        {

            name: 'berry soap4',
            image: '../images/soap4.jpg',
            brand: 'SoapBrand',
            category: 'handmade soap',
            description: 'made with x, y, z',
            price: 12,
            countInStock: 11,
            rating: 5,
            numReviews: 6,
        },
        {
            name: 'berry soap5',
            image: '../images/soap5.jpg',
            brand: 'SoapBrand',
            category: 'handmade soap',
            description: 'made with x, y, z',
            price: 12,
            countInStock: 5,
            rating: 6,
            numReviews: 1,
        },
        {

            name: 'berry soap6',
            image: '../images/soap6.jpg',
            brand: 'SoapBrand',
            category: 'handmade soap',
            description: 'made with x, y, z',
            price: 15,
            countInStock: 5,
            rating: 1,
            numReviews: 1,
        },
    ]
}


export default data;