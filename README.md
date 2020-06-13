# docker-react
React + Typescriptの環境をすぐつくるやつ

## Create App

##### ビルド

- Dockerfileがないので `docker-compose build` の必要なし

##### Reactアプリを作成

-  `rm` オプションでコンテナをすぐ削除

```bash
$ docker-compose run --rm react npx create-react-app . --template typescript
```



## Serve App

##### コンテナを起動すると、reactアプリを起動するコマンドが実行される

```bash
$ docker-compose up
```

##### エラーが出て起動できなかった場合は `npm install` する

```bash
$ docker-compose run --rm react npm install
```

