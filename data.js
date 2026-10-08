/* ====== DATA KONTEN PT FAST (dari Company Profile 24 Agustus 2026) ======
   Edit di sini untuk mengubah isi web. Gambar ada di assets/img/ */
const IMG = (n) => `assets/orang/${n}.jpg`;
window.DATA = {
  wa: '628131628876',
  nav: [
    { t: 'Tentang', href: 'tentang.html', sub: [['Tentang Kami', 'tentang.html#tentang'], ['Visi & Misi', 'tentang.html#visi'], ['Key Personnel', 'tentang.html#personel']] },
    { t: 'Fasilitas', href: 'fasilitas.html', sub: [['Fasilitas Produksi', 'fasilitas.html#fasilitas'], ['Jenis Sediaan', 'fasilitas.html#sediaan'], ['Mesin Produksi', 'fasilitas.html#mesin'], ['Laboratorium', 'fasilitas.html#lab']] },
    { t: 'Keunggulan', href: 'keunggulan.html' },
    { t: 'Sertifikasi', href: 'sertifikasi.html', sub: [['Izin & Sertifikasi', 'sertifikasi.html#sertifikasi'], ['Lampiran Dokumen', 'sertifikasi.html#dokumen']] },
    { t: 'Kerjasama', href: 'kerjasama.html' },
    { t: 'Maklon', href: 'maklon.html' },
    { t: 'Produk', href: 'produk.html' },
    { t: 'Klien', href: 'klien.html', sub: [['Klien & Distributor', 'klien.html']] },
    { t: 'Kontak', href: 'kontak.html' }
  ],
  misi: [
    'Menyediakan obat tradisional yang aman, berkhasiat, dan bermutu sesuai aspek CPOTB dan Sistem Jaminan Halal.',
    'Menjadikan lingkungan kerja perusahaan yang aman, nyaman, bersih, tertib dan teratur.',
    'Melakukan penelitian dan pengembangan produk inovatif untuk berperan dalam industri obat tradisional di pasar nasional dan internasional.',
    'Mengembangkan kompetensi sumber daya manusia dengan nilai keimanan, keilmuan, dan pengamalannya sehingga berintegritas, peduli sesama, profesional, dan beretos kerja tinggi.'
  ],
  personel: [
    ['Fanny Hakiki, S.H', 'Komisaris', 'org-fanny', 'Komisaris perusahaan sejak 2011. Lulusan Fakultas Hukum Universitas Trisakti (1999), berminat pada pengobatan tradisional Thibbun Nabawi dan menjadi terapis bekam sejak 2007.'],
    ['Maheda Dwinarendra, MBA', 'Direktur', 'org-maheda', 'Direktur dan pemilik sejak 2011. MBA Newport University (California), berpengalaman di perbankan dan pengembangan properti, lalu fokus membangun fasilitas Industri Obat Tradisional di Rembang, Ponorogo, dan Cisalak-Depok.'],
    ['apt. Aresa Romapsari, S.Farm', 'Apoteker Penanggung Jawab (APJ)', 'org-aresa', 'Apoteker di Departemen Quality Assurance. Sarjana Farmasi Universitas Bhakti Kencana, profesi apoteker Universitas 17 Agustus 1945 Jakarta, pernah berkarier di PT Pharos Indonesia dan PT Bayer Indonesia.'],
    ['Nugroho, S.E', 'Keuangan, Admin dan Pajak', 'org-nugroho', 'Sarjana Akuntansi Universitas Borobudur dengan sertifikasi Brevet Pajak A & B. Berpengalaman di bidang keuangan pada PT Rekapastika Asri dan Lippo Mall Indonesia.'],
    ['Sajda Haykal, S.I.A', 'Sales & (Digital) Marketing', 'org-sajda', 'Sarjana Administrasi Universitas Indonesia. Bergabung di PT FAST sejak Juni 2023 menangani penjualan dan pemasaran.'],
    ['Rizka Sulistiowaty, S.Farm', 'Riset & Pengembangan dan Regulatori', 'org-rizka', 'Sarjana Farmasi Universitas Pancasila. Berpengalaman di R&D, regulatori, dan manajer quality control pada industri herbal.']
  ],
  fasProduksi: [
    ['Proses Produksi', 'fas-produksi', 'Sistem produksi sesuai CPOTB/GMP, dengan mesin modern, akses ruang produksi yang ketat, serta mengutamakan kebersihan, keamanan, efisiensi, dan pengelolaan limbah.'],
    ['R&D dan Regulatori', 'fas-rnd', 'Setiap produk dibuat dengan konsep dan formula hasil penelitian dan pengembangan bersama konsultan produk herbal, sesuai standar mutu acuan BPOM.'],
    ['Quality Control dan Quality Assurance', 'fas-qa', 'Memastikan kualitas bahan baku dan bahan kemas sesuai spesifikasi dan acuan BPOM, serta dokumentasi dan daya telusur proses produksi.'],
    ['Fasilitas Ekstraksi', 'fas-ekstraksi', 'Ekstraksi (maserasi, cold-pressed) menarik zat aktif simplisia secara maksimal sehingga kadar zat aktif tinggi.']
  ],
  fasPenunjang: [
    ['Lab Fisika Kimia', 'fas-fiskim', 'Dirancang mendukung proses produksi dengan peralatan modern dan metode ilmiah terkini.'],
    ['Lab Mikrobiologi', 'fas-mikro', 'Pengujian dan analisis mikroorganisme seperti bakteri dan jamur untuk menjamin produk aman.'],
    ['Sistem Tata Udara (STU)', 'fas-stu', 'HVAC canggih yang menjaga suhu, kelembapan, tekanan, jumlah partikel, dan pergantian udara sesuai parameter BPOM.'],
    ['Sistem Pengolahan Air (SPA)', 'fas-spa', 'Water treatment plant berbahan Stainless Steel 316L dengan filtrasi, reverse osmosis, UV, membran, dan ozonisasi.']
  ],
  sediaan: [
    ['Kapsul', 'fa-capsules', 'Ekstrak herbal berkualitas dengan zat aktif homogen dalam cangkang kapsul 100% gelatin bersertifikat halal BPJPH.'],
    ['Tablet', 'fa-tablets', 'Melalui uji kekerasan, kerapuhan, waktu hancur, keseragaman bobot, dan stabilitas sesuai spesifikasi.'],
    ['Serbuk Oral', 'fa-mortar-pestle', 'Ukuran partikel seragam, kandungan zat aktif homogen, stabil secara fisik dan kimia, mudah larut.'],
    ['Cairan Obat Dalam (COD)', 'fa-bottle-droplet', 'Zat aktif homogen, stabil secara fisik dan kimia, serta bebas kontaminasi mikroba.'],
    ['Cairan Obat Luar (COL)', 'fa-pump-soap', 'Zat aktif homogen, stabil secara fisik dan kimia, serta bebas kontaminasi mikroba.']
  ],
  mesin: [
    ['Kapsul', [['Mesin Super Mixer Otomatis', 'm-kapsul-mixer'], ['Mesin Kapsul Otomatis', 'm-kapsul-mesin']]],
    ['Tablet', [['Mesin Super Mixer Otomatis', 'm-kapsul-mixer'], ['Mesin Tablet Otomatis', 'm-tablet-mesin']]],
    ['Serbuk Oral', [['Mesin Super Mixer Otomatis', 'm-kapsul-mixer'], ['Mesin Sachet Otomatis', 'm-so-sachet']]],
    ['COD', [['Mesin Liquid Bottling Otomatis', 'm-cod-botol'], ['Mesin Filling Sachet Liquid Otomatis', 'm-cod-sachet'], ['Mesin Liquid Homogenizer Otomatis', 'm-cod-homog']]],
    ['COL', [['Mesin Liquid Bottling Otomatis', 'm-cod-botol'], ['Mesin Filling Sachet Liquid Otomatis', 'm-cod-sachet'], ['Mesin Liquid Homogenizer Otomatis', 'm-cod-homog']]],
    ['Penunjang (Ekstraksi)', [['Mesin Rotary Evaporator', 'm-eks-evap'], ['Mesin Maserator Otomatis', 'm-eks-maserator'], ['Mesin Press Otomatis', 'm-eks-press']]]
  ],
  lab: [
    ['Research & Development', [['Rotavapor', 'm-rnd-rotavapor'], ['Oven', 'm-rnd-oven'], ['Showcase', 'm-rnd-showcase']]],
    ['Mikrobiologi', [['Spektrofotometer UV-Vis', 'm-mik-spektro'], ['Biological Safety Cabinet II Kelas A2', 'm-mik-bsc'], ['Incubator', 'm-mik-inkubator'], ['Autoclave', 'm-mik-autoclave'], ['Colony Counter', 'm-mik-colony'], ['Timbangan Analitik', 'm-mik-timbangan'], ['Hotplate', 'm-mik-hotplate'], ['Climatic Chamber', 'm-mik-climatic']]],
    ['Fisika Kimia', [['High Performance Microscope', 'm-fk-mikroskop'], ['Disintegration Tester', 'm-fk-disintegrasi'], ['Friability Tester', 'm-fk-friabilitas'], ['Digital Hardness Tester', 'm-fk-hardness'], ['Lemari Asam', 'm-fk-lemari-asam'], ['Viscosity Meter', 'm-fk-viskositas'], ['Digital pH Meter', 'm-fk-ph']]]
  ],
  gurus: [
    ['Prof. Dr. Apt. Suwijoyo Pramono, DEA', 'guru-suwijoyo', 'Profesor bidang Fitokimia dan Fitoterapi, dosen Fakultas Farmasi UGM sejak 1977. Pernah menjadi tenaga ahli penilaian obat tradisional BPOM RI, Chair ASEAN Traditional Medicine & Health Supplement Scientific Committee, dan anggota Advisory Panel WHO.'],
    ['Prof. Dr. Apt. Sidik Oemar', 'guru-sidik', 'Guru Besar Emeritus Farmakognosi Fakultas Farmasi Universitas Padjadjaran. Penelitiannya melahirkan Cursil, Kiranti, dan Natura Platelet, serta meraih Tanda Kehormatan Peneliti Utama (1990) dan Satya (1992).']
  ],
  izin: [
    'Akta Pendirian', 'SK MENHUKHAM', 'Tanda Daftar Perusahaan (TDP)', 'Surat Izin Usaha Perdagangan (SIUP) Menengah', 'NPWP', 'Izin Usaha Industri', 'Nomor Izin Berusaha: 9120104371286'
  ],
  iot: [
    'Keputusan Menteri Kesehatan RI, Izin Industri Obat Tradisional (IOT), 5 Desember 2016, No. HK.02.06.IOT/V/0508/2016',
    'Sertifikat IOT melalui e-licensing (OSS), 24 Mei 2019, No. FP.02.03/IV/0400/2019',
    'Sertifikat CPOTB/GMP, 23 Januari 2025, No. PB-UMKU:912010437128600010009'
  ],
  cpotb: [['Kapsul', 'PW-S.02.01.1.43.431.01.25-0022'], ['Tablet', 'PW-S.02.01.1.43.431.01.25-0021'], ['Cairan Obat Dalam (COD)', 'PW-S.02.01.1.43.431.01.25-0023'], ['Serbuk Oral', 'PW-S.02.01.1.43.431.01.25-0020'], ['Cairan Obat Luar (COL)', 'PW-S.02.01.1.43.431.01.25-0024']],
  halal: ['Kelulusan Pelatihan Interpretasi dan Implementasi Sistem Jaminan Halal', 'Halal Assurance System', 'Sertifikat Halal MUI/BPJPH'],
  riset: [
    ['Prof. Dr. Wahyu Widowati, M.Si.', 'kj-wahyu', 'Guru Besar Biologi Molekular, Universitas Kristen Maranatha', 'Formulasi herbal medicine untuk meningkatkan sistem imun (in vitro); regulasi adipogenesis oleh ekstrak kulit manggis dan xanthones. Saat ini meneliti obat hepatoprotektor kategori Obat Herbal Terstandar (OHT) bersama PT FAST dengan pendampingan Direktorat Standardisasi BPOM.'],
    ['Prof. Dr. rer. nat. apt. Deni Rachmat, M.Si.', 'kj-deni', 'Guru Besar Fakultas Farmasi, Universitas Pancasila', 'Nanopartikel kurkumin dan temulawak, tablet nanopartikel ekstrak terstandar daun pulai sebagai antidiabetes, serta aktivitas antibakteri fraksi aktif jahe.']
  ],
  kjFoto: [
    ['kj-kj1', 'H. Maheda Dwinarendra, MBA bersama Prof. Dr. Wahyu Widowati, M.Si (Universitas Kristen Maranatha)'],
    ['kj-kj2', 'H. Maheda Dwinarendra, MBA bersama Prof. Dr. rer. nat. apt. Deni Rachmat, M.Si (Universitas Pancasila)'],
    ['kj-kj3', 'H. Maheda Dwinarendra, MBA bersama Hanna Sari Widya Kusuma, S.Si (PT Aretha Medika Utama)']
  ],
  oht: [
    ['Prof. Dr. apt. Fadlina Chany Saputri, M.Si.', 'kj-fadlina', 'Guru Besar Farmakologi dan Toksikologi, Fakultas Farmasi UI', 'Kapsul jamu kombinasi jahe merah dan secang untuk membantu sirkulasi darah; prototipe kapsul herbal Memorin (kunyit dan pare) untuk membantu memelihara fungsi kognitif.'],
    ['Prof. Dr. Melva Louisa, S.Si., M.Biomed.', 'kj-melva', 'Guru Besar Farmakologi dan Terapeutik, FKUI', 'GINGEROSOME: pengembangan dan standardisasi nanovesikel eksosom jahe merah sebagai inovasi Obat Herbal Terstandar (OHT) untuk perokok.'],
    ['Prof. Dr. apt. Syamsudin Abdillah, M.Biomed', 'kj-syamsudin', 'Guru Besar dan Dekan FIKF, Universitas Gunadarma', 'Pengembangan poliherbal propolis, jinten hitam, dan sambiloto sebagai antituberkulosis.']
  ],
  ffui: ['kj-ffui1', 'kj-ffui2', 'kj-ffui3'],
  maklon: [
    ['Konsultasi Konsep Produk', 'Berikan gambaran produk yang ingin dibuat. Jika masih ragu, tim R&D memberi saran pemilihan formula, bahan baku, dan kemasan.'],
    ['Lengkapi Dokumen', 'Badan usaha: KTP Direktur, NPWP Badan, HKI Merek asli, SIUP, NIB. Perorangan: KTP, NPWP, HKI Merek.'],
    ['Surat Penawaran R&D dan Uji Lab', 'Setelah produk dan formula ditentukan, kami mengirim penawaran biaya R&D dan uji lab.'],
    ['Pembuatan Sampel Produk', 'Setelah penawaran disetujui dan dibayar, sampel dibuat dalam 21 hari kerja untuk uji organoleptik (rasa, warna, aroma, tekstur).'],
    ['Penawaran Biaya Nomor Izin Edar BPOM', 'Setelah prototipe disetujui, kami mengajukan biaya pendaftaran Nomor Izin Edar (NIE) sesuai tahapan.'],
    ['Pengurusan Perizinan Pendukung', 'Selain NIE BPOM, kami mengurus sertifikasi Halal di BPJPH dan HKI.'],
    ['Surat Penawaran Harga Produk', 'Berisi jumlah pemesanan, harga produk, spesifikasi bahan kemas, dan komposisi.'],
    ['Pembayaran Biaya Maklon', 'Uang muka 50% saat surat penawaran ditandatangani, sisa 50% sebelum produk dikirim (Cash Before Delivery).'],
    ['Kontrak Kerjasama Maklon', 'Surat Perjanjian Pembuatan Produk (maklon) sesuai acuan BPOM.'],
    ['Mulai Produksi', 'Produksi dimulai setelah NIE BPOM (POM TR atau POM SD) diterbitkan melalui ASROT.'],
    ['Quality Control', 'Seluruh produk wajib melewati QC mengacu pada kaidah CPOTB/GMP BPOM.'],
    ['Pengiriman Produk Jadi', 'Kami membantu pengiriman sesuai Perjanjian Kerjasama Produksi (Toll Manufacturing Contract).']
  ],
  /* [nama, gambar|null, khasiat, NIE, sediaan] */
  produkTersedia: [
    ['Amangin', 'p-amangin', 'Membantu meredakan gejala masuk angin seperti perut kembung, mual, muntah, dan sakit kepala', 'POM TR202366921', 'Kapsul'],
    ['Gamasy Jelly Gold', 'p-gamasy-jgold', 'Membantu memelihara kesehatan dengan menambah zat gizi', 'POM TR253076581', 'Kapsul (bentuk jelly)'],
    ['Magfaat', 'p-magfaat', 'Membantu meringankan gangguan lambung seperti sakit perut, perut kembung dan mual', 'POM TR256062841', 'Cairan Obat Dalam'],
    ['SamuJali', 'p-samujali', 'Membantu meredakan pegal linu', 'POM TR202389661', 'Kapsul'],
    ['Wasir Ungu', 'p-wasir-ungu', 'Membantu meringankan gejala wasir', 'POM TR172307851', 'Kapsul'],
    ['Osya Tusan', 'p-osya-tusan', 'Membantu mengurangi lendir berlebih pada daerah kewanitaan', 'POM TR172307881', 'Kapsul'],
    ['Bamanjavi', 'p-bamanjavi', 'Membantu sirkulasi darah', 'POM TR262002691', 'Serbuk Oral'],
    ['Kuwagis', 'p-kuwagis', 'Membantu meringankan gejala tekanan darah tinggi ringan', 'POM TR182314391', 'Kapsul'],
    ['Langsitea', 'p-langsitea', 'Membantu mengurangi lemak tubuh', 'POM TR256062331', 'Cairan Obat Dalam'],
    ['Bio Stong', 'p-biostrong', 'Membantu memelihara stamina', 'POM TR182213501', 'Serbuk Oral'],
    ['Mogarlia', 'p-mogarlia', 'Membantu memelihara kesehatan lambung', 'POM TR212605211', 'Cairan Obat Dalam'],
    ['Kutelaw', 'p-kutelaw', 'Membantu meringankan gangguan lambung seperti perut kembung, mual dan sakit perut', 'POM TR202356471', 'Kapsul']
  ],
  produkBeredar: [
    ['Manjavrasa', 'p-manjavrasa', 'Membantu mengurangi lendir yang berlebihan pada daerah kewanitaan', 'POM TR202263981', 'Serbuk Oral'],
    ['Gartea', 'p-gartea', 'Membantu menurunkan lemak dalam tubuh', 'POM TR182612701', 'Cairan Obat Dalam'],
    ['Renkho', 'p-renkho', 'Membantu mengurangi lemak darah', 'POM TR182315121', 'Kapsul'],
    ['Gamasy Gamat', 'p-gamasy-gamat', 'Membantu memelihara kesehatan dengan menambah zat gizi', 'POM TR202572981', 'Tablet'],
    ['Herbioma', 'p-herbioma', 'Membantu memelihara kesehatan', 'POM TR25306518', 'Kapsul'],
    ['Manjavikan', 'p-manjavikan', 'Membantu mengurangi lendir yang berlebihan pada daerah kewanitaan', 'POM TR182214261', 'Serbuk Oral'],
    ['Gluvita Capsule', 'p-gluvita', 'Membantu memelihara kesehatan kulit', 'POM SD21230341', 'Kapsul'],
    ['Gamat Emas Mahkota', 'p-gamat-emas', 'Membantu memelihara kesehatan dengan menambah zat gizi', 'POM TR212327311', 'Tablet'],
    ['Jaka Lanang', 'p-jaka-lanang', 'Membantu memelihara stamina pria', 'POM TR182312441', 'Kapsul'],
    ['Kohe Pusaka', 'p-kohe-pusaka', 'Membantu memelihara stamina pria dan wanita', 'POM TR182215811', 'Serbuk Oral'],
    ['Glowtagen C', 'p-glowtagen', 'Membantu memelihara kesehatan kulit', 'POM SD212366711', 'Kapsul']
  ],
  dokumen: [
    ['dok-78', 'Akta Pendirian & SK MENHUKHAM'], ['dok-79', 'Akta Perubahan 2024'], ['dok-80', 'TDP & SIUP'], ['dok-81', 'IUI & NPWP'], ['dok-82', 'Nomor Izin Berusaha'],
    ['dok-83', 'Sertifikat CPOTB/GMP'], ['dok-84', 'CPOTB: Kapsul'], ['dok-85', 'CPOTB: Tablet'], ['dok-86', 'CPOTB: Cairan Obat Dalam'], ['dok-87', 'CPOTB: Serbuk Oral'], ['dok-88', 'CPOTB: Cairan Obat Luar'],
    ['dok-89', 'Pelatihan Sistem Jaminan Halal & HAS'], ['dok-90', 'Sertifikat Halal Obat Tradisional (1)'], ['dok-91', 'Sertifikat Halal Obat Tradisional (2)'], ['dok-92', 'Sertifikat Halal Suplemen Kesehatan']
  ],
  marketing: [['Marketing 1', '+62 813-1628-8876', '628131628876'], ['Marketing 2', '+62 812-9061-1489', '628129061489'], ['Marketing 3', '+62 878-8938-8105', '6287889388105']]
};
