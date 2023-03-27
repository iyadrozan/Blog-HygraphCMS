README.md

# Blog dengan NextJS dan Hygraph.com

Blog ini adalah sebuah proyek yang menggunakan NextJS sebagai framework front-end dan Hygraph.com sebagai platform back-end. Blog ini menampilkan artikel-artikel yang ditulis oleh penulis dan disimpan di Hygraph.com. Blog ini juga memiliki fitur pencarian, kategori, komentar, dan pagination.

## Cara Menjalankan

Untuk menjalankan blog ini, Anda perlu menginstal Node.js dan npm terlebih dahulu. Kemudian, Anda perlu mengkloning repositori ini ke komputer Anda. Setelah itu, Anda perlu mengatur variabel lingkungan berikut:

- NEXT_PUBLIC_HYGRAPH_API_KEY: API key yang diberikan oleh Hygraph.com untuk mengakses data Anda.
- NEXT_PUBLIC_HYGRAPH_COLLECTION: Nama koleksi yang berisi artikel-artikel Anda di Hygraph.com.

Anda dapat mengatur variabel lingkungan ini di file .env.local yang berada di root folder proyek. Contoh file .env.local:

```
NEXT_PUBLIC_HYGRAPH_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_HYGRAPH_COLLECTION=blog
```

Setelah mengatur variabel lingkungan, Anda dapat menjalankan blog ini dengan perintah berikut:

```
npm install
npm run dev
```

Blog ini akan berjalan di http://localhost:3000.

## Cara Menulis Artikel

Untuk menulis artikel, Anda perlu membuat dokumen baru di koleksi yang Anda tentukan di Hygraph.com. Dokumen tersebut harus memiliki struktur sebagai berikut:

```
{
"title": "Judul artikel",
"slug": "slug-artikel",
"content": "Isi artikel dalam format Markdown",
"category": "Kategori artikel",
"date": "Tanggal artikel dalam format ISO 8601",
"image": "URL gambar utama artikel"
}
```

Contoh dokumen:

```
{
"title": "Mengenal NextJS",
"slug": "mengenal-nextjs",
"content": "# NextJS\n\nNextJS adalah sebuah framework React yang memudahkan pengembangan aplikasi web modern. NextJS memiliki fitur-fitur seperti rendering di sisi server (SSR), rendering statis (SSG), routing dinamis, optimasi gambar, dan lain-lain.",
"category": "Teknologi",
"date": "2021-12-01T10:00:00Z",
"image": "https://example.com/nextjs.jpg"
}
```

Setelah membuat dokumen baru, Anda perlu menunggu beberapa saat agar dokumen tersebut terindeks oleh Hygraph.com. Kemudian, Anda dapat melihat artikel Anda di blog ini dengan mengakses URL http://localhost:3000/[slug-artikel].
```
