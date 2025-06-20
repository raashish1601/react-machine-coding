export const PROGRESS_BAR_MIN_VALUE = 0;
export const PROGRESS_BAR_MAX_VALUE = 100;

export const GRID_LIGHTS_CONFIG = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

export const TYPEAHEAD_DATA = [
    "Amsterdam",
    "Berlin",
    "London",
    "New York",
    "Paris",
    "Rome",
    "San Francisco",
    "Tokyo",
    "Washington DC",
    "Zurich",
    "Copenhagen",
    "Helsinki",
    "Madrid",
    "Reykjavik",
    "Stockholm",
    "Vancouver",
    "Vienna",
    "Zagreb",
    "Budapest",
    "Dublin",
    "Hamburg",
    "Krakow",
    "Lisbon",
    "Ljubljana"
];

export const CIRCLE_RADIUS = 50;

export const ACCORDIAN_DATA = [
    {
        id: 1,
        title: "Do I have to allow the use of cookies?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    },
    {
        id: 2,
        title: "How do I change my My Page password?",
        info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
    },
    {
        id: 3,
        title: "What is BankID?",
        info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
    },
    {
        id: 4,
        title: "Whose birth number can I use?",
        info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."
    },
    {
        id: 5,
        title: "When do I recieve a password ordered by letter?",
        info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan "
    }
];

export const MULTILEVEL_DROPDOWN_DATA = [
    {
        title: "Home",
    },
    {
        title: "Services",
        submenu: [{
            title: "web design",
        },
        {
            title: "web development",
            submenu: [{
                title: "Frontend",
            },
            {
                title: "Backend",
                submenu: [{
                    title: "NodeJS",
                },
                {
                    title: "PHP",
                },
                ],
            },
            ],
        },
        {
            title: "SEO",
        },
        ],
    },
    {
        title: "About",
        submenu: [{
            title: "Who we are",
        },
        {
            title: "Our values",
        },
        ],
    },
];

export const FILE_EXPLORER_DATA = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "public nested 1",
                    isFolder: true,
                    items: [
                        {
                            id: "4",
                            name: "index.html",
                            isFolder: false,
                            items: []
                        },
                        {
                            id: "5",
                            name: "hello.html",
                            isFolder: false,
                            items: []
                        }
                    ]
                },
                {
                    id: "6",
                    name: "public_nested_file",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "7",
            name: "src",
            isFolder: true,
            items: [
                {
                    id: "8",
                    name: "App.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "9",
                    name: "Index.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "10",
                    name: "styles.css",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "11",
            name: "package.json",
            isFolder: false,
            items: []
        }
    ]
};

