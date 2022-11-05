const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Muslimify API',
        description:
            "Muslimify API merupakan salah satu endpoint berbahasa indonesia penyedia ayat suci alqur'an, doa harian, quote dan sebagainya, yang bisa diakses secara gratis dan dapat digunakan kapan saja. Baca documentasi lengkapnya di https://github.com/gufronnakaaw/muslimify-api",
        author: 'Gufronnaka Arif Wildan',
    });
});

// niat shalat
router.get('/niatshalat', (req, res) => {
    try {
        const niatshalat = require('../../data/niatshalat/all.json');

        res.status(200).json({
            status: 'success',
            data: niatshalat,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            status: 'fail',
            message: 'sepertinya ada masalah pada server',
        });
    }
});

router.get('/niatshalat/:waktu', (req, res) => {
    const { waktu } = req.params;

    try {
        const data = require(`../../data/niatshalat/${waktu}.json`);

        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);

        res.status(404).json({
            status: 'fail',
            message: `niat shalat untuk ${waktu} tidak ditemukan`,
        });
    }
});

// asmaul husna
router.get('/asmaulhusna', (req, res) => {
    try {
        const data = require('../../data/asmaulhusna/asmaulhusna.json');
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            status: 'fail',
            message: 'sepertinya ada masalah pada server',
        });
    }
});

// surah
router.get('/surah', (req, res) => {
    try {
        const data = require('../../data/surah/listsurah.json');

        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            status: 'fail',
            message: 'sepertinya ada masalah pada server',
        });
    }
});

router.get('/surah/:nomor_surah', (req, res) => {
    const { nomor_surah } = req.params;

    try {
        const data = require(`../../data/surah/${nomor_surah}.json`)[
            nomor_surah
        ];

        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error.message);

        res.status(404).json({
            status: 'fail',
            message: 'surah tidak ditemukan',
        });
    }
});

router.get('/surah/:nomor_surah/:ayat', (req, res) => {
    const { nomor_surah, ayat } = req.params;

    try {
        const dataSurah = require(`../../data/surah/${nomor_surah}.json`);

        const dataAyat = dataSurah[nomor_surah].data.find(
            (el) => parseInt(el.ayat_ke) === parseInt(ayat)
        );
        const jumlahAyat = dataSurah[nomor_surah]['jumlah_ayat'];

        if (dataAyat) {
            const data = {
                nama_surah: dataSurah[nomor_surah]['nama_surah'],
                nama_latin: dataSurah[nomor_surah]['nama_latin'],
                ayat_ke: dataAyat.ayat_ke,
                text: dataAyat.text,
                terjemahan: dataAyat.terjemahan,
            };

            return res.status(200).json({
                status: 'success',
                data,
            });
        } else {
            return res.status(404).json({
                status: 'fail',
                message: `ayat tidak ditemukan, jumlah ayat hanya ${jumlahAyat}`,
            });
        }
    } catch (error) {
        console.log(error);

        res.status(404).json({
            status: 'fail',
            message: `surah dengan nomor ${nomor_surah} tidak ditemukan`,
        });
    }
});

// quote
router.get('/quote', (req, res) => {
    try {
        const data = require('../../data/quote/quote.json');
        const randomNumber = Math.floor(Math.random() * data.length);

        res.status(200).json({
            status: 'success',
            data: {
                quote: data[randomNumber].quote,
            },
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            status: 'fail',
            message: 'sepertinya ada masalah pada server',
        });
    }
});

// doa harian
router.get('/doaharian', (req, res) => {
    try {
        const data = require('../../data/doaharian/doaharian.json');

        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            status: 'fail',
            message: 'sepertinya ada masalah pada server',
        });
    }
});

module.exports = router;
