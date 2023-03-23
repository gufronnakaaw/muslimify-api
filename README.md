<div align="center">

# Muslimify API

</div>
<p align="center">Hai, selamat datang di repository Muslimify API.</p>
<p align="center">Muslimify API merupakan salah satu endpoint berbahasa indonesia penyedia ayat suci alqur'an, doa harian, quote dan sebagainya, yang bisa diakses secara gratis dan dapat digunakan kapan saja.</p>
<p align="center">Data yang ada di repo ini diambil dari beberapa repo yang sudah lebih dulu membuat API Al-Qur'an.</p>

# Overview

<p align="left">Version 1 :</p>

| Menu            |                     Penjelasan Singkat                      |                          Endpoint                           |
| --------------- | :---------------------------------------------------------: | :---------------------------------------------------------: |
| Asmaul Husna    |                  Menampilkan Asmaul Husna                   |                     /api/v1/asmaulhusna                     |
| List Surah      |           Menampilkan List Surah Dalam Al-Qur'an            |                        /api/v1/surah                        |
| Get Surah       |  Menampilkan Surah Dalam Al-Qur'an Berdasarkan Nomer Surah  |                 /api/v1/surah/:nomor_surah                  |
| Get Ayat        | Menampilkan Ayat Al-Qur'an Berdasarkan Nomer Surah dan Ayat |              /api/v1/surah/:nomor_surah/:ayat               |
| Niat Shalat     |             Menampilkan Semua Niat Shalat Wajib             |                     /api/v1/niatshalat                      |
| Get Niat Shalat |       Menampilkan Niat Shalat Wajib Berdasarkan Waktu       | /api/v1/niatshalat/:waktu (subuh/dzuhur/ashar/maghrib/isya) |
| Get Quote       |           Menampilkan Quotes Islami Secara Random           |                        /api/v1/quote                        |
| Get Doa Harian  |                 Menampilkan Doa-doa harian                  |                      /api/v1/doaharian                      |

<p align="left">Version 2 :</p>

| Menu            |                    Penjelasan Singkat                     |                         Endpoint                          |
| --------------- | :-------------------------------------------------------: | :-------------------------------------------------------: |
| Asmaul Husna    |                 Menampilkan Asmaul Husna                  |                    /api/v2/asmaulhusna                    |
| List Surah      |          Menampilkan List Surah Dalam Al-Qur'an           |                       /api/v2/surah                       |
| Get Surah       | Menampilkan Surah Dalam Al-Qur'an Berdasarkan Nomer Surah |               /api/v2/surah?number=(1-114)                |
| Niat Shalat     |            Menampilkan Semua Niat Shalat Wajib            |                    /api/v2/niatshalat                     |
| Get Niat Shalat |      Menampilkan Niat Shalat Wajib Berdasarkan Waktu      | /api/v2/niatshalat?time=(subuh/dzuhur/ashar/maghrib/isya) |
| Get Quote       |          Menampilkan Quotes Islami Secara Random          |                       /api/v2/quote                       |
| Get Doa Harian  |                Menampilkan Doa-doa harian                 |                     /api/v2/doaharian                     |

# Apa yang baru?

- Penambahan caching untuk mempercepat response
- Quote baru yang diambil dari ayat quran/hadits
- Pemberian latin untuk setiap surah

# Credit

- Kemenag - [Quran Kemenag](https://quran.kemenag.go.id)
- Zhirr - [Zhirr](https://github.com/Zhirrr)

# Live API

[https://apimuslimify.vercel.app](https://apimuslimify.vercel.app)

# Note:

<p>Pergunakan API ini dengan bijak.</p>
<p>Semoga bermanfaat - Author.</p>
