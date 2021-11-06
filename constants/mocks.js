const filter = [
    {
    id: 1,
    name: "Popularity",
    description: 'No Settings'
},
{
    id: 2,
    name: "Brands",
    brands: ['Apple', 'Samsung', 'Huawei', 'B&o' ],
    
},
{
    id: 3,
    name: "Price",
    range: '130-1200'
},
{
    id: 4,
    name: "Color",
    colors: ['#AEB8DF', '#33427D', '#FF3D00', '#000000', '#00C569', '#C92636'],
    
},
{
    id: 5,
    name: "Ratings",
    tags: ['3', '4', '4'],
    
},
{
    id: 6,
    name: "Shipped From",
    description: 'No Settings',
    
},
];

const product = {
        id: 1,
        name: "Nike Dri-FIT Long Sleeve",
        price: '1500',
        description: "Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.",
        image: require('../assets/images/Image-18.png'),
        filtered: {
            size: 'XL',
            color: require('../assets/images/Color.png')
        },
        reviews: [
            {
                user_id: 1,
                name: 'Samuel Smith',
                review: 'Wonderful jean, perfect gift for my girl for our anniversary!',
                image: require("../assets/images/Avatar-2.png"),
                ratings: 5
            },
            {
                user_id: 2,
                name: 'Beth Aida',
                review: 'Wonderful jean, perfect gift for my girl for our anniversary!',
                image: require("../assets/images/Avatar-1.png"),
                ratings: 4
            },
            {
                user_id: 3,
                name: 'Samuel Smith',
                review: 'Wonderful jean, perfect gift for my girl for our anniversary!',
                image: require("../assets/images/Avatar-2.png"),
                ratings: 5
            },
            {
                user_id: 4,
                name: 'Beth Aida',
                review: 'Wonderful jean, perfect gift for my girl for our anniversary!',
                image: require("../assets/images/Avatar-1.png"),
                ratings: 4
            },
             {
                user_id: 5,
                name: 'Samuel Smith',
                review: 'Wonderful jean, perfect gift for my girl for our anniversary!',
                image: require("../assets/images/Avatar-2.png"),
                ratings: 5
            },
            {
                user_id: 6,
                name: 'Beth Aida',
                review: 'Wonderful jean, perfect gift for my girl for our anniversary!',
                image: require("../assets/images/Avatar-1.png"),
                ratings: 4
            },
        ]
    }

const checkout = {
  steps: [ {
    id: 1,
    name: 'Delivery',
    categories: [
        { 
            name: 'Stardard Delivery',
            description: 'Order will be delivered between 3 - 5 business days',

        }, 
        {
            name: 'Next Day Delivery',
            description: 'Place your order before 6pm and your items will be delivered the next day',

        }, 
        {
            name: 'Norminated Delivery',
            description: 'Pick a particular date from the calendar and order will be delivered on selected date',
        }
    ],

   },
   {
    id: 2,
    name: 'Address',
    description: 'Billing address is the same as delivery address',
    address: [
        {
            street1: '21, Alex Davidson Avenue',
            street2: 'Opposite Omegatron, Vicent Quarters',
            city: 'Victoria Island',
            state: 'Lagos State',
            country: 'Nigeria',
        }
    ]

   },
   {
    id: 3,
    name: 'Payment',
    description: 'Save this card details',
    image: require('../assets/images/Icon_MasterCard.png'), 
    card_name: 'David Spade',
    card_no: '4560   5674   3224   4543',
    expiry_date: '09 / 18',
    CVV: '667',
    methods: [
        require('../assets/images/icons8_PayPal_1.png'),
        require('../assets/images/Icon_Payment.png'),
        require('../assets/images/Saved-Card.png'),
    ],
   

   },],
  summary: {
        products: [
            {
                id: 1,
                name: 'Tag Heuer Wristwatch',
                price: '1100',
                image: require('../assets/images/Image-29.png'),
                amount: 1,
            },
            {
                id: 2,
                name: 'BeoPlay Speaker',
                price: '450',
                image: require('../assets/images/Image-13.png'),
                amount: 1,
            },
            {
                id: 3,
                name: 'Electric Kettle',
                price: '95',
                image: require('../assets/images/Image-23.png'),
                amount: 1,
            },
            {
                id: 4,
                name: 'Bang & Olufsen Case',
                price: '120',
                image: require('../assets/images/Image-22.png'),
                amount: 1,
            },
            {
                id: 5,
                name: 'Smart Home Speaker',
                price: '120',
                image: require('../assets/images/Image-28.png'),
                amount: 1,
            },
            {
                id: 6,
                name: 'Tag Heuer Wristwatch',
                price: '1100',
                image: require('../assets/images/Image-29.png'),
                amount: 1,
            },
            {
                id: 7,
                name: 'BeoPlay Speaker',
                price: '450',
                image: require('../assets/images/Image-13.png'),
                amount: 1,
            },
            {
                id: 8,
                name: 'Electric Kettle',
                price: '95',
                image: require('../assets/images/Image-23.png'),
                amount: 1,
            },
        ],
        address: '21, Alex Davidson Avenue, Opposite Omegatron, Vicent Smith Quarters, Victoria Island, Lagos, Nigeria',
        card: {
            card_no: '****  ****  ****  4543',
            card_type: 'Master Card'
        }
        
       }
  
    }

