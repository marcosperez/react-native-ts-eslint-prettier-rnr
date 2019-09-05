# Instalación

## Android SDK

- Instalar Android SDK
- Configurar en `~/.bash_profile`

```
export ANDROID_HOME=$HOME\Android\Sdk
export PATH=$PATH:$ANDROID_HOME\emulator
export PATH=$PATH:$ANDROID_HOME\tools
export PATH=$PATH:$ANDROID_HOME\tools\bin
export PATH=$PATH:$ANDROID_HOME\platform-tools
```

## Android IDE

- Descargar y ejecutar `~/android-studio/bin/studio.sh`
- Configure > SDK Manager > Instalar (Show package details)
  - Android SDK Platform 28
  - Intel x86 Atom_64 System Image

## Crear aplicación

- npm i -g react-native-cli
- react-native init MUmobile --template typescript

## Arrancar emulador

- sudo apt install qemu-kvm
- sudo adduser \$USER kvm
- Reiniciar

## Arrancar aplicación por primera vez

- cd MUmobile && react-native [run-android|run-ios]
- react-native start
- Borrar aplicaciones ya instaladas en el emulador si es que las hay.
- RR
- Activar con Ctrl-M, hot-realoading y live load

## Abrir vsCode desde MUMobile para que tome settings
