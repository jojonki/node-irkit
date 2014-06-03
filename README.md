NODEIRkit
======

我が家のIRKitを叩いているNode.jsアプリケーションです。

使い方
------

IRKitのclientkeyとdeviceidを記述したsettings.jsonを読み込む必要があるため、、自分のIRKitのキーを記述したsettings.jsonをルートディレクトリに自分で作成してください。

#### settings.json例
     {
             "irkit" : {
                     "clientkey" : "XXXXX",
                     "deviceid"  : "YYYYY"
             }
     }


実行はmacro.jsonにあるコマンドリストを指定します。連続コマンドの場合、コマンドによって次のコマンドを受付可能になるまで時間がかかるものがありますのでcompTime[ms]にて指定してください。私の例ではPS3の起動コマンド後は30秒の遅延を設けるように設定しているのが分かるかと思います。

    node app.js <macro-command>

ライブラリは'require'と'fs'を利用しているため適宜npm installを行ってください。詳しくはapp.jsを御覧ください。


関連情報
--------

- [IRKitからPS3を電源起動からtorne起動までNode.jsでやってみた](http://www.jonki.net/entry/2014/05/11/173225)


ライセンス
-------
 いかなる用途においてもコピペOKですが、参考にした場合はリンクぐらいどこかに貼ってくれると嬉しいです。


連絡先
---------
[@jojonki](twitter.com/jojonki)
