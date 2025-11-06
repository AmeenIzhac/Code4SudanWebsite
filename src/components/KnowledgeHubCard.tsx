import { Link } from 'react-router-dom';

interface KnowledgeHubCardProps {
  id: string;
  title: string;
  excerpt: string;
  lang: 'en' | 'ar';
}

export function KnowledgeHubCard({ id, title, excerpt, lang }: KnowledgeHubCardProps) {
  const processedExcerpt = excerpt
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:underline">$1</a>');

  return (
    <Link
      to={`/knowledge-hub/${id}`}
      className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-lg transition-all duration-200"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
        {title}
      </h3>
      <p
        className="text-gray-700 leading-relaxed line-clamp-3"
        dangerouslySetInnerHTML={{ __html: processedExcerpt }}
      />
      <span className="inline-block mt-4 text-green-600 font-medium hover:text-green-700">
        {lang === 'ar' ? 'استكشف المزيد ←' : 'Explore more →'}
      </span>
    </Link>
  );
}
