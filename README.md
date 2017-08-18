# 導入方法

git clone

cd Kamishibai
npm install


react-native start > /dev/null 2>&1 & 　　　　　・・・このコマンドはいらないかもしれない

react-native run-android


# 画面の追加方法
NewPage というページ（画面）を作ると仮定

- src/components/App.js
#### 以下を適切な場所に追記（ソースの似たところにペーストしてください）

```
import NewPage from "./NewPage"
```

```
case "/new_page":
  viewContent = <NewPage />
  break;
```


- NewPage.jsを作成
#### src/components/ フォルダに NewPage.jsを作る
（About.js なんかを真似すればいいと思います）


- src/components/Top.js にNewPageに行くためのボタンを追加
#### これも、似たところがあるので、真似して以下をペースト

```
<Button
  title="NewPage"
  style={styles.btn}
  onPress={()=> onGoNewPage()} />
```

```
let {onGoCounter, onGoAbout} = this.props
```
を
```
let {onGoCounter, onGoAbout, onGoNewPage} = this.props
```
とする。


- src/containers/CTop.js
#### ページが切り替わるようにメソッドを呼ぶ

```
onGoNewPage: () => {
  dispatch(history_push("/new_page"))
},
```
