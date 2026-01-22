# Hitit Piliç

Hitit Piliç kurumsal web sitesi.

## Teknolojiler

- Next.js
- TypeScript
- Prisma ORM
- Tailwind CSS
- NextAuth.js

## Kurulum

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Ortam Değişkenleri

`.env` dosyası oluşturun:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```
