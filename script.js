// --- DATA POI ---
// --- DATA POI BARU (Situs Sejarah Diperbarui) ---
const ambonHeritagePois = [
    // --- SITUS SEJARAH PENTING DI AMBON (Kategori: Sejarah) ---
    { 
        lat: -3.692367318317401, lng: 128.1824589872768, name: "Benteng Victoria", 
        category: "Sejarah", 
       description: "Benteng tertua di Ambon, dibangun Portugis (1575), kini menyimpan koleksi sejarah kota.", 
        historical_name: "Nossa Senhora da Anunciada / Nieuw Victoria", 
        image: "benteng-victoria.jpg",
        unique_fact: "Benteng ini memiliki bunker dan lorong bawah tanah yang digunakan sebagai ruang penyimpanan senjata dan perlindungan saat perang.",
        detail_content: "Benteng Victoria adalah saksi bisu tiga era kolonial: Portugis, Belanda, dan Jepang. Bangunan aslinya, yang dikenal sebagai Nossa Senhora da Anunciada, mengalami renovasi besar-besaran oleh Belanda dan diberi nama Nieuw Victoria. Saat ini, benteng ini berfungsi sebagai Markas Komando Militer setempat dan menyimpan berbagai meriam kuno serta koleksi benda bersejarah yang menceritakan perlawanan rakyat Maluku terhadap penjajahan.",
        detail_file: "victoria.html"
    },
    { 
        lat: -3.5826754584003804, lng: 128.08315559315585, name: "Benteng Amsterdam", 
        category: "Sejarah", 
        description: "Dibangun Portugis (1512) lalu dikembangkan Belanda, terletak di Hila. Berfungsi sebagai pos pertahanan VOC.", 
        historical_name: "Fort Amsterdam", 
        image: "benteng-amsterdam.jpg",
        detail_file: "amsterdam.html"
    },
    { 
        lat: -3.6755838985134943, lng: 128.19246027781256, name: "Commonwealth War Cemetery", 
        category: "Sejarah", 
        description: "Taman Makam Australia. Pemakaman tentara Sekutu yang gugur di Perang Dunia II, termasuk Monumen Ambon.", 
        historical_name: "Ambon War Cemetery", 
        image: "cw-ambon.jpg",
        detail_file: "cwc.html"
    },
    { 
        lat: -3.7126061983037397, lng: 128.15295090878155, name: "Museum Siwalima", 
        category: "Sejarah", 
        description: "Terdiri dari dua bangunan (Kelautan & Budaya) yang menyimpan sejarah bahari dan budaya Maluku, termasuk kerangka ikan paus dan artefak lokal.", 
        historical_name: "Museum Propinsi Maluku", 
        image: "museum-siwalima.jpg",
        detail_file: "siwalima.html"
    },
    { 
        lat: -3.5832747782089345,  lng: 128.083953802282, name: "Gereja Tua Immanuel", 
        category: "Sejarah", 
        description: "Gereja bersejarah peninggalan kolonial Belanda yang masih berdiri kokoh di pusat kota.", 
        historical_name: "Kerk van Immanuel", 
        image: "gereja-immanuel.jpg",
        detail_file: "immanuel.html"
    },
    { 
        lat: -3.5851372676038316, lng: 128.0842132405651, name: "Masjid Tua Wapauwe", 
        category: "Sejarah", 
        description: "Masjid tertua di Maluku (berdiri 1414) yang dibangun tanpa paku, melambangkan toleransi dan sejarah Islam di Ambon.", 
        historical_name: "Masjid Tua", 
        image: "asjid-wapauwe.jpg",
        detail_file: "wapauwe.html"
    },
    
    // --- SITUS LAIN YANG BERKAITAN DENGAN SEJARAH (Dikategorikan Sesuai Fungsinya) ---
    { 
        lat: -3.692601492648536, lng: 128.1849276025774, name: "Taman Pattimura", 
        category: "Kota", // Ikon kota/alun-alun
        description: "Monumen untuk mengenang perjuangan Kapitan Pattimura, pahlawan nasional, menjadi tempat berkumpul dan ikon kota.", 
        historical_name: "Alun-alun Kota", 
        image: "taman-pattimura.jpg", 
        detail_file: "pattimura.html"
    },
    { 
        lat: -3.6929450885352213, lng: 128.1812127643244, name: "Gong Perdamaian Dunia", 
        category: "Kota", // Simbol rekonsiliasi modern di pusat kota
        description: "Simbol perdamaian setelah konflik sosial, menunjukkan upaya rekonsiliasi dan harapan Ambon Manise.", 
        historical_name: "Gong Perdamaian", 
        image: "gong-perdamaian.jpg",
        detail_file: "gp.html" 
    },
    { 
        lat: -3.6617047544304926, lng: 128.19932373259323, name: "Jembatan Merah Putih", 
        category: "Kota", // Ikon infrastruktur modern
        description: "Meskipun modern, jembatan ini menjadi ikon baru Ambon yang menghubungkan dua sisi Teluk Ambon.", 
        historical_name: "JMP", 
        image: "jembatan-merah-putih.jpg",
        detail_file: "jmp.html"
    },
    
    // --- POI LAIN (Kuliner, SeniMusik) DIJAGA AGAR FILTER TETAP BERFUNGSI ---
    { 
        lat: -3.687261887373531, lng: 128.18386217970894, name: "Pasar Mardika", 
        category: "Kuliner", 
        description: "Menjadi pusat sentra jajanan khas Maluku, terutama yang berbahan dasar sagu, seperti talam sagu bakar, roti kenari, dan halua kenari. Buka pagi hingga malam untuk membeli oleh-oleh dan jajanan. ", 
        historical_name: "Pasar Mardika (Area Kuliner)", 
        image: "ikan-bakar.jpg",
        detail_file: "mardika.html"
    },
        

    { lat: -3.687421136928864, lng: 128.19898254935788, name: "Taman Budaya Karang Panjang", 
        category: "SeniMusik", 
        description: "Tempat penyelenggaraan acara seni dan musik tradisional Maluku.", 
        historical_name: "Gedung Kesenian", 
        image: "seni-musik.jpg",
        detail_file: "kebudayaan.html" 
    },
];
// --- AKHIR DATA POI BARU ---


