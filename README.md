# azure-terraform

## require

- terraform cli
- azure cli
- Node.js 24.x or later
- CDK for Terraform

## Usage

```shell
cd init
chmod +x init.sh
az login
./init.sh
```

表示される tfstate12345 などの値を main.ts の storageAccountName に設定する。

```shell
cd ../example
pnpm i
cdktn deploy
```

example という ResourceGroup がデプロイされる。
