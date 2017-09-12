aos.buildings = {
    "buildings":[
        {
            "type" : "mine",
            "name" : "iron Mine",
            "require" : {
                "space" : 10,
                "materials" : [
                    {
                        "type" :"iron",
                        "quantity" : 100
                    },
                    {
                        "type" : "wood",
                        "quantity" : 30
                    }
                ]
            },
            "produce" : {
                "type" : "goods",
                "product" : "iron",
                "quantity" : 100
            },
            "storage" : 10000
        },
        {
            "type" : "spatioport",
            "name" : "spatioport",
            "require" : {
                "space" : 50,
                "materials" : [
                    {"type" : "iron", "quantity" : 1000}
                ]
            },
            "produce" : [
                {
                    "type" : "transport",
                    "name" : "transport SpaceShip",
                    "require" : {
                        "materials" : { "type":"iron","quantity" : 300}
                    }
                },
                {
                    "type" : "colon",
                    "name" : "colon SpaceShip",
                    "require" : {
                        "materials" : { "type" : "iron", "quantity" : 400}
                    }
                }
            ]
        },{
            "type" : "habitation",
            "name" : "habitation",
            "require" : {
                "space" :10,
                "materials":[{"type" : "iron","quantity":50},{"type": "wood","quantity":20}]
            },
            "produce":{"people" : 300000}

        }
    ]
};