import type { ChangeEvent } from 'preact/compat';

interface Props {
    lang: string;
  languages: {
    [key: string]: string;
  };
}

const LanguageSelector: React.FC<Props> = ({ lang, languages }) => {
  return (
    <label className="language-select-wrapper">
      <select
        value={lang}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.currentTarget.value;
        const [_leadingSlash, _oldLang, ...rest] = window.location.pathname.split('/');
        const slug = rest.join('/');
        window.location.pathname = `/${newLang}/${slug}`;
        }}
        className="bg-white text-gray-800 rounded-full px-4 py-2 shadow-lg focus:ring focus:ring-opacity-50"
      >
        {Object.entries(languages).map(([lang, label]) => (
          <option key={lang} value={lang}>
            {label}
          </option>
        ))}
      </select>
      </label>
  );
};

export default LanguageSelector;