const Explore = {
    bestSelling: {
        products: [
            {
                name: 'BeoPlay Speaker', 
                id: 1,
                image: require('../assets/images/Image-1.png'),
                description: 'Bang and Olufsen',
                price: 755
            },
            {
                name: 'Leather Wristwatch',
                id: 2, 
                image: require('../assets/images/Image.png'),
                description: 'Tag Heuer',
                price: 450
            }
        ]
    },
    featuredBrands: [
        {   id: 1,
            name: 'B&o', 
            products: 5693, 
            image: require('../assets/images/Icon_Bo.png')
        },
        {   id: 2,
            name: 'Beats', 
            products: 1124, 
            image: require('../assets/images/Icon_Beats.png')
        },
       
    ],
    recommended: [
        {
            id: 1,
            name: 'Wireless Remote',
            image: require('../assets/images/Image-3.png'),
            manifacturer: 'Tesla Inc',
            price: '790'
        },
        {
            id: 2,
            name: 'Airpods',
            image: require('../assets/images/Image-2.png'),
            manifacturer: 'Apple Inc',
            price: '120'
        }
    ]
}

const Account = {
    settings: {
        image: require('../assets/images/Avatar.png'),
        name: 'David Spade',
        email: 'iamdavid@gmail.com'
    },
    links: [
        {
            image: require('../assets/images/Icon_Edit-Profile.png'),
            name: 'Edit Profile',
        },
        {
            image: require('../assets/images/Icon_Location.png'),
            name: 'Shipping Address',
        },
        {
            image: require('../assets/images/Icon_Wishlist.png'),
            name: 'Wishlist',
        },
        {
            image: require('../assets/images/Icon_History.png'),
            name: 'Order History',
        },
        {
            image: require('../assets/images/Icon_Order.png'),
            name: 'Track Order',
        },
        {
            image: require('../assets/images/Icon_Payment.png'),
            name: 'Cards',
        },
        {
            image: require('../assets/images/Icon_Alert.png'),
            name: 'Notification',
        },
        {
            image: require('../assets/images/Icon_Exit.png'),
            name: 'Log Out',
        },
       
    ],
    track_order: {
        orders: [
            {
                id: 'OD - 424923192 - N',
                price: '4500',
                date: 'Sept 23, 2018',
                status: 'In Transit',
                products: [
                    require('../assets/images/Image32.png'),
                    require('../assets/images/Image33.png'),
                    require('../assets/images/heads.png'),
                    // view three only
                    // require('../assets/images/Image32.png'),
                    // require('../assets/images/Image32.png'),
                    // require('../assets/images/Image32.png'),
                ]
            },
            {
                id: 'OD - 424923193 - N',
                price: '700',
                date: 'Sept 18, 2018',
                status: 'Delivered',
                products: [
                    require('../assets/images/Image-7.png'),
                    require('../assets/images/Image-24.png'),
                    require('../assets/images/Image-27.png'),
                    // view three only
                    require('../assets/images/Image32.png'),
                    require('../assets/images/Image32.png'),
                    require('../assets/images/Image32.png'),
                ]
            },
            {
                id: 'OD - 424923195 - N',
                price: '5300',
                date: 'Sept 18, 2018',
                status: 'Delivered',
                products: [
                    require('../assets/images/Image-14.png'),
                    require('../assets/images/Image-9.png'),
                    require('../assets/images/Image-3.png'),
                    // view three only
                    require('../assets/images/Image32.png'),
                    require('../assets/images/Image32.png'),
                    require('../assets/images/Image32.png'),
                ]
            },
        ],
        itenirary: {
            OrderSigned: {
                place: 'Lagos State, Nigeria',
                date: '20/18',
                time: '10:00 AM',
            },
            orderProcessed: {
                place: 'Lagos State, Nigeria',
                date: '20/18',
                time: '10:00 AM',
            },
            Shipped: {
                place: 'Lagos State, Nigeria',
                date: '20/18',
                time: '10:00 AM',
            },
            OutForDelivery: {
                place: 'Lagos State, Nigeria',
                date: '',
                time: '',  
            },
            Delivered: {
                place: 'Lagos State, Nigeria',
                date: '',
                time: '',
            },
        }
    },
    Cards: [
        {
            type: 'Master',
            image: require('../assets/images/Icon_MasterCard.png'), 
            card_name: 'David Spade',
            card_no: '4560   5674   3224   4543',
            expiry_date: '09 / 18',
            CVV: '667',
        },
        { 
            type: 'Visa',
            image: require('../assets/images/Icon_Visa.png'),
            card_name: 'David Spade',
            card_no: '4560   5674   3224   4543',
            expiry_date: '09 / 18',
            CVV: '668',
        }
    ],
    Shipping: {
        homeAddress: '21, Alex Davidson Avenue, Opposite Omegatron, Vicent Smith Quarters, Victoria Island, Lagos, Nigeria',
        workAddress: '19, Martins Crescent, Bank of Nigeria, Abuja, Nigeria',
    },
    Wishlist: [
        {
            name: 'Smart Backpack',
            price: '4500',
            inStock: true,
            image: require('../assets/images/Image-2.png')
        },
        {
            name: 'Electric Kettle',
            price: '4500',
            inStock: false,
            image: require('../assets/images/Image-23.png')
        },
        {
            name: 'Apple Homepod',
            price: '4500',
            inStock: true,
            image: require('../assets/images/Image33.png')
        },
    ]
    }


