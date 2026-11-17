EVER AFTER INVITATION — WEBSITE STARTER

CARA MENJALANKAN DI VS CODE
1. Ekstrak file ZIP.
2. Buka VS Code > File > Open Folder.
3. Pilih folder ever-after-invitation.
4. Buka index.html.
5. Pasang ekstensi "Live Server" dari Extensions (Ctrl+Shift+X).
6. Klik kanan index.html > Open with Live Server.

MENGUBAH NOMOR WHATSAPP
Nomor sudah diisi di script.js:
const whatsappNumber = "6285694914885";
Format wa.me memakai kode negara 62, tanpa angka 0 di depan, tanpa +, dan tanpa spasi.

MENGGANTI FOTO LATAR
Saat ini foto latar hero dan CTA memakai gambar online dari Unsplash. Untuk foto sendiri:
- Buat folder assets.
- Salin foto, misalnya hero-wedding.jpg.
- Di style.css, ganti URL gambar hero menjadi url("assets/hero-wedding.jpg").
- Untuk CTA, ganti URL gambar kedua dengan url("assets/foto-cta.jpg").

MENGUBAH HARGA/KONTEN
Edit teks paket langsung di index.html. Harga dan testimoni yang ada merupakan contoh awal. Testimoni diberi label TESTIMONI CONTOH; ganti hanya dengan ulasan pelanggan yang benar-benar diberikan.

PUBLIKASI GRATIS DENGAN GITHUB PAGES
1. Buat/login akun di https://github.com
2. Klik New repository, beri nama misalnya ever-after-invitation.
3. Pilih Public, lalu Create repository.
4. Upload seluruh isi folder (index.html, style.css, script.js, README.txt, dan folder assets jika ada) melalui Add file > Upload files.
5. Klik Commit changes.
6. Buka Settings > Pages.
7. Pada Build and deployment, pilih Deploy from a branch.
8. Branch: main, folder: / (root), lalu Save.
9. Tunggu proses publikasi. Alamat website biasanya:
   https://USERNAME.github.io/ever-after-invitation/
   Ganti USERNAME dengan username GitHub Anda.
10. Buka tautan tersebut untuk memastikan website tampil. Jika belum, tunggu beberapa menit lalu refresh.

CATATAN
- Tombol WhatsApp akan membuka chat ke 0856-9491-4885.
- Pastikan nomor WhatsApp aktif dan dapat menerima pesan.
- Foto Unsplash memerlukan koneksi internet. Anda boleh menggantinya dengan foto milik sendiri.
- Website ini adalah frontend statis; belum memiliki dashboard admin, database, formulir RSVP tersimpan, atau pembayaran otomatis.
