
class AuctionsHarness {


    /* TEMPLATE
    { 
        need: '',
        details: '',
        voteOpens: '',
        voteCloses:'',
        auctionOpens: '',
        auctionCloses: '',
        // in days before expiry,
        // if value over zero new auction is auto started warn days before option expiry
        warn: 60,
        // fullfilled when summ units bid = 100
        // marked manually
        fullfilled: [
            {
                user:'',
                unitsBid: 0,
                fullfilledDate: ''
            }
        ],
        options: [
            {
                option: 'None',
                description: 'Do Nothing',
                cost: {
                    units: 0,
                    currency: 'USD'
                },
                expires: ''
            }
        ],
        // winning option is computed
        // at end voteCloses day
        // no option votes or all "None" votes expires auction 
        votes: [
            {
                user: '',
                rankedVotes: [
                    {
                        rank: 1,
                        // must match an option from above
                        option: ''
                    }
                ]
            } 
        ],
        // winning bids are computed
        // at end of auctionCloses day
        // no bids or insufficiciant coverage expires auction
        bids: [
           {
                user: '',
                // based on 100 units
                units: '',
                hrs: ''
            } need
        ]
    },
*/
    /*
    * Samples of Auctions in pending 
    */
    static PendingHarness = [

        {
            need: 'Hosting Api',
            details: 'We need to host the backend for a year',
            voteOpens: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            voteCloses: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            auctionOpens: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
            auctionCloses: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
            // in days before expiry,
            // if value over zero new auction is auto started warn days before option expiry
            warn: 60,
            // fullfilled when sum units bid = 100
            fullfilled: [
                {
                    user: '',
                    unitsBid: 0,
                    fullfilledDate: ''
                }
            ],
            options: [
                {
                    option: 'None',
                    description: 'Do Nothing',
                    cost: {
                        units: 0,
                        currency: 'USD'
                    },
                    expires: new Date(2020, 0, 1)
                },
                {
                    option: 'Amazon AWS',
                    description: 'Leverage Amazon AWS for 1 year',
                    cost: {
                        units: 1500,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 372 * 24 * 60 * 60 * 1000),
                },
                {
                    option: 'Self Host',
                    description: 'Buy Computer, update home service',
                    cost: {
                        units: 1600,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 372 * 24 * 60 * 60 * 1000),
                }
            ],
            // winning option is computed
            // at end voteCloses day
            // no option votes or all "None" votes expires auction 
            votes: [
                /*    {
                        user: '',
                        rankedVotes: [
                            {
                                rank: 1,
                                // must match an option from above
                                option: ''
                            }
                        ]
                    } */
            ],
            // winning bids are computed
            // at end of auctionCloses day
            // no bids or insufficiciant coverage expires auction
            bids: [
                /*    {
                        user: '',
                        // based on 100 units
                        units: '',
                        hrs: ''
                    } */
            ]
        },
        {
            need: 'Hosting Front End',
            details: 'We need to host the front end for a year',
            voteOpens: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            voteCloses: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            auctionOpens: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
            auctionCloses: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
            // in days before expiry,
            // if value over zero new auction is auto started warn days before option expiry
            warn: 60,
            // fullfilled when sum units bid = 100
            fullfilled: [
                {
                    user: '',
                    unitsBid: 0,
                    fullfilledDate: ''
                }
            ],
            options: [
                {
                    option: 'None',
                    description: 'Do Nothing',
                    cost: {
                        units: 0,
                        currency: 'USD'
                    },
                    expires: new Date(2020, 0, 1)
                },
                {
                    option: 'Amazon AWS',
                    description: 'Leverage Amazon CDN for 1 year',
                    cost: {
                        units: 300,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 372 * 24 * 60 * 60 * 1000),
                },
                {
                    option: 'Self Host',
                    description: 'Buy Computer, update home service',
                    cost: {
                        units: 1500,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 372 * 24 * 60 * 60 * 1000),
                }
            ],
            // winning option is computed
            // at end voteCloses day
            // no option votes or all "None" votes expires auction 
            votes: [
                /*    {
                        user: '',
                        rankedVotes: [
                            {
                                rank: 1,
                                // must match an option from above
                                option: ''
                            }
                        ]
                    } */
            ],
            // winning bids are computed
            // at end of auctionCloses day
            // no bids or insufficiciant coverage expires auction
            bids: [
                /*    {
                        user: '',
                        // based on 100 units
                        units: '',
                        hrs: ''
                    } */
            ]
        },
    ]

  
    /*
    * Samples of Auctions existing due to warn/expiry combo 
    */




    /*
    * Samples of Auctions in Voting Period
    */

