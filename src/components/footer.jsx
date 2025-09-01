import { socials } from "../data/socials";

export default function Footer() {
  return (
    <footer className="bg-white/60 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-sm">&copy; {new Date().getFullYear()} Arnaud (NAUNAU). Tous droits réservés.</div>
        <div className="flex gap-3">
          {socials.map(({ name, url, Icon }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-200">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}