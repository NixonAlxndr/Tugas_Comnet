const locationNavTab = document.querySelectorAll('.location-nav-tab');
const locationTabContent = document.querySelectorAll('.location-nav-tab-content');
const tableBody = document.querySelector('.table-body');
const tableBodyCost = document.querySelector('.table-body-cost')

locationNavTab.forEach((tab) => {
    tab.addEventListener('click', () => {
        locationNavTab.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const targetId = tab.getAttribute('aria-controls'); 
        locationTabContent.forEach((content) => {
            console.log(content.id, targetId)
            if (content.id === targetId) {
                content.classList.add('active', 'show');
                content.classList.remove('hidden');
            } else {
                content.classList.remove('active', 'show');
                content.classList.add('hidden');
            }
        });
    });
});


const subnet = [
    {
        "id" : 5,
        "na" : "192.168.1.0",
        "ba" : "192.168.1.63",
        "sm" : "255.255.255.192 (/26)",
        "range" : "192.168.1.1 - 192.168.1.62"
    },
    {
        "id" : 6,
        "na" : "192.168.1.64",
        "ba" : "192.168.1.127",
        "sm" : "255.255.255.192 (/26)",
        "range" : "192.168.1.65 - 192.168.1.126"
    },
    {
        "id" : 7,
        "na" : "192.168.1.128",
        "ba" : "192.168.1.191",
        "sm" : "255.255.255.192 (/26)",
        "range" : "192.168.1.129 - 192.168.1.190"
    },
    {
        "id" : 9,
        "na" : "192.168.1.192",
        "ba" : "192.168.1.255",
        "sm" : "255.255.255.248 (/26)",
        "range" : "192.168.1.193 - 192.168.1.254"
    },
    {
        "id" : 10,
        "na" : "192.168.2.0",
        "ba" : "192.168.2.63",
        "sm" : "255.255.255.248 (/26)",
        "range" : "192.168.2.1 - 192.168.2.62"
    },
    {
        "id" : 11,
        "na" : "192.168.2.64",
        "ba" : "192.168.2.127",
        "sm" : "255.255.255.248 (/26)",
        "range" : "192.168.2.65 - 192.168.2.126"
    },
    {
        "id" : 12,
        "na" : "192.168.2.128",
        "ba" : "192.168.2.191",
        "sm" : "255.255.255.248 (/26)",
        "range" : "192.168.2.129 - 192.168.2.190"
    },
    {
        "id" : 13,
        "na" : "192.168.2.192",
        "ba" : "192.168.2.255",
        "sm" : "255.255.255.248 (/26)",
        "range" : "192.168.2.193 - 192.168.2.254"
    },
    {
        "id" : 14,
        "na" : "192.168.3.0",
        "ba" : "192.168.3.7",
        "sm" : "255.255.255.248(/29)",
        "range" : "192.168.3.1 - 192.168.3.6"
    },
    {
        "id" : 3,
        "na" : "192.168.4.0",
        "ba" : "192.168.4.31",
        "sm" : "255.255.255.224 (/27)",
        "range" : "192.168.4.1 - 192.168.4.30"
    },
    {
        "id" : 4,
        "na" : "192.168.4.32",
        "ba" : "192.168.4.39",
        "sm" : "255.255.255.248 (/29)",
        "range" : "192.168.4.33 - 192.168.4.38"
    },
    {
        "id" : 1,
        "na" : "192.168.5.0",
        "ba" : "192.168.5.15",
        "sm" : "255.255.255.240 (/28)",
        "range" : "192.168.5.1 - 192.168.5.14"
    },
    {
        "id" : 2,
        "na" : "192.168.5.16",
        "ba" : "192.168.5.23",
        "sm" : "255.255.255.248 (/29)",
        "range" : "192.168.5.17 - 192.168.5.22"
    },

]

subnet.forEach(a => {
    let html = ` 
    <tr>
        <th scope="row">Divisi-${a.id}</th>
        <td>${a.na}</td>
        <td>${a.ba}</td>
        <td>${a.sm}</td>
        <td>${a.range}</td>
    </tr>
    `
    tableBody.innerHTML += html;
})

const cost = [
    {
        "jenis" : "Switch 48 port",
        "model" : "WS-C3750-48TS-S",
        "harga" : "Rp 950.000",
        "jumlah" : "8",
        "total" : "Rp.7.600.000,00"
    },
    {
        "jenis" : "Switch 24 port",
        "model" : "ME-C3750-24TE-M",
        "harga" : "Rp 1.750.000",
        "jumlah" : "6",
        "total" : "Rp10.050.000,00"
    },
    {
        "jenis" : "Router",
        "model" : "ISR4331/K9",
        "harga" : "Rp 15,369,426",
        "jumlah" : "3",
        "total" : "Rp.46.108.281,00"
    },
    {
        "jenis" : "Kabel",
        "model" : "STP CAT6",
        "harga" : "Rp 2.340/m",
        "jumlah" : "4.850m",
        "total" : "Rp.11.349.000,00"
    },

]

cost.forEach(c => {
    let html =
    `
    <tr>
        <th scope="row">Divisi-${c.jenis}</th>
        <td>${c.model}</td>
        <td>${c.harga}</td>
        <td>${c.jumlah}</td>
        <td>${c.total}</td>
    </tr>
    `
    tableBodyCost.innerHTML += html;
})