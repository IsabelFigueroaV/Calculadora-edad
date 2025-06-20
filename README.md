<p align="center">
  <img src="https://img.shields.io/badge/App%20Calculadora%20de%20Edad-a6a8d4?style=for-the-badge&logo=react&logoColor=white" alt="App Calculadora de Edad" />
</p>


# 🧮 Calculadora de Edad

Aplicación de escritorio creada por **Isabel Figueroa V.** para calcular edad.

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18+-green?style=flat-square" />
  <img alt="Sistema Operativo" src="https://img.shields.io/badge/Windows-10%2B-blue?style=flat-square" />
  <img alt="Licencia" src="https://img.shields.io/badge/Licencia-MIT-lightgrey?style=flat-square" />
</p>
---
## ✨ Funcionalidades

- Cálculo preciso de edad según fecha de nacimiento.
- Validación de campos obligatorios.
- Exportación de datos a archivo CSV.
- Interfaz moderna con Tailwind CSS.
- Empaquetada con Electron para uso en Windows.

## 🚀 Instalación (modo desarrollo)

1. Clona este repositorio.
2. Instala las dependencias:
 ```bash
    npm install
 ```
3. Ejecuta la app:
 ```bash
    npm run dev
 ```
 
## 🧱 Empaquetado (modo producción)
```bash
   npm run build
   npm run postbuild
   npx electron-builder --config electron-builder.yml
```

## 📂 Estructura del proyecto

- src/ → Componentes React
- public/ → HTML base
- build/ → Archivos generados por React
- dist/ → Instaladores (.exe)
- electron.js → Entrada principal de Electron
  
## 📦 Requisitos

- Node.js 18+
- npm
- Windows 10 o superior
  
 ## 📄 Licencia
 
 Este proyecto está bajo la licencia [MIT](LICENSE).  
 [![License](https://img.shields.io/badge/License-MIT-lavender.svg)](https://opensource.org/licenses/MIT)

  *Desarrollado con precisión y cariño por Isabel Figueroa V. – Ingeniera y consultora en IA aplicada..*