// ==============================================
// --- START: DATA TOKOH HISTORIS BARU ---
// ==============================================
const ambonFiguresData = [
    {
        id: 1, name: "Pattimura", image: "biografi/bio card/tokoh-pattimura.jpg", 
        short_bio: "Pahlawan Nasional dari Maluku yang memimpin perlawanan bersenjata melawan pemerintah kolonial Belanda pada tahun 1817.",
        biography_file: "biografi/bio-pattimura.html"
    },
    {
        id: 2, name: "Martha Christina Tiahahu", image: "biografi/bio card/tokoh-marthina.jpg", 
        short_bio: "Pejuang wanita yang turut serta dalam perang Pattimura. Ia gugur di usia muda dan dihormati sebagai Pahlawan Nasional.",
        biography_file: "biografi/bio-marthina.html"
    },
    {
        id: 3, name: "Johannes Latuharhary", image: "biografi/bio card/tokoh-latuharhary.jpeg", 
        short_bio: "Gubernur Maluku pertama dan anggota BPUPKI yang berperan penting dalam penyusunan UUD 1945.",
        biography_file: "biografi/bio-latuharhary.html"
    },
    {
        id: 5, name: "J. Leimena", image: "biografi/bio card/tokoh-leimena.jpg", 
        short_bio: "Salah satu pahlawan Indonesia dengan masa jabatan menteri terlama. Ia dikenal sebagai diplomat ulung dan tokoh kristiani yang moderat.",
        biography_file: "biografi/bio-leimena.html"
    },

    {
        id: 5, name: "Alexander Jacob Patty (A.Y. Patty)", image: "biografi/bio card/tokoh-jacob.jpeg", 
        short_bio: "Seorang nasionalis Indonesia dan pelopor gerakan kemerdekaan Indonesia dari Maluku. Ia dikenal terutama karena mendirikan Sarekat Ambon.",
        biography_file: "biografi/bio-jacob.html"
    },
    
    {
        id: 6, name: "Prof. Dr. G.A. Siwabessy", image: "biografi/bio card/tokoh-siwabessy.jpeg", 
        short_bio: "Seorang ilmuwan dan politikus Indonesia yang menjabat Menteri Badan Tenaga Atom Nasional.",
        biography_file: "biografi/bio-siwabessy.html"
    },
    {
        id: 7, name: "Dr. J.B. Sitanala", image: "biografi/bio card/tokoh-sitanala.jpg", 
        short_bio: "Jacob Bernadus Sitanala (18 September 1889 – 30 Agustus 1958 ) adalah anak dari pasangan Jacob Sitanala dan Welhelmina Hunila merupakan dokter medis asal Indonesia kelahiran Negeri Kaiely..",
        biography_file: "biografi/bio-sitanala.html"
    },
    {
        id: 8, name: "Brigjen (Purn.) Herman Pieters", image: "biografi/bio card/tokoh-pieters.jpg", 
        short_bio: "seorang pejuang kemerdekaan, Panglima Pertama Kodam XV/Pattimura dan pahlawan Nasional asal Maluku.",
        biography_file: "biografi/bio-pieters.html"
    },
    {
        id: 9, name: "Izaak Huru Doko", image: "biografi/bio card/tokoh-doko.webp", 
        short_bio: "Seorang Pahlawan Nasional Indonesia, guru, organisator, dan pejuang kemerdekaan yang berasal dari Nusa Tenggara Timur (NTT). Ia dikenal karena perannya dalam mempersatukan pemuda Timor dan memimpin perjuangan melawan penjajahan Belanda (NICA) serta Jepang.",
        biography_file: "biografi/bio-doko.html"
    },
    {
        id: 10, name: "Broery Marantika (Simon Dominggus Pesulima)", image: "biografi/bio card/tokoh-broery.jpeg", 
        short_bio: "Simon Dominggus Pesulima, yang dikenal dengan nama Broery Marantika (25 Juni 1948 - 7 April 2000 ) adalah penyanyi legendaris dan komponis dari Indonesia.",
        biography_file: "biografi/bio-broery.html"
    },
    ];
