# Repositorio: sitio-tocupboard-aws

## Descripción

Este repositorio contiene la configuración y scripts para realizar escaneos de seguridad automatizados de los endpoints de la API tocupboard-dv.click utilizando OWASP ZAP en GitHub Actions.  

Incluye workflows para:

- Escanear los endpoints /obtener-productos y /guardar-contacto.
- Generar reportes en formato JSON, Markdown y HTML.
- Subir los reportes como artifacts a GitHub Actions.
- Manejar autenticación mediante API Key en los headers de las solicitudes.

---

## Contenido del repositorio
- .github/workflows/deply.yml → Workflow de GitHub Actions que realiza el deploy de los lambdas y apigateway.
- .github/workflows/zap_scan.yml → Workflow de GitHub Actions que ejecuta los escaneos ZAP.  
- lambdas/grabar-contacto/eslint.config.js → EsLint es una herramienta de analisis estático de código que sirve para encontrar y reportar problemas en el código antes de ejecutarlo.
- lambdas/grabar-contacto/index.js → página principal index del método.
- lambdas/obtener-productos/eslint.config.js → EsLint es una herramienta de analisis estático de código que sirve para encontrar y reportar problemas en el código antes de ejecutarlo.
- lambdas/obtener-productos/index.js → página principal index del método.

---

## Requisitos previos

1. Una cuenta de GitHub con permisos para crear y ejecutar workflows.  
2. Tener la API Key válida para los endpoints (AWS_API_KEY) configurada como secret en GitHub (Settings → Secrets → Actions).  
3. Acceso a los endpoints de la API (https://api.tocupboard-dv.click/obtener-productos y /guardar-contacto).

---

## Instrucciones para ejecutar

1. Hacer un pull request a la rama develop.  
2. GitHub Actions ejecutará automáticamente el workflow ZAP Baseline Scan, EsLint, CI/CD Lambdas & API Gateway, npm Test y CodeQL.  
3. Al finalizar, los Actions deberán estar como ejecutados exitosamente.  
4. en AWS Lambda se podrá ver los functions con el tiempo de la última modificación actualizada.

---

## Notas adicionales

- La ejecución incluye un spider que recorre los endpoints y un scan de seguridad automatizado.  
- Si se desean reglas personalizadas, agregar `zap_rules.json` en la raíz del repositorio y referenciarlo en el workflow.

---

## Autor

- David Alberto Villavicencio Cedeño
