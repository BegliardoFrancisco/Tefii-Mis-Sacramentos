# Tefii · Mi Comunión y Confirmación

Invitación web creada con React y Vite.

## Desarrollo local

```sh
npm ci
npm run dev
```

## Despliegue en GitHub Pages

El workflow [Deploy to GitHub Pages](./.github/workflows/deploy.yml) compila y publica el sitio automáticamente al subir cambios a `main` o `master`. También se puede ejecutar manualmente desde la pestaña **Actions**.

Para habilitarlo en el repositorio:

1. Abrí **Settings → Pages**.
2. En **Build and deployment → Source**, seleccioná **GitHub Actions**.
3. Subí el workflow a la rama `main` o `master` y esperá a que finalice la ejecución.

Vite usa automáticamente el nombre del repositorio como ruta base durante el workflow, de modo que los recursos estáticos funcionen en la URL de GitHub Pages.
