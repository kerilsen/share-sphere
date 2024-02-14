const { User } = require('../models')
const userData = [
{ name: "Bailey Hayes", email: "bhayes@gmail.com", username: "bhayes", password: "password",community_id: 1 },
{ name: "Saskia Martin", email: "smartin@gmail.com", username: "smartin", password: "password",community_id: 1 },
{ name: "Lilly-Rose Dale", email: "ldale@gmail.com", username: "ldale", password: "password",community_id: 1 },
{ name: "Lorna Valentine", email: "lvalentine@gmail.com", username: "lvalentine", password: "password",community_id: 1 },
{ name: "Blaine Wu", email: "bwu@gmail.com", username: "bwu", password: "password",community_id: 1 },
{ name: "Elsie Harper", email: "eharper@gmail.com", username: "eharper", password: "password",community_id: 1 },
{ name: "Aled Jefferson", email: "ajefferson@gmail.com", username: "ajefferson", password: "password",community_id: 1 },
{ name: "Jaya Reilly", email: "jreilly@gmail.com", username: "jreilly", password: "password",community_id: 1 },
{ name: "Douglas Strong", email: "dstrong@gmail.com", username: "dstrong", password: "password",community_id: 1 },
{ name: "Asa Gregory", email: "agregory@gmail.com", username: "agregory", password: "password",community_id: 1 },
{ name: "Tianna Tapia", email: "ttapia@gmail.com", username: "ttapia", password: "password",community_id: 1 },
{ name: "Anoushka Walsh", email: "awalsh@gmail.com", username: "awalsh", password: "password",community_id: 1 },
{ name: "Zain Schneider", email: "zschneider@gmail.com", username: "zschneider", password: "password",community_id: 1 },
{ name: "Zaynab Porter", email: "zporter@gmail.com", username: "zporter", password: "password",community_id: 1 },
{ name: "Brodie Sutton", email: "bsutton@gmail.com", username: "bsutton", password: "password",community_id: 1 },
{ name: "Shanice Woodard", email: "swoodard@gmail.com", username: "swoodard", password: "password",community_id: 1 },
{ name: "Ellena Montes", email: "emontes@gmail.com", username: "emontes", password: "password",community_id: 1 },
{ name: "Barbara Higgins", email: "bhiggins@gmail.com", username: "bhiggins", password: "password",community_id: 1 },
{ name: "Hamzah Johnston", email: "hjohnston@gmail.com", username: "hjohnston", password: "password",community_id: 1 },
{ name: "Sharon Rivas", email: "srivas@gmail.com", username: "srivas", password: "password",community_id: 1 },
{ name: "Dorothy Buchanan", email: "dbuchanan@gmail.com", username: "dbuchanan", password: "password", community_id: 2 },
{ name: "Kaiden Love", email: "klove@gmail.com", username: "klove", password: "password", community_id: 2 },
{ name: "Anisha Norris", email: "anorris@gmail.com", username: "anorris", password: "password", community_id: 2 },
{ name: "Cruz Arias", email: "carias@gmail.com", username: "carias", password: "password", community_id: 2 },
{ name: "Anika Combs", email: "acombs@gmail.com", username: "acombs", password: "password", community_id: 2 },
{ name: "Todd Ponce", email: "tponce@gmail.com", username: "tponce", password: "password", community_id: 2 },
{ name: "Dillan Hahn", email: "dhahn@gmail.com", username: "dhahn", password: "password", community_id: 2 },
{ name: "Leon Green", email: "lgreen@gmail.com", username: "lgreen", password: "password", community_id: 2 },
{ name: "Tiana Mahoney", email: "tmahoney@gmail.com", username: "tmahoney", password: "password", community_id: 2 },
{ name: "Liyana Park", email: "lpark@gmail.com", username: "lpark", password: "password", community_id: 2 },
{ name: "Isha Miller", email: "imiller@gmail.com", username: "imiller", password: "password", community_id: 2 },
{ name: "Alejandro Mata", email: "amata@gmail.com", username: "amata", password: "password", community_id: 2 },
{ name: "Kylie Norton", email: "knorton@gmail.com", username: "knorton", password: "password", community_id: 2 },
{ name: "Harris Mcclain", email: "hmcclain@gmail.com", username: "hmcclain", password: "password", community_id: 2 },
{ name: "Zoya Blackburn", email: "zblackburn@gmail.com", username: "zblackburn", password: "password", community_id: 2 },
{ name: "Polly Mcclure", email: "pmcclure@gmail.com", username: "pmcclure", password: "password", community_id: 3 },
{ name: "Tamsin Villanueva", email: "tvillanueva@gmail.com", username: "tvillanueva", password: "password", community_id: 3 },
{ name: "Elmer Shields", email: "eshields@gmail.com", username: "eshields", password: "password", community_id: 3 },
{ name: "Ines Barron", email: "ibarron@gmail.com", username: "ibarron", password: "password", community_id: 3 },
{ name: "Iestyn Gillespie", email: "igillespie@gmail.com", username: "igillespie", password: "password", community_id: 3 },
{ name: "Jenny Cervantes", email: "jcervantes@gmail.com", username: "jcervantes", password: "password", community_id: 3 },
{ name: "Lara Paul", email: "lpaul@gmail.com", username: "lpaul", password: "password", community_id: 3 },
{ name: "Georgiana Callahan", email: "gcallahan@gmail.com", username: "gcallahan", password: "password", community_id: 3 },
{ name: "Fynn Summers", email: "fsummers@gmail.com", username: "fsummers", password: "password", community_id: 3 },
{ name: "Patrick Marks", email: "pmarks@gmail.com", username: "pmarks", password: "password", community_id: 3 },
{ name: "Barney Pena", email: "bpena@gmail.com", username: "bpena", password: "password", community_id: 3 },
{ name: "Solomon O'Gallagher", email: "sogallagher@gmail.com", username: "sogallagher", password: "password", community_id: 3 },
{ name: "Arnold Stokes", email: "astokes@gmail.com", username: "astokes", password: "password", community_id: 3 },
{ name: "Selina Jenkins", email: "sjenkins@gmail.com", username: "sjenkins", password: "password", community_id: 3 },
{ name: "Enzo Stevenson", email: "estevenson@gmail.com", username: "estevenson", password: "password", community_id: 3 }
];