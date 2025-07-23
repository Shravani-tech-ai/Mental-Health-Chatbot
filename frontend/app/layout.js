export const metadata = {
  title: 'Mental Health Chatbot',
  description: 'Your personal wellbeing companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-white shadow-md p-4 flex justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">MindMate</h1>
          <nav className="flex gap-4">
            <a href="/" className="hover:text-indigo-500">Home</a>
            <a href="/chat" className="hover:text-indigo-500">Chat</a>
            <a href="/mood" className="hover:text-indigo-500">Mood</a>
            <a href="/journal" className="hover:text-indigo-500">Journal</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
