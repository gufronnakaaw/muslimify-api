const express = require('express');
const router = express.Router();
const caching = require('../../utils/caching');
const NodeCache = require('node-cache');
// only for development
// router.use((req, res, next) => {
//   const start = Date.now();
//   res.on('finish', () => {
//     const end = Date.now();
//     const diffSeconds = (end - start) / 1000;
//     console.log(`${req.method} ${req.url} Completed in ${diffSeconds} seconds`);
//   });
//   next();
// });

const cache = new NodeCache();

const duration = 300; // 5 minute

router.get('/surah', caching(duration), (req, res) => {
  const { number } = req.query;

  if (!number) {
    try {
      const data = require('../../datav2/surah/listsurah.json');

      return res.status(200).json({
        code: 200,
        status: 'success',
        data,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        code: 500,
        status: 'fail',
        message: 'sepertinya ada masalah pada server',
      });
    }
  }

  try {
    const data = require(`../../datav2/surah/${number}.json`);

    return res.status(200).json({
      code: 200,
      status: 'success',
      data,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(404).json({
      code: 404,
      status: 'fail',
      message: 'surah tidak ditemukan',
    });
  }
});

router.get('/niatshalat', (req, res) => {
  const { time } = req.query;

  if (!time) {
    try {
      const data = require(`../../datav2/niatshalat/all.json`);

      return res.status(200).json({
        code: 200,
        status: 'success',
        data,
      });
    } catch (error) {
      console.log(error.message);

      return res.status(500).json({
        code: 500,
        status: 'fail',
        message: 'sepertinya ada masalah pada server',
      });
    }
  }

  let id;

  switch (time) {
    case 'subuh':
      id = 1;
      break;
    case 'dzuhur':
      id = 2;
      break;
    case 'ashar':
      id = 3;
      break;
    case 'maghrib':
      id = 4;
      break;
    case 'isya':
      id = 5;
      break;
    default:
      id = null;
      break;
  }

  // if
  try {
    if (!id) {
      return res.status(404).json({
        code: 404,
        status: 'fail',
        message: 'niat shalat tidak ditemukan',
      });
    }

    const data = require(`../../datav2/niatshalat/all.json`);

    const result = data.filter((element) => element.number == id);

    return res.status(200).json({
      code: 200,
      status: 'success',
      data: result[0],
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      code: 500,
      status: 'fail',
      message: 'sepertinya ada masalah pada server',
    });
  }
});

router.get('/asmaulhusna', caching(duration), (req, res) => {
  try {
    const data = require(`../../datav2/asmaulhusna/asmaulhusna.json`);

    return res.status(200).json({
      code: 200,
      status: 'success',
      data,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      code: 500,
      status: 'fail',
      message: 'sepertinya ada masalah pada server',
    });
  }
});

router.get('/doaharian', (req, res) => {
  try {
    const data = require(`../../datav2/doaharian/doaharian.json`);

    return res.status(200).json({
      code: 200,
      status: 'success',
      data,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      code: 500,
      status: 'fail',
      message: 'sepertinya ada masalah pada server',
    });
  }
});

router.get('/quote', (req, res) => {
  try {
    const cacheResponse = cache.get('quote');
    if (cacheResponse) {
      const result = cacheResponse;
      const random = Math.floor(Math.random() * result.length);
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: result[random],
      });
    } else {
      const data = require(`../../datav2/quotes/quotes.json`);
      const random = Math.floor(Math.random() * data.length);
      cache.set('quote', data, duration);

      return res.status(200).json({
        code: 200,
        status: 'success',
        data: data[random],
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      code: 500,
      status: 'fail',
      message: 'sepertinya ada masalah pada server',
    });
  }
});
module.exports = router;
