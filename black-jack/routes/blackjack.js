const express = require('express');
const router = express.Router();
const db = require('../models/index');
const { Op } = require('sequelize');
const { response } = require('express');

const pnum = 10;

// ログインチェックの関数
function check(req, res) {
    if (req.session.login == null) {
        req.session.back = '/blackjack';
        res.redirect('/users/login');
        return true;
    } else {
        return false;
    }
}

// トップページへのアクセス
router.get('/', (req, res, next) => {
    if (check(req, res)) { return };
    db.User.findOne({
        where: { name: req.session.login.name }
    }).then(usr => {
        var data = {
            coin: usr.coin,
            title: 'Blackjack',
            login: req.session.login,
            form: { find: '' },
            content: usr
        };
        res.render('blackjack/index', data);
    });
});

// 所持金の管理
router.get('/update', (req, res, next) => {
    db.User.findOne({
        where: { name: req.query.name }
    }).then(usr => {
        usr.coin = req.query.coin;
        usr.save();
    });

    res.json({
        status: "OK"
    })
});


module.exports = router;

