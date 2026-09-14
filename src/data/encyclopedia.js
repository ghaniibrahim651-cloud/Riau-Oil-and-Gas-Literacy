export const encyclopediaData = [
  {
    id: "gas-alam",
    nama: "Gas Alam (Metana)",
    kategori: "Potensial",
    icon: "Flame",
    deskripsi: "Gas yang tidak berwarna dan tidak berbau secara alami. Sering digunakan untuk bahan bakar rumah tangga atau industri.",
    ciriCiri: ["Tidak terlihat", "Secara alami tidak berbau, namun sering diberi bau (seperti telur busuk) agar mudah dideteksi", "Lebih ringan dari udara"],
    tindakan: "Jika mencium bau menyengat di rumah, segera buka jendela lebar-lebar, jangan nyalakan api/listrik, dan keluar dari ruangan.",
    faktaMenarik: "Riau memiliki cadangan gas alam yang sangat besar yang dialirkan hingga ke negara tetangga seperti Singapura."
  },
  {
    id: "lpg",
    nama: "LPG (Liquefied Petroleum Gas)",
    kategori: "Potensial",
    icon: "Cylinder",
    deskripsi: "Campuran gas hidrokarbon (terutama propana dan butana) yang dicairkan untuk memudahkan penyimpanan dan pengangkutan. Sangat umum di dapur keluarga.",
    ciriCiri: ["Diberi bau khas agar kebocoran mudah diketahui", "Lebih berat dari udara sehingga akan mengendap di lantai jika bocor", "Sangat mudah terbakar"],
    tindakan: "Jika tabung mendesis atau tercium bau gas, cabut regulator (jika aman), bawa tabung ke tempat terbuka, dan jangan nyalakan saklar lampu.",
    faktaMenarik: "Berbeda dengan metana, LPG yang bocor tidak akan terbang ke atas, melainkan merayap di bawah lantai rumah."
  },
  {
    id: "minyak-bumi-mentah",
    nama: "Minyak Bumi Mentah",
    kategori: "Potensial",
    icon: "Droplet",
    deskripsi: "Cairan kental berwarna gelap yang diekstrak dari perut bumi. Ini adalah bahan baku utama untuk bensin, solar, hingga plastik.",
    ciriCiri: ["Cairan pekat, licin, dan lengket", "Warna berkisar dari coklat kehijauan hingga hitam pekat", "Berbau menyengat seperti belerang atau aspal"],
    tindakan: "Jangan sentuh tanpa sarung tangan. Hindari membuangnya ke sumber air karena 1 tetes bisa mencemari banyak air bersih.",
    faktaMenarik: "Riau adalah salah satu provinsi penghasil minyak bumi terbesar di Indonesia sejak puluhan tahun lalu."
  },
  {
    id: "tanah-gambut",
    nama: "Tanah Gambut",
    kategori: "Potensial",
    icon: "Layers",
    deskripsi: "Tanah yang terbentuk dari sisa tumbuhan yang setengah membusuk di area rawa. Riau memiliki daratan gambut yang sangat luas.",
    ciriCiri: ["Berwarna gelap dan bersponge (lembek) jika basah", "Mudah menyala dan menyimpan api di bawah permukaan jika kering", "Kaya akan karbon"],
    tindakan: "Saat kemarau, jangan pernah membuang puntung rokok sembarangan di area gambut, karena api bisa menjalar di bawah tanah.",
    faktaMenarik: "Api di tanah gambut sangat sulit dipadamkan karena apinya bisa bertahan berbulan-bulan di bawah permukaan tanah."
  },
  {
    id: "uap-air-industri",
    nama: "Uap Air Industri",
    kategori: "Aman",
    icon: "Cloud",
    deskripsi: "Uap putih yang sering terlihat keluar dari cerobong pabrik kelapa sawit atau pabrik kertas di Riau. Sebagian besar hanyalah uap air (H2O).",
    ciriCiri: ["Berwarna putih seperti awan", "Tidak berbau menyengat", "Cepat memudar saat bercampur dengan udara"],
    tindakan: "Tidak perlu panik jika melihat uap ini, namun tetap jaga jarak dari area pabrik karena suhunya bisa sangat panas.",
    faktaMenarik: "Banyak warga sering salah mengira uap air ini sebagai asap kebakaran atau polusi beracun."
  },
  {
    id: "karbon-dioksida",
    nama: "Karbon Dioksida (CO2)",
    kategori: "Aman",
    icon: "Wind",
    deskripsi: "Gas buang alami dari pernapasan kita dan hasil pembakaran. Dalam jumlah wajar, gas ini aman bagi manusia.",
    ciriCiri: ["Tidak berwarna", "Tidak berbau", "Lebih berat dari udara"],
    tindakan: "Pastikan sirkulasi udara di dalam rumah baik agar gas ini tidak menumpuk dan menyebabkan kantuk atau sesak.",
    faktaMenarik: "Pepohonan di Riau, terutama di hutan tropis, sangat berjasa menyerap CO2 dan mengubahnya kembali menjadi oksigen."
  },
  {
    id: "nitrogen",
    nama: "Nitrogen (N2)",
    kategori: "Aman",
    icon: "Snowflake",
    deskripsi: "Gas penyusun udara terbanyak (sekitar 78%). Gas ini sangat stabil, tidak beracun, dan tidak mudah terbakar.",
    ciriCiri: ["Tidak berwarna", "Tidak berbau", "Tidak berasa"],
    tindakan: "Aman di lingkungan terbuka. Namun dalam tangki tertutup, kebocoran N2 cair dapat menyebabkan radang dingin (frostbite).",
    faktaMenarik: "Di industri migas, nitrogen sering disuntikkan ke dalam sumur minyak untuk mendorong minyak naik ke permukaan."
  },
  {
    id: "sulfur-belerang",
    nama: "Sulfur / Belerang",
    kategori: "Potensial",
    icon: "TriangleAlert",
    deskripsi: "Unsur kimia yang sering ditemukan di dekat sumber panas bumi atau sebagai produk sampingan pengilangan minyak.",
    ciriCiri: ["Berwarna kuning pucat", "Bila dibakar menghasilkan bau yang sangat tajam", "Berbentuk padat atau bubuk di suhu ruang"],
    tindakan: "Gunakan masker jika berada di dekat area dengan bau belerang kuat karena dapat mengiritasi saluran pernapasan.",
    faktaMenarik: "Meskipun baunya tidak enak, belerang banyak digunakan untuk industri pupuk dan bahkan obat kulit."
  },
  {
    id: "hidrogen-sulfida",
    nama: "Hidrogen Sulfida (H2S)",
    kategori: "Bahaya",
    icon: "Skull",
    deskripsi: "Gas yang sangat beracun dan mematikan, sering muncul secara alami bersama minyak bumi, gas alam, atau di rawa-rawa gambut.",
    ciriCiri: ["Berbau sangat busuk seperti telur busuk pada konsentrasi rendah", "Pada konsentrasi tinggi, mematikan saraf penciuman sehingga tiba-tiba TIDAK BERBAU", "Sangat mudah terbakar"],
    tindakan: "Jika mencium bau telur busuk di area industri migas atau rawa, SEGERA lari ke arah berlawanan angin dan lapor pihak berwenang.",
    faktaMenarik: "Karena gas ini bisa melumpuhkan indra penciuman, banyak korban tidak sadar saat mereka menghirup gas ini dalam dosis mematikan."
  },
  {
    id: "amonia",
    nama: "Amonia (NH3)",
    kategori: "Bahaya",
    icon: "FlaskConical",
    deskripsi: "Gas korosif yang banyak digunakan dalam pupuk pertanian dan industri pendingin (cold storage).",
    ciriCiri: ["Bau pesing yang sangat tajam dan mencekik", "Gas tidak berwarna", "Bereaksi kuat dengan kelembaban (bisa membuat mata dan paru-paru perih)"],
    tindakan: "Jika ada kebocoran di pabrik es atau pabrik pupuk, tutup hidung dengan kain basah dan segera menjauh.",
    faktaMenarik: "Amonia mudah larut dalam air. Menyemprotkan air ke udara dapat membantu mengurangi konsentrasi gas amonia saat terjadi kebocoran."
  },
  {
    id: "benzena",
    nama: "Benzena",
    kategori: "Bahaya",
    icon: "Hexagon",
    deskripsi: "Bahan kimia cair yang sangat mudah terbakar dan merupakan bagian alami dari minyak bumi. Terkenal sebagai zat pemicu kanker (karsinogenik).",
    ciriCiri: ["Cairan bening", "Berbau manis seperti bensin", "Sangat cepat menguap di udara"],
    tindakan: "Hindari menghirup uap bahan bakar minyak terlalu lama. Jangan pernah menggunakan bensin untuk membersihkan tangan.",
    faktaMenarik: "Setiap kali Anda mengisi bensin dan mencium bau khasnya, Anda sedang menghirup sedikit uap benzena."
  },
  {
    id: "merkuri",
    nama: "Merkuri",
    kategori: "Bahaya",
    icon: "Thermometer",
    deskripsi: "Logam berat beracun yang kadang digunakan dalam penambangan emas ilegal (PETI) di beberapa sungai di Riau.",
    ciriCiri: ["Satu-satunya logam yang berbentuk cair di suhu ruang", "Berwarna perak mengkilap", "Sangat berat"],
    tindakan: "Jangan pernah menyentuh cairan merkuri. Jika masuk ke sungai, jangan konsumsi ikan dari sungai tersebut secara terus-menerus.",
    faktaMenarik: "Merkuri yang masuk ke air akan diubah oleh bakteri menjadi 'metilmerkuri', racun ganas yang menumpuk di tubuh ikan dan manusia."
  },
  {
    id: "timbal",
    nama: "Timbal (Pb)",
    kategori: "Bahaya",
    icon: "Weight",
    deskripsi: "Logam berat beracun yang dulu banyak dicampur dalam bensin. Paparannya sangat berbahaya bagi perkembangan otak anak.",
    ciriCiri: ["Logam berat berwarna abu-abu", "Sangat lunak", "Partikelnya bisa beterbangan di udara karena polusi kendaraan"],
    tindakan: "Cuci tangan setelah beraktivitas di jalan raya. Jauhkan anak-anak dari paparan debu jalanan yang padat lalu lintas.",
    faktaMenarik: "Indonesia telah menghapus bensin bertimbal (Premium) secara bertahap untuk menyelamatkan generasi masa depan dari kerusakan otak."
  },
  {
    id: "radon",
    nama: "Radon",
    kategori: "Bahaya",
    icon: "Radiation",
    deskripsi: "Gas radioaktif alami yang berasal dari peluruhan uranium di dalam tanah dan bebatuan.",
    ciriCiri: ["Tidak terlihat", "Tidak berbau", "Tidak berasa"],
    tindakan: "Pastikan rumah selalu memiliki ventilasi silang (jendela yang berhadapan) agar gas dari tanah tidak terperangkap di dalam ruangan.",
    faktaMenarik: "Radon adalah penyebab kanker paru-paru terbesar kedua di dunia setelah kebiasaan merokok."
  },
  {
    id: "karbon-monoksida",
    nama: "Karbon Monoksida (CO)",
    kategori: "Bahaya",
    icon: "AlertOctagon",
    deskripsi: "Dikenal sebagai 'Silent Killer' (Pembunuh Senyap). Dihasilkan dari pembakaran yang tidak sempurna seperti knalpot mesin atau genset.",
    ciriCiri: ["Sama sekali tidak berbau", "Tidak berwarna", "Sangat mematikan meski dalam jumlah kecil"],
    tindakan: "Jangan pernah menyalakan genset di dalam rumah atau garasi tertutup. Jangan tidur di mobil dengan AC menyala dan kaca tertutup.",
    faktaMenarik: "Gas CO mengikat sel darah merah 200 kali lebih kuat dibanding oksigen, membuat korban lemas dan meninggal tanpa sadar."
  },
  {
    id: "oksigen",
    nama: "Oksigen (O2)",
    kategori: "Aman",
    icon: "Leaf",
    deskripsi: "Gas kehidupan yang kita hirup setiap saat. Di lingkungan industri, O2 murni digunakan dalam proses pengelasan.",
    ciriCiri: ["Tidak berwarna", "Tidak berbau", "Menyokong pembakaran"],
    tindakan: "Oksigen murni sangat reaktif. Jauhkan oli atau minyak dari tabung oksigen bertekanan tinggi karena bisa memicu ledakan spontan.",
    faktaMenarik: "Tanpa oksigen, api tidak mungkin menyala. Itulah mengapa menutupi api dengan selimut basah bisa memadamkannya."
  },
  {
    id: "gas-helium",
    nama: "Gas Helium",
    kategori: "Aman",
    icon: "PartyPopper",
    deskripsi: "Gas yang sangat ringan, digunakan untuk mengisi balon terbang atau alat medis (MRI).",
    ciriCiri: ["Sangat ringan (lebih ringan dari udara)", "Tidak berwarna dan tidak berbau", "Tidak mudah terbakar"],
    tindakan: "Walau aman, JANGAN sengaja menghirup helium dari balon untuk mengubah suara, karena bisa menyebabkan pingsan akibat kekurangan oksigen.",
    faktaMenarik: "Gas helium di bumi ditambang dari kantong gas alam, bukan diambil dari udara bebas."
  },
  {
    id: "tanah-liat-bentonit",
    nama: "Tanah Liat Bentonit",
    kategori: "Potensial",
    icon: "Mountain",
    deskripsi: "Jenis tanah liat yang bisa mengembang saat basah. Sering dipakai sebagai lumpur pengeboran di industri migas.",
    ciriCiri: ["Bentuknya seperti bubuk atau bongkahan padat", "Menjadi sangat licin dan mengembang saat terkena air", "Dapat menyerap racun"],
    tindakan: "Jika menemukannya di area proyek, berhati-hatilah saat hujan karena tanah ini akan sangat licin dan menjebak roda kendaraan.",
    faktaMenarik: "Selain untuk bor minyak, bentonit yang dimurnikan juga digunakan dalam produk kecantikan (masker wajah) dan pasir kucing (cat litter)."
  },
  {
    id: "pasir-silika",
    nama: "Pasir Silika",
    kategori: "Potensial",
    icon: "Grip",
    deskripsi: "Pasir dengan kandungan kuarsa tinggi yang banyak ditemukan di daratan Riau. Digunakan dalam pengeboran (fracking) dan pabrik kaca.",
    ciriCiri: ["Butirannya halus sampai kasar", "Warnanya putih cerah hingga kecoklatan", "Mengandung kristal silika yang keras"],
    tindakan: "Hindari menghirup debu pasir ini dalam jangka panjang karena bisa menyebabkan penyakit paru-paru silikosis.",
    faktaMenarik: "Kaca jendela rumah Anda, layar smartphone, dan panel surya, semua bahan baku utamanya berasal dari pasir silika."
  },
  {
    id: "air-formasi",
    nama: "Air Formasi (Air Terproduksi)",
    kategori: "Bahaya",
    icon: "Waves",
    deskripsi: "Air purba yang ikut terangkat ke permukaan saat memompa minyak bumi. Air ini berasal dari kedalaman ribuan meter.",
    ciriCiri: ["Sangat asin (lebih asin dari air laut)", "Panas dan sering berbau logam/belerang", "Mengandung sisa minyak dan mineral berat"],
    tindakan: "Jika melihat genangan di sekitar pipa minyak yang bocor, jangan sentuh airnya karena dapat merusak kulit dan mencemari tanah.",
    faktaMenarik: "Perusahaan minyak di Riau menggunakan teknologi khusus untuk menginjeksikan kembali air ini ke perut bumi agar lingkungan tetap terjaga."
  }
];
