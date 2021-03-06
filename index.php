<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="noindex, nofollow" />
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js'></script>
    <script src="js/jquery.cookie.js"></script>
    <script src="js/load.js"></script>
    <script src="js/function.js"></script>
    <title>SmartDoga</title>
</head>
<body>
    <div class="all">
        <div class="menu">
            <div class="dogaToko">動画投稿</div>
            <div class="addTab">タブ追加</div>
            <div class="removeTab">タブ並べ替え・削除</div>
        </div>
        <div class="modal">
        </div>
        <div class="main">
<!--
            <div class="post">
                <form>
                    <input class="url" type="text" placeholder="YouTube、ニコニコ動画のURLを投稿してください">
                    <input class="tokoBtm" type="submit" value="投稿"><br>
                    <select class="genreSelect">
                        <option value="">ジャンルを選択</option>
                        <option value="sports">スポーツ</option>
                        <option value="technology">テクノロジー</option>
                        <option value="news">ニュース</option>
                        <option value="game">ゲーム</option>
                        <option value="animal">動物</option>
                        <option value="product">商品紹介</option>
                        <option value="room">部屋紹介</option>
                        <option value="tv">テレビ番組</option>
                        <option value="youtuber">YouTuber</option>
                        <option value="great">凄技</option>
                        <option value="music">音楽</option>
                        <option value="muscle">筋肉</option>
                    </select>
                </form>
            </div>
        -->

            <div class="tab">
            </div>

            <div class="content">
                <div class="sports">
                </div>
                <div class="technology">
                </div>
                <div class="news">
                </div>
                <div class="game">
                </div>
                <div class="animal">
                </div>
                <div class="product">
                </div>
                <div class="room">
                </div>
                <div class="tv">
                </div>
                <div class="youtuber">
                </div>
                <div class="great">
                </div>
                <div class="music">
                </div>
                <div class="muscle">
                </div>
                <div class="setting">
                </div>
            </div>
        </div>

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
</body>
</html>
