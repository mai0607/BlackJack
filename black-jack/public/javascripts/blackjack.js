var coin = 1000;  // プレーヤーの持ち金
var vat = 0;      // 掛け金
var userName = "";

// カード
var card;
var player_card;
var com_card;
var tmp_card = 0;

// ポイント
var player_point = 0;
var com_point = 0;
var p_count = 0;

// ポイント計算用
var point = 0;
var tmp_point = 0;

function init() {
    $("#kakekin").show();
    $("#bet").show();
    $("#stage").hide();
    $("#judg").hide();
    $("#next").hide();

    // カード
    card = new Array(54);
    for (ii = 0; ii < 54; ii++) card[ii] = 0;

    player_card = new Array(12);
    for (ii = 0; ii < 12; ii++) player_card[ii] = 0;

    com_card = new Array(12);
    for (ii = 0; ii < 12; ii++) com_card[ii] = 0;

    tmp_card = 0;


    for (var i = 0; i < 12; i++) {
        image(player_card[i], "player_card" + i);
    }
    image(53, "com_card0");
    for (var i = 1; i < 12; i++) {
        image(com_card[i], "com_card" + i);
    }

}

// 賭け金選択
function bet_serect() {
    bet = $('#kakekin').val();

    if (bet > coin) {
        alert("掛け金が所持金を上回っています");
        return;
    } else if (coin == 0) {
        alert("賭け金をリセットします");
        coin = 1000;
    }

    coin = coin - bet;
    $('#coin').text("所持金 : " + coin);
    console.log("賭け金は" + bet);

    // 賭け金を変えられなくする
    $("#kakekin").hide();
    $("#bet").hide();

    $("#stage").show();
    $('#bet_coin').text("賭け金 : " + bet);


    card_choice();

}


// はじめにカードを配る
function card_choice() {
    com_card[0] = hit();
    com_point = point_count(com_card);
    console.log("com_card[0] : " + com_card[0]);

    com_card[1] = hit();
    com_point = point_count(com_card);
    image(com_card[1], "com_card1");
    console.log("com_card[1] : " + com_card[1]);

    player_card[0] = hit();
    player_point[0] = point_count(player_card);
    image(player_card[0], "player_card0");
    console.log("player_card[0] : " + player_card[0]);

    player_card[1] = hit();
    player_point = point_count(player_card);
    image(player_card[1], "player_card1");
    console.log("player_card[1] : " + player_card[1]);

    p_count = 2;
}


// 得点カウント
function point_count(tmp_card) {
    var a = 0;
    tmp_point = 0;

    for (var i = 0; tmp_card[i] != 0; i++) {
        point = tmp_card[i] % 13;

        if (point == 10 || point == 11 || point == 12 || point == 0) {
            //　絵札が出た時
            tmp_point += 10;
        } else if (point == 1) {
            // Aが出た時覚える
            tmp_point += 1;
            a = 1;
        } else {
            // 通常
            tmp_point += point;
        }
    }

    // Aを11で捉えて21より大きくならない時
    if (a == 1 && tmp_point + 10 <= 21) {
        tmp_point += 10;
    }

    return tmp_point;
}


