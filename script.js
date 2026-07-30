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


// Filter and Render Blood Banks for Selected District
function filterBloodBanks() {
    const selectedDistrict = document.getElementById('districtSelect').value;
    const container = document.getElementById('bloodBankContainer');
    const banks = bloodBankDatabase[selectedDistrict];

    if (!banks || banks.length === 0) {
        container.innerHTML = `
      <div class="bg-[#11192C] border border-gray-800 rounded-xl p-6 text-center text-gray-400 text-xs">
        No blood banks found in ${selectedDistrict} district.
      </div>`;
        return;
    }

    let htmlContent = '';
    banks.forEach((bank) => {
        const safeName = bank.name.replace(/'/g, "\\'");
        const safeLocation = bank.location.replace(/'/g, "\\'");

        htmlContent += `
      <div class="bg-[#11192C] border border-blue-900/50 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition hover:border-blue-700/60">
        <div class="space-y-1">
          <h4 class="font-bold text-gray-100 text-sm">${bank.name}</h4>
          <p class="text-xs text-gray-400 flex items-center space-x-1">
            <i class="fa-solid fa-location-dot text-blue-400"></i>
            <span>${bank.location} (${selectedDistrict} District)</span>
          </p>
          <p class="text-[11px] text-gray-400 flex items-center space-x-4 pt-1">
            <span>⏰ ${bank.hours}</span>
            <span>📞 ${bank.phone}</span>
          </p>
        </div>
        <div class="flex items-center space-x-3">
          ${bank.available
                ? `<span class="bg-emerald-950 border border-emerald-600/60 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full">Available</span>
               <button onclick="openReservationModal('${safeName}', '${safeLocation}', '${selectedDistrict}')" class="bg-brand-blue hover:bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-lg transition shadow-md">Reserve</button>`
                : `<span class="bg-amber-950 border border-amber-700/60 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full">Unavailable</span>
               <button disabled class="bg-gray-800 text-gray-500 cursor-not-allowed text-xs font-bold px-5 py-2 rounded-lg">Reserve</button>`
            }
        </div>
      </div>
    `;
    });

    container.innerHTML = htmlContent;
}

// Reservation Modal Controls
function openReservationModal(name, location, district) {
    currentSelectedBank = { name, location, district };
    document.getElementById('resModalBankTitle').innerText = `${name} (${district})`;

    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('resDate');
    dateInput.value = today;
    dateInput.min = today;

    const currentUserName = document.getElementById('userNameDisplay').innerText;
    if (currentUserName && currentUserName !== 'User') {
        document.getElementById('resFullName').value = currentUserName;
    }

    document.getElementById('reservationModal').classList.remove('hidden');
}

function closeReservationModal() {
    document.getElementById('reservationModal').classList.add('hidden');
}
