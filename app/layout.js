import './globals.css';

export const metadata = {
  title: 'Employee Directory',
  description: 'A directory of employees with search and filter functionality.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
