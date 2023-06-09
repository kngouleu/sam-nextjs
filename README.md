# 🛍️ Sam Ecommerce App

A modern and responsive ecommerce web application built using Next.js, Firebase, and Emotion (CSS-in-JS). This application provides a platform for users to browse, search, and purchase products online.

## Features

- User authentication (login, registration, and profile management)
- Responsive and mobile-friendly design
- Product listing, search, and filtering
- Shopping cart and checkout functionality
- Integration with Firebase for backend storage and real-time data updates

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sam-nextjs.git
cd sam-nextjs
```

2. Install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Create a `.env.local` file in the root of the project and add your Firebase project credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Deployment

Deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Any feedback, bug reports, and contributions are welcome! Please feel free to submit an issue or open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
