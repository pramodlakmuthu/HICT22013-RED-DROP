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



// Handle Reservation Form Submission
function handleReservationSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById('resFullName').value;
    const nic = document.getElementById('resNIC').value;
    const contact = document.getElementById('resContact').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;

    document.getElementById('popFullName').innerText = fullName;
    document.getElementById('popNIC').innerText = nic;
    document.getElementById('popContact').innerText = contact;
    document.getElementById('popBankName').innerText = currentSelectedBank.name;
    document.getElementById('popBankLocation').innerText = `${currentSelectedBank.location} (${currentSelectedBank.district} District)`;
    document.getElementById('popDate').innerText = date;
    document.getElementById('popTime').innerText = time;

    closeReservationModal();
    document.getElementById('confirmationModal').classList.remove('hidden');
}

function closeConfirmationModal() {
    document.getElementById('confirmationModal').classList.add('hidden');
}

// View Switcher Function (enforces login for protected views)
function showView(viewId) {
    const unprotected = ['home', 'login', 'register', 'about'];
    const logged = localStorage.getItem('reddrop_loggedIn') === '1';
    if (!logged && !unprotected.includes(viewId)) {
        document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
        const loginView = document.getElementById('view-login');
        if (loginView) loginView.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    const targetView = document.getElementById('view-' + viewId);
    if (targetView) {
        targetView.classList.remove('hidden');
    }
    if (viewId === 'locator') {
        filterBloodBanks();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Authentication UI State
function toggleAuth(isLoggedIn, name = 'User') {
    const loggedOutDiv = document.getElementById('authActionsLoggedOut');
    const loggedInDiv = document.getElementById('authActionsLoggedIn');
    const userNameDisplay = document.getElementById('userNameDisplay');

    if (isLoggedIn) {
        localStorage.setItem('reddrop_loggedIn', '1');
        localStorage.setItem('reddrop_user', name);
        loggedOutDiv.classList.add('hidden');
        loggedInDiv.classList.remove('hidden');
        userNameDisplay.innerText = name;
    } else {
        localStorage.removeItem('reddrop_loggedIn');
        localStorage.removeItem('reddrop_user');
        loggedOutDiv.classList.remove('hidden');
        loggedInDiv.classList.add('hidden');
        showView('home');
    }
}

// Auth Handlers
function handleLoginSubmit(e) {
    e.preventDefault();
    const emailInput = (e.target.querySelector('input[type="email"]') || {}).value || 'Donor';
    const displayName = emailInput.split('@')[0] || 'Donor';
    toggleAuth(true, displayName);
    showView('home');
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('regNameInput').value || 'Donor';
    toggleAuth(true, nameInput);
    showView('eligibility');
}

// REAL-WORLD MEDICAL ELIGIBILITY VALIDATOR
function handleEligibilitySubmit(e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('eligAge').value);
    const weight = parseFloat(document.getElementById('eligWeight').value);
    const donorType = document.getElementById('eligDonorType').value;
    const lastDonationInput = document.getElementById('eligLastDonation').value;

    const tattoo = document.getElementById('eligTattoo').checked;
    const pregnant = document.getElementById('eligPregnant').checked;
    const illness = document.getElementById('eligIllness').checked;
    const alcohol = document.getElementById('eligAlcohol').checked;
    const chronic = document.getElementById('eligChronic').checked;

    let permanentReasons = [];
    let tempReasons = [];

    // Permanent / Critical Medical Checks
    if (chronic) {
        permanentReasons.push("History of chronic illness (Heart Disease, Hepatitis B/C, HIV, Cancer, Kidney Disease) prohibits donation for recipient safety.");
    }

    if (age < 18) {
        permanentReasons.push("Minimum age for blood donation is 18 years.");
    } else {
        const maxAge = (donorType === 'first_time') ? 55 : 60;
        if (age > maxAge) {
            permanentReasons.push(`Maximum age for ${donorType === 'first_time' ? 'first-time' : 'regular'} donors is ${maxAge} years.`);
        }
    }

    if (weight < 50) {
        permanentReasons.push("Minimum body weight required to donate safely is 50 kg.");
    }
}

// Temporary Deferral Checks
if (lastDonationInput) {
    const lastDate = new Date(lastDonationInput);
    const today = new Date();
    const diffTime = Math.abs(today - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const requiredInterval = 120; // 4 months standard gap

    if (diffDays < requiredInterval) {
        const daysRemaining = requiredInterval - diffDays;
        const nextEligibleDate = new Date(lastDate);
        nextEligibleDate.setDate(nextEligibleDate.getDate() + requiredInterval);
        tempReasons.push(`A minimum 4-month (120 days) gap is required between donations. You can donate again in ~${daysRemaining} days (on ${nextEligibleDate.toISOString().split('T')[0]}).`);
    }
}

if (tattoo) {
    tempReasons.push("Tattoos or body piercings require a 12-month waiting period.");
}
if (pregnant) {
    tempReasons.push("Donation is deferred during pregnancy, breastfeeding, or within 12 months post-delivery.");
}
if (illness) {
    tempReasons.push("Must be free of fever/cold symptoms and off antibiotics for at least 14 days.");
}
if (alcohol) {
    tempReasons.push("Must abstain from alcohol intake for at least 24 hours prior to donation.");
}

// Render Dynamic Output Box
const resultBox = document.getElementById('eligibilityResultBox');
resultBox.classList.remove('hidden');

if (permanentReasons.length > 0) {
    resultBox.className = "bg-red-950/40 border border-red-600/50 rounded-2xl p-6 text-left space-y-4";
    resultBox.innerHTML = `
      <div class="flex items-center space-x-2 text-red-400 font-bold text-lg">
        <i class="fa-solid fa-circle-xmark"></i>
        <span>Not Eligible to Donate</span>
      </div>
      <p class="text-xs text-red-200/80">Based on medical safety regulations, you are currently ineligible due to the following reason(s):</p>
      <ul class="list-disc list-inside text-xs text-red-300 space-y-1.5">
        ${permanentReasons.map(r => `<li>${r}</li>`).join('')}
      </ul>
    `;
} else if (tempReasons.length > 0) {
    resultBox.className = "bg-amber-950/40 border border-amber-600/50 rounded-2xl p-6 text-left space-y-4";
    resultBox.innerHTML = `
      <div class="flex items-center space-x-2 text-amber-400 font-bold text-lg">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>Temporarily Deferred</span>
      </div>
      <p class="text-xs text-amber-200/80">You cannot donate today, but you will be eligible once the following condition(s) are resolved:</p>
      <ul class="list-disc list-inside text-xs text-amber-300 space-y-1.5">
        ${tempReasons.map(r => `<li>${r}</li>`).join('')}
      </ul>
    `;
} else {
    resultBox.className = "bg-emerald-950/40 border border-emerald-600/50 rounded-2xl p-6 text-center space-y-4";
    resultBox.innerHTML = `
      <div class="flex items-center justify-center space-x-2 text-emerald-400 font-bold text-lg">
        <i class="fa-solid fa-circle-check"></i>
        <span>🩸 You are eligible to donate!</span>
      </div>
      <p class="text-xs text-emerald-200/80 max-w-md mx-auto">
        You meet all medical and safety criteria. Please ensure you eat a meal and stay hydrated before your appointment.
      </p>
      <button onclick="showView('locator')" class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg">
        Proceed to Blood Bank Locator
      </button>
    `;
}

// Initialize application state on page load
document.addEventListener('DOMContentLoaded', function () {
    const logged = localStorage.getItem('reddrop_loggedIn') === '1';
    const name = localStorage.getItem('reddrop_user') || 'User';
    toggleAuth(logged, name);
    filterBloodBanks();
});