# Romag — catálogo web de demostración

Sitio catálogo para estufas y productos de calefacción que demuestra navegación, comparación, carrito y preparación de consultas por WhatsApp.

> Catálogo, precios, métricas, representantes y testimonios son ilustrativos. No hay backend, stock ni creación automática de pedidos.

## Stack

React 19, TypeScript, React Router 7, Vite 8, Tailwind CSS 3, Leaflet y D3.

## Ejecutar

Requiere Node.js `^20.19` o `^22.12`.

```bash
npm ci
npm run dev
npm run typecheck
npm run build
npm audit
```

No usa variables de entorno.

## Diseño técnico

- contextos separados para carrito y comparador;
- persistencia local versionada, validada y tolerante a errores;
- límite de tres productos comparables de una misma categoría;
- consulta por WhatsApp mediante acción explícita y pestaña aislada;
- Tailwind compilado localmente;
- configuración Vite sin inyección de claves.

## Limitaciones

No procesa pedidos ni pagos, no valida stock/logística y usa contenido e imágenes demostrativas. No hay autenticación, API o suite automatizada.

## Demo

[Ver deployment público](https://romag-sitio.vercel.app)

La URL fue verificada como disponible antes de esta actualización; el código de esta rama solo será visible allí después de integrar y desplegar los cambios.

## Autor

Desarrollado por [Nicolás De Felippe](https://github.com/nicodf91) como proyecto de portfolio.
