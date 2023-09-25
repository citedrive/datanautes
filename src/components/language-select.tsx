import type { ChangeEvent } from 'preact/compat';

interface Props {
  lang: string;
languages: {
  [key: string]: string;
};
}

const LanguageSelector: React.FC<Props> = ({ lang, languages }) => {
return (
  <div className="bg-white text-gray-800 focus:ring-opacity-50">
    <select
    className="cursor-pointer"
      aria-label="Language Selector"
      value={lang}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.currentTarget.value;
        const [_leadingSlash, _oldLang, ...rest] = window.location.pathname.split('/');
        const slug = rest.join('/');
        window.location.pathname = `/${newLang}/${slug}`;
      }}
      
    >
      {Object.entries(languages).map(([lang, label]) => (
        <option key={lang} value={lang}>
          {label}
        </option>
      ))}
    </select>
  </div>
);
};

export default LanguageSelector;