// 画像の表示
function image(card, img_id) {
    if (card == 0) {
        $("#" + img_id).hide();
    } else {
        $("#" + img_id).show();
    }
    switch (card) {
        case 0: $("#" + img_id).attr("src", "card/shiro.png"); break;

        case 1: $("#" + img_id).attr("src", "card/card_club_01.png"); break;
        case 2: $("#" + img_id).attr("src", "card/card_club_02.png"); break;
        case 3: $("#" + img_id).attr("src", "card/card_club_03.png"); break;
        case 4: $("#" + img_id).attr("src", "card/card_club_04.png"); break;
        case 5: $("#" + img_id).attr("src", "card/card_club_05.png"); break;
        case 6: $("#" + img_id).attr("src", "card/card_club_06.png"); break;
        case 7: $("#" + img_id).attr("src", "card/card_club_07.png"); break;
        case 8: $("#" + img_id).attr("src", "card/card_club_08.png"); break;
        case 9: $("#" + img_id).attr("src", "card/card_club_09.png"); break;
        case 10: $("#" + img_id).attr("src", "card/card_club_10.png"); break;
        case 11: $("#" + img_id).attr("src", "card/card_club_11.png"); break;
        case 12: $("#" + img_id).attr("src", "card/card_club_12.png"); break;
        case 13: $("#" + img_id).attr("src", "card/card_club_13.png"); break;

        case 14: $("#" + img_id).attr("src", "card/card_diamond_01.png"); break;
        case 15: $("#" + img_id).attr("src", "card/card_diamond_02.png"); break;
        case 16: $("#" + img_id).attr("src", "card/card_diamond_03.png"); break;
        case 17: $("#" + img_id).attr("src", "card/card_diamond_04.png"); break;
        case 18: $("#" + img_id).attr("src", "card/card_diamond_05.png"); break;
        case 19: $("#" + img_id).attr("src", "card/card_diamond_06.png"); break;
        case 20: $("#" + img_id).attr("src", "card/card_diamond_07.png"); break;
        case 21: $("#" + img_id).attr("src", "card/card_diamond_08.png"); break;
        case 22: $("#" + img_id).attr("src", "card/card_diamond_09.png"); break;
        case 23: $("#" + img_id).attr("src", "card/card_diamond_10.png"); break;
        case 24: $("#" + img_id).attr("src", "card/card_diamond_11.png"); break;
        case 25: $("#" + img_id).attr("src", "card/card_diamond_12.png"); break;
        case 26: $("#" + img_id).attr("src", "card/card_diamond_13.png"); break;

        case 27: $("#" + img_id).attr("src", "card/card_heart_01.png"); break;
        case 28: $("#" + img_id).attr("src", "card/card_heart_02.png"); break;
        case 29: $("#" + img_id).attr("src", "card/card_heart_03.png"); break;
        case 30: $("#" + img_id).attr("src", "card/card_heart_04.png"); break;
        case 31: $("#" + img_id).attr("src", "card/card_heart_05.png"); break;
        case 32: $("#" + img_id).attr("src", "card/card_heart_06.png"); break;
        case 33: $("#" + img_id).attr("src", "card/card_heart_07.png"); break;
        case 34: $("#" + img_id).attr("src", "card/card_heart_08.png"); break;
        case 35: $("#" + img_id).attr("src", "card/card_heart_09.png"); break;
        case 36: $("#" + img_id).attr("src", "card/card_heart_10.png"); break;
        case 37: $("#" + img_id).attr("src", "card/card_heart_11.png"); break;
        case 38: $("#" + img_id).attr("src", "card/card_heart_12.png"); break;
        case 39: $("#" + img_id).attr("src", "card/card_heart_13.png"); break;

        case 40: $("#" + img_id).attr("src", "card/card_spade_01.png"); break;
        case 41: $("#" + img_id).attr("src", "card/card_spade_02.png"); break;
        case 42: $("#" + img_id).attr("src", "card/card_spade_03.png"); break;
        case 43: $("#" + img_id).attr("src", "card/card_spade_04.png"); break;
        case 44: $("#" + img_id).attr("src", "card/card_spade_05.png"); break;
        case 45: $("#" + img_id).attr("src", "card/card_spade_06.png"); break;
        case 46: $("#" + img_id).attr("src", "card/card_spade_07.png"); break;
        case 47: $("#" + img_id).attr("src", "card/card_spade_08.png"); break;
        case 48: $("#" + img_id).attr("src", "card/card_spade_09.png"); break;
        case 49: $("#" + img_id).attr("src", "card/card_spade_10.png"); break;
        case 50: $("#" + img_id).attr("src", "card/card_spade_11.png"); break;
        case 51: $("#" + img_id).attr("src", "card/card_spade_12.png"); break;
        case 52: $("#" + img_id).attr("src", "card/card_spade_13.png"); break;

        case 53: $("#" + img_id).attr("src", "card/card_back.png"); break;

        default: console.log("失敗");

    }
}


// カードを引く
function hit() {
    tmp_card = Math.floor(Math.random() * (52 + 1 - 1)) + 1;

    while (card[tmp_card] == 1) {
        tmp_card = Math.floor(Math.random() * (52 + 1 - 1)) + 1;
    }

    card[tmp_card] = 1;
    return tmp_card;
}


// HITの処理
function p_hit() {
    player_card[p_count] = hit();
    player_point = point_count(player_card);
    image(player_card[p_count], "player_card" + p_count);
    console.log("player_card : " + player_card[p_count]);
    p_count++;

    $("#DOUBLE").hide();
}


// STANDの処理
function stand() {
    image(com_card[0], "com_card0");

    // COMは16点に達するまでカードを引く
    var j = 2;
    while (com_point < 16) {
        com_card[j] = hit();
        com_point = point_count(com_card);
        console.log("com_card : " + com_card[j]);
        image(com_card[j], "com_card" + j);
        j++;
    }

    if (player_point == 21 && player_card[2] == 0 && com_point == 21 && com_card[2] == 0) {
        // 両方ともブラックジャックの時
        bet = 0; $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("DROW");
    } else if (player_point == 21 && player_card[2] == 0) {
        // プレイヤーがブラックジャックの時
        coin += bet * 3;
        bet = 0; $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("YOU WIN");
    } else if (com_point == 21 && com_card[2] == 0) {
        // COMがブラックジャックの時
        bet = 0; $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("YOU LOSE");
    }

    if (player_point > 22) {
        // プレイヤーBUST
        bet = 0;
        $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("YOU LOSE");
    } else if (player_point > com_point) {
        // プレーヤーの勝ち
        coin += bet * 2;
        bet = 0;
        $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("YOU WIN");
        // return 0;
    } else if (com_point => 22) {
        // COMがBUST
        coin += bet * 2;
        bet = 0;
        $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("YOU WIN");
    } else if (player_point < com_point) {
        // comの勝ち
        bet = 0;
        $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("YOU LOSE");
    }

    if (player_point == com_point) {
        bet = 0; $('#bet_coin').text("賭け金 : " + bet);
        $('#coin').text("持ち金 : " + coin);
        $("#next").show();
        $('#judg').show();
        $('#judg').text("DROW");
    }

    $.ajax({
        url: "/blackjack/update",
        type: 'GET',
        data: { name: userName, coin: coin }
    }).done(function (data) {
        // alert("ok");
    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert("error");
    })
}


// DOUBLEの処理
function double() {
    p_hit();
    coin -= bet;
    bet += bet;
    $('#coin').val("持ち金 : " + coin);
    $('#bet_coin').text("賭け金 : " + bet);
    stand();
}
