<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/jquery.cookie.js"></script>
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
                <div class="active">トレンド</div><!--
                --><div>スポーツ</div><!--
                --><div>テクノロジー</div><!--
                --><div>ニュース</div><!--
                --><div>ゲーム</div><!--
                --><div>動物</div><!--
                --><div>商品紹介</div><!--
                --><div>部屋紹介</div><!--
                --><div>テレビ番組</div><!--
                --><div>YouTuber</div><!--
                --><div>凄技</div><!--
                --><div>音楽</div><!--
                --><div>筋肉</div>
            </div>
        </div>

        <div class="first">
            <div>
                <h4>興味のあるジャンルを選択して下さい</h4>
            </div>
            <form class="select">
                <label>
                    <input type="checkbox" id="sports" name="select[]">スポーツ
                </label>
                <label>
                    <input type="checkbox" id="technology" name="select[]">テクノロジー
                </label>
                <label>
                    <input type="checkbox" id="news" name="select[]">ニュース
                </label>
                <label>
                    <input type="checkbox" id="game" name="select[]">ゲーム
                </label>
                <label>
                    <input type="checkbox" id="animal" name="select[]">動物
                </label>
                <label>
                    <input type="checkbox" id="product" name="select[]">商品紹介
                </label>
                <label>
                    <input type="checkbox" id="room" name="select[]">部屋紹介
                </label>
                <label>
                    <input type="checkbox" id="tv" name="select[]">テレビ番組
                </label>
                <label>
                    <input type="checkbox" id="youtuber" name="select[]">YouTuber
                </label>
                <label>
                    <input type="checkbox" id="great" name="select[]">凄技
                </label>
                <label>
                    <input type="checkbox" id="music" name="select[]">音楽
                </label>
                <label>
                    <input type="checkbox" id="muscle" name="select[]">筋肉
                </label>
            </form>
        </div>
    </div>
</body>
</html>
