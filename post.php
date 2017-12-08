<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

<?php
    date_default_timezone_set('Asia/Tokyo');

    $link = pg_connect('host=ec2-54-83-49-44.compute-1.amazonaws.com dbname=d46g9gquhvk6sm user=vesvplhujzwwwl password=73cb6d5e21ec4551272d0c5eb288077e264a6a70c018399b64d6907b93c6b17c');
    if (!$link) {
        die('接続失敗です。');
    }

    