    static VotingHarness = [
     
        {
            need: 'Monthly Cleaning Services',
            details: 'Our office is a disaster',
            voteOpens: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),   // the month is 0-indexed,
            voteCloses: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            auctionOpens: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
            auctionCloses:  new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            warn: 60,
            // fullfilled when sum units bid = 100
            fullfilled: [
                {
                    user: '',
                    unitsBid: 0,
                    fullfilledDate: ''
                }
            ],
            options: [
                {
                    option: 'None',
                    description: 'Do Nothing',
                    cost: {
                        units: 0,
                        currency: 'USD'
                    },
                    expires: new Date(2020, 0, 1)
                },
                {
                    option: 'Janes Cleaning Service',
                    description: 'link and why',
                    cost: {
                        units: 1200,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                },
                {
                    option: 'Rodrigos Office Clean',
                    description: 'link and why',
                    cost: {
                        units: 1200,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                },
                {
                    option: 'Fred says i will do it',
                    description: 'dont pay i can clean',
                    cost: {
                        units: 0,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                }
            ],
            // winning option is computed
            // at end voteCloses day
            // no option votes or all "None" votes expires auction 
            votes: [
                {
                    user: 'MAH',
                    rankedVotes: [
                        {
                            rank: 1,
                            // must match an option from above
                            option: 'Janes Cleaning Service'
                        },
                        {
                            rank: 2,
                            // must match an option from above
                            option: 'Rodrigos Office Clean'
                        }, {
                            rank: 3,
                            // must match an option from above
                            option: 'Fred says i will do it'
                        },
                        {
                            rank: 4,
                            // must match an option from above
                            option: 'None'
                        }
                    ]
                },
                {
                    user: 'Fred',
                    rankedVotes: [
                        {
                            rank: 2,
                            // must match an option from above
                            option: 'Janes Cleaning Service'
                        },
                        {
                            rank: 4,
                            // must match an option from above
                            option: 'Rodrigos Office Clean'
                        }, {
                            rank: 1,
                            // must match an option from above
                            option: 'Fred says i will do it'
                        },
                        {
                            rank: 3,
                            // must match an option from above
                            option: 'None'
                        }
                    ]
                },
                {
                    user: 'KN',
                    rankedVotes: [
                        {
                            rank: 2,
                            // must match an option from above
                            option: 'Janes Cleaning Service'
                        },
                        {
                            rank: 1,
                            // must match an option from above
                            option: 'Rodrigos Office Clean'
                        }, {
                            rank: 4,
                            // must match an option from above
                            option: 'Fred says i will do it'
                        },
                        {
                            rank: 3,
                            // must match an option from above
                            option: 'None'
                        }
                    ]
                }
            ],
            // winning bids are computed
            // at end of auctionCloses day
            // no bids or insufficiciant coverage expires auction
            bids: [
                /*    {
                        user: '',
                        // based on 100 units
                        units: '',
                        hrs: ''
                    } */
            ]
        }
    ]


    static BiddingHarness = [
     
        {
            need: 'Small office space',
            details: 'An office in town for meeting withclients and contractors',
            voteOpens: new Date(Date.now() - 14* 24 * 60 * 60 * 1000),   // the month is 0-indexed,
            voteCloses: new Date(Date.now() -1  * 24 * 60 * 60 * 1000),
            auctionOpens: new Date(Date.now() ),
            auctionCloses:  new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            warn: 60,
            // fullfilled when sum units bid = 100
            fullfilled: [
                {
                    user: '',
                    unitsBid: 0,
                    fullfilledDate: ''
                }
            ],
            options: [
                {
                    option: 'None',
                    description: 'Do Nothing',
                    cost: {
                        units: 0,
                        currency: 'USD'
                    },
                    expires: new Date(2020, 0, 1)
                },
                {
                    option: 'WeSpace Membership',
                    description: 'WeSpace has a community space with 5g, it is close to train',
                    cost: {
                        units: 1800,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 379 * 24 * 60 * 60 * 1000)
                },
                {
                    option: 'Storage space',
                    description: 'link and why',
                    cost: {
                        units: 600,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 379 * 24 * 60 * 60 * 1000)
                },
                {
                    option: 'Freds Garage',
                    description: 'use my garage',
                    cost: {
                        units: 400,
                        currency: 'USD'
                    },
                    expires: new Date(Date.now() + 379 * 24 * 60 * 60 * 1000)
                }
            ],
            // winning option is computed
            // at end voteCloses day
            // no option votes or all "None" votes expires auction 
            votes: [
                {
                    user: 'MAH',
                    rankedVotes: [
                        {
                            rank: 1,
                            // must match an option from above
                            option: 'WeSpace Membership'
                        },
                        {
                            rank: 2,
                            // must match an option from above
                            option: 'Storage space'
                        }, {
                            rank: 3,
                            // must match an option from above
                            option: 'Freds Garage'
                        },
                        {
                            rank: 4,
                            // must match an option from above
                            option: 'None'
                        }
                    ]
                },
                {
                    user: 'Fred',
                    rankedVotes: [
                        {
                            rank: 2,
                            // must match an option from above
                            option: 'WeSpace Membership'
                        },
                        {
                            rank: 4,
                            // must match an option from above
                            option: 'Storage space'
                        }, {
                            rank: 1,
                            // must match an option from above
                            option: 'Freds Garage'
                        },
                        {
                            rank: 3,
                            // must match an option from above
                            option: 'None'
                        }
                    ]
                },
                {
                    user: 'KN',
                    rankedVotes: [
                        {
                            rank: 2,
                            // must match an option from above
                            option: 'WeSpace Membership'
                        },
                        {
                            rank: 1,
                            // must match an option from above
                            option: 'Storage space'
                        }, {
                            rank: 4,
                            // must match an option from above
                            option: 'Freds Garage'
                        },
                        {
                            rank: 3,
                            // must match an option from above
                            option: 'None'
                        }
                    ]
                }
            ],
            // winning bids are computed
            // at end of auctionCloses day
            // no bids or insufficiciant coverage expires auction
            bids: [
                    {
                        user: 'MAH',
                        // based on 100 units
                        units: '11',
                        hrs: '2'
                    } ,
                    {
                        user: 'KN',
                        // based on 100 units
                        units: '23',
                        hrs: '4'
                    } ,
                    {
                        user: 'Fred',
                        // based on 100 units
                        units: '66',
                        hrs: '10'
                    } 
            ]
        }
    ]

}



/*
* Samples of Fullfilled Auctions 
*/

/*
* Samples of Expired Auctions due to vote
*/

/*
* Samples of Expired Auctions due to insufficiant bids
*/


export default AuctionsHarness