const brand = {
    tabs: ['All', 'Headphones', 'Speakers', 'Microphones'],
    Bo: {
       products: [
        {
            id: 1,
            name: 'BeoPlay Speaker',
            image: require('../assets/images/Image-1.png'),
            manifacturer: 'Bang and Olufsen',
            price: '790'
        },
        {
            id: 2,
            name: 'B&o Desk Lamp',
            image: require('../assets/images/Image-10.png'),
            manifacturer: 'Bang and Olufsen',
            price: '450'
        },
        {
            id: 3,
            name: 'BeoPlay Stand Speaker',
            image: require('../assets/images/Image-9.png'),
            manifacturer: 'Bang and Olufsen',
            price: '300'
        },
        {
            id: 4,
            name: 'B&o Phone Case',
            image: require('../assets/images/Image-8.png'),
            manifacturer: 'Bang and Olufsen',
            price: '34'
        },
       ] 
    }
}

const category_detail = {
    Gadgets: {
        topBrand: [
            {
                name: 'Apple Inc',
                products: '5688',
                image: require('../assets/images/Icon_Apple.png')
            },
            {
                name: 'B&o',
                products: 5693, 
                image: require('../assets/images/Icon_Bo.png')
             }
        ],
        products: [
            {
                name: 'Smart Bluetooth Speaker',
                manifacturer: 'Google LLC',
                price: '9000',
                image: require('../assets/images/Image-7.png')
            },
            {
                name: 'Smart Luggage',
                manifacturer: 'Smart Inc',
                price: '1200',
                onDate: 'new',
                image: require('../assets/images/Image-6.png')
            },
            {
                name: 'Wireless Remote',
                manifacturer: 'Tesla Inc',
                price: '790',
                image: require('../assets/images/Image-20.png')
            },
            {
                name: 'Airpods',
                manifacturer: 'Apple Inc',
                price: '760',
                image: require('../assets/images/Image.png')
            },
        ]
    }
}

const cartItems = [
    {
        id: 1,
        name: 'Tag Heuer Wristwatch',
        price: '1100',
        image: require('../assets/images/Image-29.png'),
        amount: 1,
    },
    {
        id: 2,
        name: 'BeoPlay Speaker',
        price: '450',
        image: require('../assets/images/Image-13.png'),
        amount: 1,
    },
    {
        id: 3,
        name: 'Electric Kettle',
        price: '95',
        image: require('../assets/images/Image-23.png'),
        amount: 1,
    },
    {
        id: 4,
        name: 'Bang & Olufsen Case',
        price: '120',
        image: require('../assets/images/Image-22.png'),
        amount: 1,
    },
    {
        id: 5,
        name: 'Smart Home Speaker',
        price: '120',
        image: require('../assets/images/Image-28.png'),
        amount: 1,
    },
    {
        id: 6,
        name: 'Tag Heuer Wristwatch',
        price: '1100',
        image: require('../assets/images/Image-29.png'),
        amount: 1,
    },
    {
        id: 7,
        name: 'BeoPlay Speaker',
        price: '450',
        image: require('../assets/images/Image-13.png'),
        amount: 1,
    },
    {
        id: 8,
        name: 'Electric Kettle',
        price: '95',
        image: require('../assets/images/Image-23.png'),
        amount: 1,
    },
]

export {
    brand,
    category_detail,
    Explore,
    filter,
    checkout,
    product,
    Account,
    cartItems,
}