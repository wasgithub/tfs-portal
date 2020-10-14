---
name: PFin
route: /pfin
menu: Projetos
---

# Configurações

## Variáveis de ambiente REACT

```
export REACT_APP_COSTUMER_DEV=default
export REACT_APP_SERVER_DEV=http://10.51.12.177:5050/api
#export REACT_APP_SERVER_DEV=http://localhost:50030/api
```

## Variáveis de ambiente Android

```
export ANDROID_HOME=/home/thiagoalessandro/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

## Configuração de aplicações JAVA

Copiar arquivo [totvs-financial-services.conf](https://docs.google.com/document/d/1KTKACRO5h32xgjIN_IzXF56HkBW3iAuhJm23UQBzlLU/edit?usp=sharing) para diretório /opt/totvs/tfs

## Desabilitar segurança do chrome

```
/usr/bin/google-chrome --disable-web-security --user-data-dir="/"
```

## Instalar dependências Reactive Native

```
npm install react-native-cli -g
```

## Iniciar APP no Android

```
react-native run-android
```

## Correção de problemas

### System limit for number of file watchers reached

Solução

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
and
sudo sysctl -p
```

## Configuração de hosts

/etc/hosts (linux)

```
10.51.12.164 poa-cb-dev63
10.51.2.201 vversao
10.51.12.177 poasrvaplhom001
```

## Instalar APK no emulador

```
adb install [.apk path]
```

## Gerar APK Android

cd android && ./gradlew assembleRelease
