let currentSelectedBank = { name: '', location: '', district: '' };

const bloodBankDatabase = {
    "Ampara": [
        { name: "Ampara District General Hospital Blood Bank", location: "Ampara Town", hours: "08:00 - 16:00", phone: "+94 63 222 2224", available: true },
        { name: "Kalmunai Base Hospital Blood Bank", location: "Kalmunai", hours: "08:00 - 14:00", phone: "+94 67 222 9225", available: true }
    ],
    "Anuradhapura": [
        { name: "Anuradhapura Teaching Hospital Blood Bank", location: "Anuradhapura", hours: "08:00 - 16:00", phone: "+94 25 222 2261", available: true }
    ],
    "Badulla": [
        { name: "Badulla Provincial General Hospital Blood Bank", location: "Badulla", hours: "08:00 - 16:00", phone: "+94 55 222 2261", available: true },
        { name: "Diyatalawa Base Hospital Blood Bank", location: "Diyatalawa", hours: "08:30 - 14:30", phone: "+94 57 222 9061", available: false }
    ],
    "Batticaloa": [
        { name: "Batticaloa Teaching Hospital Blood Bank", location: "Batticaloa", hours: "08:00 - 16:00", phone: "+94 65 222 2261", available: true }
    ],
    "Colombo": [
        { name: "National Blood Transfusion Service (NBTS)", location: "Narahenpita, Colombo 05", hours: "08:00 - 18:00", phone: "+94 11 269 8415", available: true },
        { name: "Colombo South Teaching Hospital Blood Bank", location: "Kalubowila", hours: "08:00 - 16:00", phone: "+94 11 276 3061", available: true },
        { name: "National Hospital Sri Lanka Blood Bank", location: "Colombo 10", hours: "08:00 - 16:00", phone: "+94 11 269 1111", available: true }
    ],
    "Galle": [
        { name: "Karapitiya Teaching Hospital Blood Bank", location: "Karapitiya, Galle", hours: "08:00 - 16:00", phone: "+94 91 223 2261", available: true },
        { name: "Mahamodara Maternity Hospital Blood Bank", location: "Galle", hours: "08:00 - 14:00", phone: "+94 91 222 2262", available: true }
    ],
    "Gampaha": [
        { name: "Gampaha District General Hospital Blood Bank", location: "Gampaha", hours: "08:00 - 16:00", phone: "+94 33 222 2261", available: true },
        { name: "Ragama Teaching Hospital Blood Bank", location: "Ragama", hours: "08:00 - 16:00", phone: "+94 11 295 8261", available: true },
        { name: "Negombo District General Hospital Blood Bank", location: "Negombo", hours: "08:00 - 15:00", phone: "+94 31 222 2261", available: true }
    ],
    "Hambantota": [
        { name: "Hambantota District General Hospital Blood Bank", location: "Hambantota", hours: "08:00 - 16:00", phone: "+94 47 222 0261", available: true },
        { name: "Tangalle Base Hospital Blood Bank", location: "Tangalle", hours: "08:30 - 14:00", phone: "+94 47 224 0261", available: false }
    ],
    "Jaffna": [
        { name: "Jaffna Teaching Hospital Blood Bank", location: "Hospital Road, Jaffna", hours: "08:00 - 16:00", phone: "+94 21 222 2261", available: true }
    ],
    "Kalutara": [
        { name: "Kalutara District General Hospital Blood Bank", location: "Nagoda, Kalutara", hours: "08:00 - 16:00", phone: "+94 34 222 2261", available: true },
        { name: "Panadura Base Hospital Blood Bank", location: "Panadura", hours: "08:00 - 14:00", phone: "+94 38 223 2261", available: true }
    ],
    "Kandy": [
        { name: "Kandy National Hospital Blood Bank", location: "Kandy", hours: "08:00 - 16:00", phone: "+94 81 222 2261", available: true },
        { name: "Peradeniya Teaching Hospital Blood Bank", location: "Peradeniya", hours: "08:00 - 16:00", phone: "+94 81 238 8001", available: true }
    ],
    "Kegalle": [
        { name: "Kegalle District General Hospital Blood Bank", location: "Kegalle Town", hours: "08:00 - 16:00", phone: "+94 35 222 2261", available: true }
    ],
    "Kilinochchi": [
        { name: "Kilinochchi District General Hospital Blood Bank", location: "A9 Road, Kilinochchi", hours: "08:00 - 15:00", phone: "+94 21 228 5261", available: true }
    ],
    "Kurunegala": [
        { name: "Kurunegala Teaching Hospital Blood Bank", location: "Kurunegala", hours: "08:00 - 16:00", phone: "+94 37 222 2261", available: true },
        { name: "Kuliyapitiya Teaching Hospital Blood Bank", location: "Kuliyapitiya", hours: "08:00 - 14:00", phone: "+94 37 228 1261", available: true }
    ],
    "Mannar": [
        { name: "Mannar District General Hospital Blood Bank", location: "Mannar Town", hours: "08:00 - 15:00", phone: "+94 23 222 2261", available: true }
    ],
    "Matale": [
        { name: "Matale District General Hospital Blood Bank", location: "Matale Town", hours: "08:00 - 16:00", phone: "+94 66 222 2261", available: true }
    ],
    "Matara": [
        { name: "Matara District General Hospital Blood Bank", location: "Matara Town", hours: "08:00 - 16:00", phone: "+94 41 222 2261", available: true },
        { name: "Kamburupitiya Base Hospital Blood Bank", location: "Kamburupitiya", hours: "08:30 - 14:00", phone: "+94 41 229 2261", available: false }
    ],
    "Monaragala": [
        { name: "Monaragala District General Hospital Blood Bank", location: "Monaragala", hours: "08:00 - 15:00", phone: "+94 55 227 6261", available: true }
    ],
    "Mullaitivu": [
        { name: "Mullaitivu District General Hospital Blood Bank", location: "Mulliyawalai", hours: "08:00 - 15:00", phone: "+94 21 229 0261", available: true }
    ],
    "Nuwara Eliya": [
        { name: "Nuwara Eliya District General Hospital Blood Bank", location: "Nuwara Eliya", hours: "08:00 - 15:30", phone: "+94 52 222 2261", available: true }
    ],
    "Polonnaruwa": [
        { name: "Polonnaruwa District General Hospital Blood Bank", location: "Polonnaruwa", hours: "08:00 - 16:00", phone: "+94 27 222 2261", available: true }
    ],
    "Puttalam": [
        { name: "Chilaw General Hospital Blood Bank", location: "Chilaw", hours: "08:00 - 16:00", phone: "+94 32 222 2261", available: true },
        { name: "Puttalam Base Hospital Blood Bank", location: "Puttalam Town", hours: "08:00 - 14:00", phone: "+94 32 226 5261", available: true }
    ],
    "Ratnapura": [
        { name: "Ratnapura Teaching Hospital Blood Bank", location: "Ratnapura", hours: "08:00 - 16:00", phone: "+94 45 222 2261", available: true },
        { name: "Balangoda Base Hospital Blood Bank", location: "Balangoda", hours: "08:30 - 14:00", phone: "+94 45 228 7261", available: true }
    ],
    "Trincomalee": [
        { name: "Trincomalee District General Hospital Blood Bank", location: "Trincomalee", hours: "08:00 - 16:00", phone: "+94 26 222 2261", available: true }
    ],
    "Vavuniya": [
        { name: "Vavuniya District General Hospital Blood Bank", location: "Vavuniya Town", hours: "08:00 - 16:00", phone: "+94 24 222 2261", available: true }
    ]
};


