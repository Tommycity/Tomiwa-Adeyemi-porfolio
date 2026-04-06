import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center px-6">
      <p className="text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-100 mb-4 text-center">
        Page not found
      </h1>
      <p className="text-zinc-400 text-center max-w-md mb-10">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-3.5 rounded-full bg-zinc-100 text-zinc-950 font-medium hover:bg-zinc-200 transition-colors duration-300"
      >
        Back to home
      </Link>
    </div>
  );
}