// --- END: DATA TOKOH HISTORIS BARU ---



let map; 
let layerGroups = {};
let mapMarkers = [];

window.onload = function() {
    // 1. INISIALISASI PETA
    try {
        map = L.map('map').setView([-3.7031, 128.1565], 13); 

        const defaultLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
    } catch (e) {
        console.error("Leaflet Gagal Dimuat. Pastikan koneksi internet dan link di HTML benar.", e);
        document.getElementById('map').innerHTML = "<h2>ERROR: Peta Gagal Dimuat. Cek Console Log.</h2>";
        return; 
    }

    // 2. SETUP LAYER GROUP
    const categories = ['Sejarah', 'Kota', 'Kuliner', 'SeniMusik'];
    categories.forEach(cat => {
        // Semua layer ditambahkan ke peta di awal
        layerGroups[cat] = L.layerGroup(); 
    });

   // 3. FUNGSI SIDEBAR YANG DIPERBAIKI
function openSidebar(poi) {
        document.getElementById('sidebar-title').innerText = "Fakta Singkat: " + poi.name;
        document.getElementById('sidebar-content').innerHTML = `
            <img src="assets/${poi.image}" alt="Gambar ${poi.name}" onerror="this.style.display='none'">
            <p><strong>Nama Historis:</strong> ${poi.historical_name || 'Tidak diketahui'}</p>
            <p><strong>Kategori:</strong> ${poi.category}</p>
            <p>${poi.description}</p>
            
            <hr>
            
            <button id="btn-lihat-detail" class="btn-detail" data-poi-name="${poi.name}">Lihat Detail</button>
        `;
    
    // Tampilkan sidebar
    document.getElementById('sidebar').classList.add('open');

    map.flyTo([poi.lat, poi.lng], 17);

    const detailButton = document.getElementById('btn-lihat-detail');
    if (detailButton) {
        detailButton.addEventListener('click', function() {
            const poiName = this.getAttribute('data-poi-name');
            const poi = ambonHeritagePois.find(p => p.name === poiName);
            
            if (poi && poi.detail_file) {
                // Navigasi Langsung ke File HTML Baru
                window.location.href = poi.detail_file;
            } else {
                alert("File detail untuk POI ini tidak ditemukan!");
            }
        });
    }
}

    // 4. MEMBUAT MARKER
    function createMarkers() {
        mapMarkers = [];
        const heritageIcon = L.divIcon({
            className: 'heritage-marker-icon',
            html: '<i class="fas fa-map-marker-alt" style="color: #6d4c41; font-size: 24px;"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });

        ambonHeritagePois.forEach(poi => {
            const marker = L.marker([poi.lat, poi.lng], { icon: heritageIcon })
                .on('click', () => { openSidebar(poi); })
                .bindTooltip(poi.name, { permanent: false, direction: 'top' });

            if (layerGroups[poi.category]) {
                // Tambahkan marker ke layer group yang sesuai
                marker.addTo(layerGroups[poi.category]);
                // BARU (Untuk Pencarian): Simpan marker ke array utama
                mapMarkers.push({ marker: marker, poi: poi });
            }
        });
    }
    
    // 5. LOGIKA FILTER KATEGORI (Mode Pilihan Tunggal)
const categoryButtons = document.querySelectorAll('.category-btn');
// Daftar kategori yang ADA data markernya (JANGAN masukkan 'Semua')
const allCategoriesList = ['Sejarah', 'Kota', 'Kuliner', 'SeniMusik']; 

function updateMarkerVisibility(selectedButton) {
    const selectedCategory = selectedButton.dataset.category;

    // 1. Sembunyikan SEMUA Layer Group (langkah wajib untuk single selection)
    allCategoriesList.forEach(category => {
        const layer = layerGroups[category];
        // Tambahkan pengamanan: pastikan 'layer' ada sebelum mencoba menghapusnya
        if (layer && map.hasLayer(layer)) { 
            map.removeLayer(layer);
        }
    });

    // 2. ITERASI SEMUA TOMBOL: Hapus status 'active' dari semua tombol
    categoryButtons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. AKTIFKAN YANG DIPILIH: Tampilkan layer/s dan status 'active'
    if (selectedButton) {
        
        if (selectedCategory === 'Semua') {
            // JIKA 'Semua' DIKLIK, tampilkan SEMUA layer dari daftar kategori utama
            allCategoriesList.forEach(category => {
                const layer = layerGroups[category];
                // Layer sudah dipastikan ada karena dibuat di awal (SETUP LAYER GROUP)
                layer.addTo(map); 
            });
            
        } else {
            // JIKA KATEGORI TUNGGAL DIKLIK, tampilkan HANYA layer itu
            const layerToDisplay = layerGroups[selectedCategory];
            if (layerToDisplay) { // Pastikan layerGroup ada
                layerToDisplay.addTo(map);
            }
        }
        
        // Beri status aktif pada tombol yang diklik
        selectedButton.classList.add('active');
    }
}


    // 6. EVENT LISTENERS (Khusus Tombol Kategori)
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Panggil fungsi pembaruan dengan tombol yang baru diklik
            updateMarkerVisibility(button);
            // Panggil filterContent setelah klik kategori untuk menerapkan filter pencarian jika ada
            filterContent(searchInput.value);
        });
    });

    // Tombol Heritage Mode
    document.getElementById('toggle-heritage-mode').addEventListener('click', () => {
        const body = document.body;
        const button = document.getElementById('toggle-heritage-mode');
        body.classList.toggle('heritage-active');
        
        if (body.classList.contains('heritage-active')) {
            button.innerText = 'Heritage: ON';
        } else {
            button.innerText = 'Heritage: OFF';
        }
    });

    // Sidebar Close
    document.getElementById('close-sidebar').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
    });

    // ==============================================
    // --- START: FUNGSI TOKOH HISTORIS & MODAL ---
    // ==============================================

    const figuresGridContainer = document.getElementById("figures-grid-container");
    const modal = document.getElementById("figure-detail-modal");
    const closeModalBtn = document.getElementById("close-figure-modal");

    // Fungsi untuk membuat card tokoh dan menambahkannya ke grid
    function renderHistoricalFigures() {
        // Cek apakah container sudah dimuat (penting untuk menghindari error null)
        if (!figuresGridContainer) { 
             console.warn("figures-grid-container tidak ditemukan. Cek index.html.");
             return; 
        }

        ambonFiguresData.forEach(figure => {
            const card = document.createElement('div');
            card.classList.add('figure-card');
            card.setAttribute('data-figure-id', figure.id);

            card.innerHTML = `
                <img src="${figure.image}" alt="${figure.name}" onerror="this.onerror=null;this.src='biografi/bio card/placeholder.jpg'"> 
                <h3>${figure.name}</h3>
            `;

            figuresGridContainer.appendChild(card);

            // Event Listener untuk menampilkan Pop-up saat card diklik
            card.addEventListener('click', () => {
                showFigureModal(figure);
            });
        });
    }

    // Fungsi untuk menampilkan Pop-up (Modal)
    function showFigureModal(figure) {
        document.getElementById('modal-figure-image').src = figure.image;
        document.getElementById('modal-figure-name').textContent = figure.name;
        document.getElementById('modal-figure-short-bio').textContent = figure.short_bio;
        
        const readMoreBtn = document.getElementById('modal-read-more-btn');
        readMoreBtn.href = figure.biography_file; 
        
        modal.style.display = 'block';
    }

    // Event listener untuk menutup modal
    if (closeModalBtn) {
        closeModalBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }

    // Tutup modal jika user klik di luar area modal
    window.onclick = function(event) {
        // Cek apakah event.target ada dan sama dengan elemen modal
        if (event.target && event.target === modal) {
            modal.style.display = 'none';
        }
    }
    // ==============================================
    // --- END: FUNGSI TOKOH HISTORIS & MODAL ---
    // ==============================================

    // ==============================================
    // --- FUNGSI PENCARIAN (Upgrade D) ---
    // ==============================================
    
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    
    function filterContent(searchTerm) {
        const term = searchTerm.toLowerCase().trim();

        // Tentukan apakah tombol X harus ditampilkan
        if (term.length > 0) {
        clearSearchBtn.style.display = 'block';
        } else {
        clearSearchBtn.style.display = 'none';
    }

        let hasPoiResults = false;
        let hasFigureResults = false;

        // 1. FILTER GRID TOKOH
        const figures = document.querySelectorAll('#figures-grid-container .figure-card');
        figures.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            
            if (name.includes(term) || term === "") {
            card.style.display = 'flex';
            if (term !== "") {
                hasFigureResults = true;
            }
        } else {
            card.style.display = 'none';
        }
        });

        // 2. FILTER MARKER PETA
        const activeCategoryButton = document.querySelector('.category-btn.active');
        const activeCategory = activeCategoryButton ? activeCategoryButton.dataset.category : null;

        mapMarkers.forEach(item => {
            const poiName = item.poi.name.toLowerCase();
            const poiDesc = item.poi.description.toLowerCase();
            const marker = item.marker;
            const markerCategory = item.poi.category;
            
            // 1. Tentukan apakah marker harusnya aktif BERDASARKAN KATEGORI SAAT INI
            let isCategoryMatch = false;
            
            if (activeCategory === 'Semua') {
                // Jika "Semua" aktif, POI manapun boleh ditampilkan (oleh kategori)
                isCategoryMatch = true;
            } else if (activeCategory) {
                // Jika kategori tunggal aktif, hanya POI kategori itu yang cocok
                isCategoryMatch = activeCategory === markerCategory;
            }
            
            // 2. Tentukan apakah marker cocok dengan istilah PENCARIAN
            const matchesSearch = poiName.includes(term) || poiDesc.includes(term);

            // TAMPILKAN jika: Cocok Kategori AND Cocok Pencarian
            if (matchesSearch && isCategoryMatch) {
                // Tampilkan marker
                // Catatan: marker.addTo(map) tidak perlu di sini karena layer group sudah mengurusnya.
                // Kita harus memastikan marker berada di layer group yang BENAR dan layer group itu di peta.
                
                // Solusi: Tambahkan marker ke Layer Group-nya, ASALKAN Layer Group-nya sedang aktif di peta (sudah diurus updateMarkerVisibility)
                if (layerGroups[markerCategory] && !layerGroups[markerCategory].hasLayer(marker)) {
                    // Hapus dari map jika ada, lalu tambahkan ke LayerGroup
                    if (map.hasLayer(marker)) { map.removeLayer(marker); }
                    marker.addTo(layerGroups[markerCategory]);
                }
                
            } else {
                // SEMBUNYIKAN: Hapus dari Layer Group (walaupun layer groupnya aktif)
                if (layerGroups[markerCategory] && layerGroups[markerCategory].hasLayer(marker)) {
                    layerGroups[markerCategory].removeLayer(marker);
                }
            }
        });
    }

    // 2. BARU: Event Listener untuk Pencarian Saat Menekan Enter (Keydown/Keypress)
    searchInput.addEventListener('keypress', (e) => {
        // Cek jika tombol yang ditekan adalah 'Enter' (keyCode 13)
        if (e.key === 'Enter') {
            
            // Mencegah formulir mengirim (submit) jika input berada dalam form
            e.preventDefault(); 
            
            // Terapkan filter final
            filterContent(e.target.value);
            
            // Opsional: Hilangkan fokus dari input setelah Enter
            searchInput.blur(); 

        
        
        // LOGIKA SCROLL NAVIGASI DAN ZOOM POI
        const term = e.target.value.toLowerCase().trim();
        if (term.length > 0) {
            
            // 1. TENTUKAN HASIL POI YANG MUNCUL
            const visiblePoiResults = [];
            mapMarkers.forEach(item => {
                const poiName = item.poi.name.toLowerCase();
                const poiDesc = item.poi.description.toLowerCase();
                
                // Cek apakah POI cocok dengan pencarian DAN sedang ditampilkan di peta
                if ((poiName.includes(term) || poiDesc.includes(term)) && map.hasLayer(item.marker)) {
                    visiblePoiResults.push(item.poi);
                }
            });
            
            const hasPoiResults = visiblePoiResults.length > 0;
            
            // Cek apakah ada hasil Tokoh
            const hasFigureResults = Array.from(document.querySelectorAll('#figures-grid-container .figure-card'))
                .some(card => card.style.display !== 'none');

            // 2. NAVIGASI SCROLL & ZOOM
            if (hasPoiResults) {
                // Scroll ke Peta
                document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // BARU: Jika hanya ada SATU hasil POI, lakukan zoom otomatis (FlyTo)
                if (visiblePoiResults.length === 1) {
                    const singlePoi = visiblePoiResults[0];
                    // Mengarahkan peta ke lokasi POI yang dicari (Zoom level 16)
                    map.flyTo([singlePoi.lat, singlePoi.lng], 16); 
                } else if (visiblePoiResults.length > 1) {
                    // Jika lebih dari satu, atur batas peta (opsional, biarkan di zoom 13)
                    
                    // Pilihan: Zoom ke Ambon Tengah jika banyak hasil
                    map.flyTo([-3.7031, 128.1565], 13);
                }

            }   else if (hasFigureResults) {
                // Jika tidak ada hasil POI tapi ada hasil Tokoh, scroll ke Grid Tokoh
                document.getElementById('historical-figures-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }});

    

    // BARU: Event Listener untuk Tombol Clear Search (X)
    if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = ""; // Kosongkan input
        filterContent(""); // Panggil filter dengan string kosong (mengatur ulang tampilan)
        searchInput.focus(); // Opsional: Beri fokus kembali ke input
    });
}
    // PANGGILAN AWAL
createMarkers(); 

// BARU: Panggil fungsi filter dengan tombol 'Semua' sebagai default.
const defaultButton = document.querySelector('.category-btn[data-category="Semua"]');
if (defaultButton) {
    updateMarkerVisibility(defaultButton);
}
// Panggilan filterContent di sini tidak wajib karena filterCategory belum berubah.

// !!! INI KOREKSI UTAMA: Panggil fungsi rendering tokoh di akhir window.onload
renderHistoricalFigures();
};

const matchesSearch = poiName.includes(term) || poiDesc.includes(term);