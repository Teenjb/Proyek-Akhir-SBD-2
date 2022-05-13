# Proyek-Akhir-SBD-2
Deskripsi Singkat : Aplikasi untuk merekam rekam jejak service kendaraan (mobil dan motor). Sebuah akun bisa memiliki beberapa kendaraan yang nantinya setiap kali service dapat di rekam apa saja yang sudah di service.

Deskripsi Lengkap : 
1. Aplikasi yang digunakan berbasis website dan akan menggunakan react js.
2. Koneksi dengan postgres menggunakan mongoos yang terhubung ke server di azure.
3. Tabel terdiri dari 4 jenis, yaitu User, Kendaraan, Onderdil, dan Record Service.

List Tabel dan deskripsinya:
1) Tabel User = berisi list akun dari user dan admin (kostumer atau admin), user berarti untuk kostumer dan admin untuk pegawai.
2) Tabel Kendaraan = Tabel yang berisi Jenis dan Merek kendaraannya, misal merek kendaraannya Honda dan jenisnya BeAT.
3) Tabel Onderdil = berisi list onderdil dan harganya.
4) Tabel Record Service = berisi list service kendaraan dari setiap kostumer yang terdiri dari kendaraan dan servis onderdil apa saja yang sudah dilakukan beserta total biaya servis.
