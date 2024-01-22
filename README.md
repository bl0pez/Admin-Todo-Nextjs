# Development

1. Levantar la base de datos `docker compose up -d`
2. Renombrar el .env.template a .env
3. Remplazar las variables de entorno
4. Ejecutar el comando de `npm install`
5. Ejecutar el comando de `npm run dev`
6. Ejecutar la migracion de la base de datos `npx prisma migrate dev`
7. Generar el cliente de prisma `npx prisma generate`
8. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma comandos

```
npx prisma init
npx prisma migrate dev //generar migracion db
npx prisma generate  //cliente prisma
```
