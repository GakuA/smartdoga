<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js'></script>
    <script src="js/jquery.cookie.js"></script>
    <script src="js/load.js"></script>
    <script src="js/function.js"></script>
    <title>SmartTube</title>
</head>
<body>
    <div class="all">
        <div class="main">
            <div>
                <form>
                    <input class="url" type="text" placeholder="YouTube、ニコニコ動画のURLを投稿してください">
                    <input class="tokoBtm" type="submit" value="投稿">
                </form>
            </div>

            <div class="tab">
            </div>
        </div>

        <div class="content">
                <div class="first">
                    <div>
                        <h4>興味があるジャンルを選択して下さい</h4>
                    </div>
                    <form class="select">
                        <label>
                            <input type="checkbox" id="sports">スポーツ
                        </label>
                        <label>
                            <input type="checkbox" id="technology">テクノロジー
                        </label>
                        <label>
                            <input type="checkbox" id="news">ニュース
                        </label>
                        <label>
                            <input type="checkbox" id="game">ゲーム
                        </label>
                        <label>
                            <input type="checkbox" id="animal">動物
                        </label>
                        <label>
                            <input type="checkbox" id="product">商品紹介
                        </label>
                        <label>
                            <input type="checkbox" id="room">部屋紹介
                        </label>
                        <label>
                            <input type="checkbox" id="tv">テレビ番組
                        </label>
                        <label>
                            <input type="checkbox" id="youtuber">YouTuber
                        </label>
                        <label>
                            <input type="checkbox" id="great">凄技
                        </label>
                        <label>
                            <input type="checkbox" id="music">音楽
                        </label>
                        <label>
                            <input type="checkbox" id="muscle">筋肉
                        </label>
                        <input type="button" id="firstBtn" value="はじめる">
                    </form>
                </div>

        </div>

    </div>
</body>
</html>
