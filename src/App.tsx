import { Code } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlogCard } from './components/BlogCard';
import { BlogPost } from './components/BlogPost';
import { ContactUsPage } from './components/ContactUsPage';
import { KnowledgeHubItemPage } from './components/KnowledgeHubItemPage';
import { KnowledgeHubPage } from './components/KnowledgeHubPage';
import { blogPosts } from './data/blogData';

function HomePage({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';

  return (
    <div className="min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/sud1.jpeg)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Simple Text Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 pt-8 px-8">
          <div className="max-w-6xl mx-auto flex justify-center gap-8 md:gap-12" dir="ltr">
            <a href="#events" className="text-white/90 hover:text-white text-sm md:text-base font-medium tracking-wide transition-colors">
              {isArabic ? 'الفعاليات' : 'Events'}
            </a>
            <a href="#about" className="text-white/90 hover:text-white text-sm md:text-base font-medium tracking-wide transition-colors">
              {isArabic ? 'عن المبادرة' : 'About'}
            </a>
            <a href="#blog" className="text-white/90 hover:text-white text-sm md:text-base font-medium tracking-wide transition-colors">
              {isArabic ? 'المدونة' : 'Blog'}
            </a>
            <Link to="/knowledge-hub" className="text-white/90 hover:text-white text-sm md:text-base font-medium tracking-wide transition-colors">
              {isArabic ? 'المعرفة' : 'Knowledge'}
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white text-sm md:text-base font-medium tracking-wide transition-colors">
              {isArabic ? 'اتصل بنا' : 'Contact'}
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <div className="flex items-center justify-center gap-3 mb-6" dir="ltr">
              <Code className="w-12 h-12 text-[#D4A853]" />
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                Code4Sudan
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              {isArabic
                ? 'تمكين السودان عبر التكنولوجيا والتعليم'
                : 'Empowering Sudan through technology and education'}
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              {isArabic
                ? 'نشر وتحديث ودعم علوم الحاسوب في السودان — كمجال تعليمي وأداة عملية لمعالجة احتياجات السودان'
                : 'Spreading, modernizing, and supporting computer science in Sudan—as both an educational field and a practical tool to address Sudanese needs'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200">
            <a
              href="https://t.me/+eb1WfhdFFAtkOGU0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              {isArabic ? 'انضم إلى المجتمع' : 'Join the Community'}
            </a>
            <a href="#events" className="btn btn-outline text-lg px-8 py-4">
              {isArabic ? 'الفعاليات الحالية' : 'Current Events'}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="section bg-cream scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary">
              {isArabic ? 'رسالتنا' : 'Our Mission'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isArabic
                ? 'المبادرة تقوم على ركيزتين أساسيتين متساويتين'
                : 'The initiative is built on two equally essential pillars'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Educational Pillar */}
            <div className="feature-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {isArabic ? 'الركيزة التعليمية' : 'Educational Pillar'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {isArabic ? 'دعم وتحسين تعليم علوم الحاسوب في السودان' : 'Support and improve CS education in Sudan'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {isArabic ? 'تمكين المعلمين والموجهين بالمصادر' : 'Empower teachers, mentors, and educators with resources'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {isArabic ? 'تزويد الطلاب بالمعرفة والمهارات العملية الحديثة' : 'Equip students with modern knowledge and practical skills'}
                </li>
              </ul>
            </div>

            {/* Production Pillar */}
            <div className="feature-card" style={{ borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {isArabic ? 'ركيزة الإنتاج' : 'Production Pillar'}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  {isArabic ? 'تمكين ومكافأة تطبيق علوم الحاسوب لحل التحديات السودانية' : 'Enable and reward the application of CS to solve Sudan-specific challenges'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  {isArabic ? 'توجيه ودعم الابتكار الذي يفيد السودان مباشرة' : 'Guide and support innovation that benefits Sudan directly'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  {isArabic ? 'ربط المشاريع والأفكار بالموارد والإرشاد وفرص الشركات الناشئة' : 'Connect projects and ideas with resources, mentorship, and startup opportunities'}
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 italic mt-10 max-w-3xl mx-auto">
            {isArabic
              ? 'كلا الركيزتين ضروريتان وبنفس الأهمية: تطوير التعليم يؤسس القاعدة، بينما التطبيق الواقعي يحقق الأثر.'
              : 'Both pillars are necessary and of equal importance: advancing CS education provides a foundation, while real application brings tangible impact.'}
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary">
              {isArabic ? 'الفعاليات' : 'Events'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isArabic ? 'انضم إلى فعالياتنا وكن جزءاً من التغيير' : 'Join our events and be part of the change'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Current Events */}
            <a href="https://forms.gle/zNg7F587r9VEUCDt5" target="_blank" rel="noopener noreferrer" className="card group cursor-pointer">
              <div className="card-body">
                <span className="badge badge-active mb-3">
                  {isArabic ? 'نشط' : 'Active'}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {isArabic ? 'هاكاثون PyTorch' : 'PyTorch Hackathon'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {isArabic
                    ? 'آخر موعد للمشاركة 28 فبراير 2025'
                    : 'Deadline February 28th, 2025'}
                </p>
                <span className="text-primary font-medium text-sm group-hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn more →'}
                </span>
              </div>
            </a>

            <Link to="/workshop-signup" className="card group cursor-pointer">
              <div className="card-body">
                <span className="badge badge-active mb-3">
                  {isArabic ? 'مفتوح' : 'Open'}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {isArabic ? 'قيادة ورشة عمل' : 'Lead a Workshop'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {isArabic
                    ? 'سجّل لقيادة ورشة عمل!'
                    : 'Sign-up to lead a workshop!'}
                </p>
                <span className="text-primary font-medium text-sm group-hover:underline">
                  {isArabic ? 'سجل الآن ←' : 'Sign up now →'}
                </span>
              </div>
            </Link>
          </div>

          {/* Past Events */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {isArabic ? 'فعاليات سابقة' : 'Past Events'}
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/hackathon-2"
                className="inline-flex items-center text-gray-500 hover:text-accent transition-colors"
              >
                <span className="badge badge-past mr-3">{isArabic ? 'منتهي' : 'Completed'}</span>
                {isArabic
                  ? 'هاكاثون 2 من 15 نوفمبر 2025 - 15 أبريل 2026'
                  : 'Hackathon 2 of November 15, 2025 - April 15, 2026'}
              </Link>
              <Link
                to="/hackathon-2-results"
                className="inline-flex items-center text-gray-500 hover:text-accent transition-colors"
              >
                <span className="badge badge-past mr-3">{isArabic ? 'النتائج' : 'Results'}</span>
                {isArabic
                  ? 'نتائج هاكاثون 2: مسابقة #برمج_للسودان'
                  : 'Hackathon 2 Results: #Code4Sudan Competition'}
              </Link>
              <Link
                to="/launch-hackathon"
                className="inline-flex items-center text-gray-500 hover:text-accent transition-colors"
              >
                <span className="badge badge-past mr-3">{isArabic ? 'منتهي' : 'Completed'}</span>
                {isArabic
                  ? 'هاكاثون الإطلاق من 1 مايو - 31 يوليو 2025'
                  : 'Launch Hackathon of May 1 - Jul 31, 2025'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section bg-cream scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-accent">
              {isArabic ? 'المدونة' : 'Blog'}
            </h2>
            <p className="section-subtitle mx-auto">
              {isArabic ? 'أحدث المقالات والأفكار' : 'Latest articles and insights'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map(post => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={isArabic ? post.title.ar : post.title.en}
                date={post.date}
                excerpt={isArabic ? post.excerpt.ar : post.excerpt.en}
                lang={lang}
              />
            ))}
          </div>

          {blogPosts.length > 3 && (
            <div className="text-center mt-10">
              <a href="#blog" className="btn btn-outline border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white">
                {isArabic ? 'عرض جميع المقالات' : 'View All Articles'}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="section bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary">
              {isArabic ? 'كيف نعمل' : 'How We Work'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Supporting People in Sudan */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {isArabic ? 'دعم الناس في السودان' : 'Supporting People in Sudan'}
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  {isArabic
                    ? 'توفير الوصول للتعليم عبر الجلسات والدروس والمحاضرات'
                    : 'Provide access to education through sessions, tutorials, and lectures'}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  {isArabic
                    ? 'دعم المعلمين من خلال تمويل المواد والتخطيط وتحسين المناهج'
                    : 'Support teachers by funding materials, planning courses, and improving curricula'}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  {isArabic
                    ? 'مكافأة الابتكار عبر الحوافز المالية والإرشاد'
                    : 'Reward innovation through financial incentives and mentorship'}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  {isArabic
                    ? 'ربط أصحاب التحديات بالمواهب التقنية لإيجاد حلول عملية'
                    : 'Connect stakeholders with tech talent to find practical solutions'}
                </li>
              </ul>
            </div>

            {/* Engaging the Diaspora */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {isArabic ? 'التواصل مع الشتات' : 'Engaging the Diaspora'}
                </h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </span>
                  {isArabic
                    ? 'توفير منصة للتواصل مع الطلاب والمعلمين والمبتكرين في السودان'
                    : 'Offer a platform to connect with students, educators, and innovators in Sudan'}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </span>
                  {isArabic
                    ? 'إتاحة فرص للتدريس والإرشاد أو التعاون عن بُعد'
                    : 'Provide opportunities to teach, mentor, or collaborate remotely'}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </span>
                  {isArabic
                    ? 'دعوة حلول يقودها الشتات لمعالجة تحديات السودان'
                    : "Invite diaspora-led solutions that address Sudan's challenges"}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </span>
                  {isArabic
                    ? 'تمكين المساهمات المالية لاستدامة برامج التعليم والابتكار'
                    : 'Enable financial contributions to sustain education and innovation programs'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isArabic ? 'انضم إلى مجتمعنا' : 'Join Our Community'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {isArabic
              ? 'كن جزءاً من الحركة لتمكين السودان عبر التكنولوجيا'
              : 'Be part of the movement to empower Sudan through technology'}
          </p>
          <a
            href="https://t.me/+eb1WfhdFFAtkOGU0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-lg px-10 py-4"
          >
            {isArabic ? 'انضم عبر تيليجرام' : 'Join on Telegram'}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4" dir="ltr">
                <Code className="w-8 h-8 text-[#D4A853]" />
                <span className="text-xl font-bold text-white">Code4Sudan</span>
              </div>
              <p className="text-gray-400">
                {isArabic
                  ? 'تمكين السودان عبر التكنولوجيا والتعليم'
                  : 'Empowering Sudan through technology and education'}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                {isArabic ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#about" className="footer-link">{isArabic ? 'عن المبادرة' : 'About'}</a></li>
                <li><a href="#events" className="footer-link">{isArabic ? 'الفعاليات' : 'Events'}</a></li>
                <li><a href="#blog" className="footer-link">{isArabic ? 'المدونة' : 'Blog'}</a></li>
                <li><Link to="/knowledge-hub" className="footer-link">{isArabic ? 'مركز المعرفة' : 'Knowledge Hub'}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                {isArabic ? 'تواصل معنا' : 'Get in Touch'}
              </h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="footer-link">{isArabic ? 'اتصل بنا' : 'Contact Us'}</Link></li>
                <li>
                  <a
                    href="https://t.me/+eb1WfhdFFAtkOGU0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © 2026 {isArabic ? 'كود فور سودان' : 'Code4Sudan'}. {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LaunchHackathonPage({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{lang === 'ar' ? 'هاكاثون الإطلاق من 1 مايو – 31 يوليو 2025' : 'Launch Hackathon of May 1 – Jul 31, 2025'}</h1>
      </div>

      {/* Hackathon Header */}
      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-green-600">{lang === 'ar' ? 'الهاكاثون' : 'Hackathon'}</h2>
        <p className="mb-2 text-gray-700">
          <strong className="text-gray-900">{lang === 'ar' ? 'الهاكاثون على Devpost:' : 'Hackathon on Devpost:'}</strong>{' '}
          <a
            href="https://code-for-sudan.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors font-semibold"
          >
            https://code-for-sudan.devpost.com/
          </a>
        </p>
      </section>

      {/* About the Hackathon */}
      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-red-500">{lang === 'ar' ? 'عن الهاكاثون' : 'About the Hackathon'}</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'نبحث عن:' : "We're looking for:"}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'برامج حاسوبية تقدم قيمة ملموسة للمجتمعات السودانية' : 'Computer programs that deliver tangible value to Sudanese communities'}</li>
            <li>{lang === 'ar' ? 'حلول في مجالات متعددة مثل الصحة والتعليم والمالية والاتصال وغيرها' : 'Solutions across various domains including healthcare, education, finance, communication, and more'}</li>
            <li>{lang === 'ar' ? 'يمكن أن تكون المشاريع تطبيقات جوال أو مواقع أو أدوات برمجية أخرى' : 'Projects can be mobile apps, websites, or any software-based tools'}</li>
            <li>{lang === 'ar' ? 'المرحلة التجريبية مقبولة — ليس مطلوبًا إكمال المنتج بالكامل' : 'Proof-of-concept stage projects are welcome – full product completion is not required'}</li>
            <li>{lang === 'ar' ? 'تشجيع دمج الذكاء الاصطناعي لكنه غير إلزامي' : 'AI integration is encouraged but not mandatory'}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'معايير الأهلية:' : 'Eligibility:'}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'مفتوح للسودانيين فقط' : 'Open to Sudanese nationals only'}</li>
            <li>{lang === 'ar' ? 'يمكن أن تتكون الفرق من 1-5 أعضاء' : 'Teams can consist of 1-5 members'}</li>
          </ul>
        </div>
      </section>

      {/* Winners */}
      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-green-600">{lang === 'ar' ? 'الفائزون في هاكاثون 2025 الافتتاحي' : '2025 Inaugural Hackathon Winners'}</h2>
        <div className="space-y-4 text-gray-700">
          <p>{lang === 'ar' ? 'جائزة المركز الأول بقيمة ' : 'The first place prize of '}<strong>$1000</strong>{lang === 'ar' ? ' منحت إلى ' : ' was awarded to '}<strong className="text-gray-900">AwkData</strong>.</p>
          <p>{lang === 'ar' ? 'جائزة المركز الثاني بقيمة ' : 'The second place prize of '}<strong>$500</strong>{lang === 'ar' ? ' منحت إلى ' : ' was awarded to '}<strong className="text-gray-900">University Platform</strong>.</p>
          <p>{lang === 'ar' ? 'جوائز المركز الثالث بقيمة ' : 'Third place prizes of '}<strong>$100</strong>{lang === 'ar' ? ' لكل فريق منحت إلى ' : ' each were awarded to '}<strong className="text-gray-900">Mission 249</strong>, <strong className="text-gray-900">Elajy</strong>, <strong className="text-gray-900">Monqez</strong> {lang === 'ar' ? 'و' : 'and'} <strong className="text-gray-900">Dawak</strong>. {lang === 'ar' ? 'جائزة اختيار الجمهور بقيمة ' : 'The popular choice prize of '}<strong>$100</strong> {lang === 'ar' ? 'منحت إلى ' : 'was awarded to '}<strong className="text-gray-900">Shobbak</strong>.</p>
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-red-500">{lang === 'ar' ? 'المتطلبات' : 'Requirements'}</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'ماذا تبني' : 'What to Build'}</h3>
          <p className="mb-4 leading-relaxed">
            {lang === 'ar' ? 'أنشئ برنامجًا حاسوبيًا يعالج حاجة محددة داخل المجتمع السوداني. يمكن أن يكون حلك:' : 'Create a computer program that addresses a specific need within Sudanese society. Your solution can be:'}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'تطبيق جوال يحل تحديًا محليًا' : 'A mobile application that solves a local challenge'}</li>
            <li>{lang === 'ar' ? 'منصة ويب تربط المجتمعات أو تقدم خدمات' : 'A web platform that connects communities or provides services'}</li>
            <li>{lang === 'ar' ? 'أداة تحليل بيانات تقدم رؤى لاتخاذ القرار' : 'A data analysis tool that offers insights for decision-making'}</li>
            <li>{lang === 'ar' ? 'أي حل برمجي يُحدث أثرًا إيجابيًا' : 'Any software-based solution that creates positive impact'}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'ماذا تُقدم' : 'What to Submit'}</h3>
          <p className="mb-4 leading-relaxed">
            {lang === 'ar' ? 'تُقبل المشاركات بالعربية أو الإنجليزية ويجب أن تتضمن:' : 'Submissions are accepted in Arabic or English and must include:'}
          </p>

          <p className="mb-4 text-gray-600 italic">
            {lang === 'ar' ? 'إذا كنت تفضل إبقاء شيفرتك خاصة، أضف "team@code4sudan.com" كمساهم في مستودعك' : 'If you prefer to keep your code private, add "team@code4sudan.com" as a collaborator to your repository'}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">{lang === 'ar' ? 'التوثيق' : 'Documentation'}</h4>
              <p className="mb-2">{lang === 'ar' ? 'وثيقة مختصرة من صفحة واحدة (PDF) توضّح:' : 'A concise one-page document (PDF format) explaining:'}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>{lang === 'ar' ? 'المشكلة التي يعالجها الحل' : 'The problem your solution addresses'}</li>
                <li>{lang === 'ar' ? 'كيفية عمل الحل' : 'How your solution works'}</li>
                <li>{lang === 'ar' ? 'الأثر المتوقع على المجتمعات السودانية' : 'Expected impact on Sudanese communities'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900">{lang === 'ar' ? 'فيديو العرض' : 'Demo Video'}</h4>
              <p className="mb-2">{lang === 'ar' ? 'فيديو توضيحي (بحد أقصى 5 دقائق) مرفوع على يوتيوب أو جوجل درايف يوضح بجلاء:' : 'A video demonstration (maximum 5 minutes) uploaded to YouTube or Google Drive that clearly explains:'}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>{lang === 'ar' ? 'ماذا يفعل برنامجك (مع عرض توضيحي)' : "What your program does (with demonstration)"}</li>
                <li>{lang === 'ar' ? 'لماذا هو مفيد للسودان' : "Why it's beneficial to Sudan"}</li>
                <li>{lang === 'ar' ? 'كيف بنيته (التقنيات والمنهجية)' : 'How you built it (technology stack, approach)'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900">{lang === 'ar' ? 'الشيفرة المصدرية' : 'Source Code'}</h4>
              <p>{lang === 'ar' ? 'رابط إلى مستودع الشيفرة المفتوحة (ويفضّل GitHub)' : 'A URL to your open-source code repository (GitHub preferred)'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hackathon2Page({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';
  const stageCardClass = (ltr: string, rtl: string): string =>
    `space-y-4 rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm transition-shadow hover:shadow-md ${isArabic ? rtl : ltr
    }`;

  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {isArabic ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isArabic ? 'هاكاثون 2' : 'Hackathon 2'}
        </h1>
      </div>

      {isArabic ? (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">حول التحدي</h2>
            <p className="mb-4 leading-relaxed">
              ندعوك لابتكار حلول برمجية تقدم قيمة ملموسة للسودانيين في مجالات مثل الصحة والتعليم والتمويل والاتصال وغيرها.
            </p>
            <p className="mb-4 leading-relaxed">
              يمكن أن يكون مشروعك تطبيقًا للهواتف، أو منصة ويب، أو أي أداة برمجية أخرى. يمكنك تطويره كخدمة مدفوعة أو مجانية. يُشجَّع دمج تقنيات الذكاء الاصطناعي لكنه غير إلزامي.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">شروط المشاركة</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>المسابقة مفتوحة حصريًا للسودانيين داخل السودان وخارجه.</li>
              <li>يمكن أن يتكوّن الفريق من 1 إلى 5 أعضاء.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">لماذا تشارك؟</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong className="text-gray-900">التعلم:</strong> اكتسب معرفة في التحقق من الأفكار، والتفكير المرتكز على الحد الأدنى القابل للمنتج، وأدوات التطوير.
              </li>
              <li>
                <strong className="text-gray-900">تطوير المهارات:</strong> عزّز قدراتك التقنية ووسّع سيرتك المهنية.
              </li>
              <li>
                <strong className="text-gray-900">تأسيس المشاريع:</strong> حوّل مشروعك إلى عمل ربحي أو مبادرة غير ربحية.
              </li>
              <li>
                <strong className="text-gray-900">الأثر الاجتماعي:</strong> ساهم بإيجابية في خدمة السودان.
              </li>
              <li>
                <strong className="text-gray-900">التميّز:</strong> احصل على فرص الفوز بالجوائز.
              </li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">نظرة عامة على المنافسة</h2>
            <p className="mb-6 leading-relaxed">المسابقة تتكون من ثلاث مراحل.</p>

            <div className="space-y-10">
              <div className={stageCardClass('border-l-4 border-l-green-500/80', 'border-r-4 border-r-green-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                    المرحلة 1
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">تقديم الفكرة</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  في هذه المرحلة تحتاج فقط إلى تقديم فكرتك — لا حاجة للبرمجة أو للنموذج الأولي أو للفيديو. قدّم وصفًا موجزًا (من 1 إلى 3 جمل أو فقرة واحدة) يوضّح مفهومك وخطاب المصعد الخاص بك. يمكنك تقديم عدة أفكار، لكن يجب عليك تعبئة نموذج جديد لكل فكرة.{" "}
                  <Link to="/knowledge-hub/advice-for-proposing-ideas" className="text-green-600 hover:text-green-700 transition-colors">
                    اطلع على نصائحنا لتقديم فكرة مرجح قبولها.
                  </Link>
                </p>
                <div>
                  <p className="font-semibold text-gray-900">معايير الاختيار:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>القيمة للمجتمع السوداني: هل تعالج الفكرة مشكلة حقيقية وتحقق أثرًا اجتماعيًا ملموسًا؟</li>
                    <li>إمكانية التنفيذ: هل يمكن تطويرها واقعيًا خلال المراحل القادمة؟</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">متطلبات التقديم:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>
                      أكمل{' '}
                      <a
                        href="https://forms.gle/bYahYvAqbNYfEx6B9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        نموذج Google
                      </a>
                      .
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">الجدول الزمني:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>بداية التقديمات: 15 نوفمبر 2025</li>
                    <li>نهاية التقديمات: 15 ديسمبر 2025</li>
                    <li>إعلان النتائج: 31 ديسمبر 2025</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-red-500/80', 'border-r-4 border-r-red-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                    المرحلة 2
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">تنفيذ المشروع</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  الفرق المختارة من المرحلة الأولى ستبني نماذجها الأولية. في نهاية هذه المرحلة يجب أن تقدّم نموذجًا يعمل ويُستخدم فعليًا من قبل أشخاص حقيقيين. يهدف النموذج الأولي إلى اختبار الفكرة قبل التوسع، لذا ركّز على التحقق من مدى حاجة الناس للحل وليس على تحسين الشكل.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">فكّر بطريقة رشيقة:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>هل يمكن تنفيذ جزء من العملية يدويًا؟</li>
                    <li>هل يمكن للأدوات مثل البريد الإلكتروني أو واتساب أو إكسل أن تحل محل البنية التحتية المعقدة؟</li>
                    <li>هل تستطيع البناء على برمجيات مفتوحة المصدر أو أدوات جاهزة؟</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">أمثلة:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>منشئ سير ذاتية مدعوم بالذكاء الاصطناعي يمكن أن يبدأ بتحرير السير يدويًا لاختبار الطلب.</li>
                    <li>مدرّس للامتحانات الثانوية يعتمد على الذكاء الاصطناعي يمكن أن يبدأ كواجهة بسيطة لنموذج لغوي جاهز.</li>
                  </ul>
                </div>
                <p className="leading-relaxed text-gray-700">
                  الأثر أهم من التقنية. مجموعة واتساب تضم 50 مستخدمًا نشطًا يوميًا أفضل من تطبيق مبهر يستخدمه خمسة أشخاص فقط.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">ما الذي تقدمه:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>فيديو مدته 5 دقائق يشرح فكرتك ويعرض كيفية استخدامها ويبرهن على التفاعل والنتائج الحقيقية.</li>
                    <li>رابط إلى النموذج التشغيلي.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">معايير التقييم:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>كيف وجّهت ملاحظات المستخدمين عملية التطوير.</li>
                    <li>عدد المستخدمين النشطين.</li>
                    <li>الفوائد الملموسة التي يحصل عليها المستخدمون.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">الجدول الزمني:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>نتائج المرحلة الأولى وبداية المرحلة الثانية: 1 يناير 2026</li>
                    <li>التسليم النهائي: 15 فبراير 2026</li>
                    <li>إعلان الفائزين: 28 فبراير 2026</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-amber-500/80', 'border-r-4 border-r-amber-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
                    المرحلة 3
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">تطوير المنتج</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  الفرق التي تتقدم من المرحلة الثانية ستعمل على تحسين منتجاتها بناءً على ملاحظات المستخدمين. إذا كان نموذجك الأولي بسيطًا أو يعتمد على عمليات يدوية، فهذه هي المرحلة التي تبدأ فيها بكتابة البرمجيات. وإذا كان لديك تطبيق جاهز، فركّز على تحسين المزايا والتصميم والاستقرار مع الحفاظ على قيادة المستخدمين للتطوير.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">ما الذي تقدمه:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>فيديو مدته 5 دقائق يشرح كيفية تطوّر مشروعك مع إبراز ملاحظات المستخدمين والأثر المتحقق.</li>
                    <li>رابط إلى النموذج أو العرض المحدّث.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">الجدول الزمني:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>نتائج المرحلة الثانية وبداية المرحلة الثالثة: 1 مارس 2026</li>
                    <li>التسليم النهائي: 31 مارس 2026</li>
                    <li>إعلان الفائزين: 15 أبريل 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">الجدول الزمني الكامل</h2>
            <p className="mb-6 leading-relaxed">
              فيما يلي الجدول الزمني المحدّث للهاكاثون، حيث تبدأ كل مرحلة في اليوم التالي لانتهاء المرحلة السابقة.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">المرحلة 1: تقديم الفكرة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>بداية التقديمات: 15 نوفمبر 2025</li>
                  <li>نهاية التقديمات: 15 ديسمبر 2025</li>
                  <li>إعلان النتائج: 31 ديسمبر 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">المرحلة 2: تنفيذ المشروع</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>نتائج المرحلة الأولى وبداية المرحلة الثانية: 1 يناير 2026</li>
                  <li>التسليم النهائي: 15 فبراير 2026</li>
                  <li>إعلان الفائزين: 28 فبراير 2026</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">المرحلة 3: تطوير المنتج</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>نتائج المرحلة الثانية وبداية المرحلة الثالثة: 1 مارس 2026</li>
                  <li>التسليم النهائي: 31 مارس 2026</li>
                  <li>إعلان الفائزين: 15 أبريل 2026</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">الجوائز</h2>
            <p className="mb-4 leading-relaxed">جميع الفرق التي تصل إلى المرحلة الثالثة ستحصل على جوائز.</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>
                <span className="text-xl font-extrabold text-yellow-500">1,000$ - المركز الأول</span>
              </li>
              <li>
                <span className="text-xl font-bold text-yellow-500">1,000$ - موزعة على ما يصل إلى خمسة فرق أخرى</span>
              </li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">سياسة المصدر المفتوح وإعادة الاستخدام</h2>
            <p className="mb-4 leading-relaxed">
              يمكن للمشاركين استخدام برمجيات قائمة أو مفتوحة المصدر بشرط توثيق الاستخدام بوضوح. يجب أن توضّح الإضافات الأصلية التي تم تطويرها خلال الهاكاثون.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">الملكية الفكرية والحقوق</h2>
            <p className="mb-4 leading-relaxed">
              يحتفظ المشاركون بالملكية الكاملة لأعمالهم. من خلال المشاركة، تمنح Code4Sudan الإذن لعرض مشروعك لأغراض ترويجية أو تعليمية، مع احتفاظك بالتحكم الإبداعي الكامل.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-green-600">الدعم للمشاركين</h2>
            <p className="mb-6 leading-relaxed">
              على الرغم من أن الفرق تقود مشاريعها بنفسها، ستوفر Code4Sudan دعمًا محدودًا حيثما أمكن.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">الدعم المتاح:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>دعم التمويل: مساهمات مالية صغيرة للاحتياجات الأساسية (مثل الاستضافة أو اشتراكات أدوات الذكاء الاصطناعي) عند إثبات الحاجة.</li>
                  <li>الإرشاد: الوصول إلى التوجيه والروابط مع خبراء أثناء عملية التطوير.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">الموارد:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>
                    تفادي الأخطاء الشائعة: اطلع على مقالات المدونة للحصول على رؤى ونصائح:{' '}
                    <a href="https://code4sudan.com/#blog" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/#blog
                    </a>
                  </li>
                  <li>
                    التحضير للهاكاثون السابق: تصفّح مركز المعرفة لسلسلة التحضير السابقة:{' '}
                    <a href="https://code4sudan.com/knowledge-hub" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/knowledge-hub
                    </a>
                  </li>
                  <li>
                    الفائزون في الهاكاثون السابق: شاهد معرض مشاريع الفرق الفائزة:{' '}
                    <a href="https://code-for-sudan.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code-for-sudan.devpost.com/project-gallery
                    </a>
                  </li>
                  <li>
                    ملاحظات لجنة التحكيم (الهاكاثون السابق): شاهد كلمات لجنة التحكيم في حفل الجوائز:{' '}
                    <a href="https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">About the Challenge</h2>
            <p className="mb-4 leading-relaxed">
              We invite you to create software that delivers tangible value to Sudanese people in areas such as healthcare, education, finance, communication, and beyond.
            </p>
            <p className="mb-4 leading-relaxed">
              Projects may take the form of mobile apps, web platforms, or other software-based tools. They can be developed for profit or offered freely. Integration of artificial intelligence (AI) is encouraged but not required.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Open exclusively to Sudanese people both in Sudan and abroad.</li>
              <li>Teams may consist of 1–5 members.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Why Participate?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">Learning:</strong> Gain knowledge in idea validation, MVP centric thinking, and dev tools.</li>
              <li><strong className="text-gray-900">Skill Development:</strong> Enhance your technical abilities and contribute to your portfolio.</li>
              <li><strong className="text-gray-900">Venture Creation:</strong> Potential to evolve your project into a business or non-profit.</li>
              <li><strong className="text-gray-900">Social Impact:</strong> Contribute positively to Sudan.</li>
              <li><strong className="text-gray-900">Recognition:</strong> Win prizes.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Competition Overview</h2>
            <p className="mb-6 leading-relaxed">The competition runs in three stages.</p>

            <div className="space-y-10">
              <div className={stageCardClass('border-l-4 border-l-green-500/80', 'border-r-4 border-r-green-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                    Stage 1
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Idea Submission</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  At this stage, you only need to submit your idea—no coding, prototype, or video required. Provide a short description (1–3 sentences or one paragraph) explaining your concept and elevator pitch. You may submit multiple ideas, but each one requires a new form submission.{" "}
                  <Link to="/knowledge-hub/advice-for-proposing-ideas" className="text-green-600 hover:text-green-700 transition-colors">
                    Here's our advice on how to propose an idea that's likely to be accepted.
                  </Link>
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Selection Criteria:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Value to Sudanese society: Does the idea solve a real problem and generate meaningful social impact?</li>
                    <li>Feasibility: Can it realistically be developed during the upcoming stages?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Submission Requirements:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>
                      Complete the{' '}
                      <a
                        href="https://forms.gle/bYahYvAqbNYfEx6B9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        Google Form
                      </a>
                      .
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Timeline:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Submissions open: November 15, 2025</li>
                    <li>Submissions close: December 15, 2025</li>
                    <li>Results announced: December 31, 2025</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-red-500/80', 'border-r-4 border-r-red-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                    Stage 2
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Project Execution</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  Teams selected from Stage 1 will build their prototypes. By the end of this stage, you must present a working prototype actively used by real people. A prototype is an early version of your product used to validate its functionality, usability, and potential impact before scaling. Your focus should be on testing the concept—not polishing the design. The key question is: Does anyone actually want or use this?
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Think lean:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Can part of your process be done manually?</li>
                    <li>Can tools like email, WhatsApp, or Excel replace complex infrastructure?</li>
                    <li>Can you build upon existing open-source or third-party software?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Examples:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>An AI-powered CV builder could start with manual CV editing to test demand.</li>
                    <li>An AI tutor for high school exams could begin as a simple interface wrapping an existing LLM.</li>
                  </ul>
                </div>
                <p className="leading-relaxed text-gray-700">
                  Impact matters more than technology. A WhatsApp group with 50 daily users is more valuable than a flashy app with 5.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">What to Submit:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>A 5-minute video explaining your idea, showing how it’s used, and demonstrating real engagement and results.</li>
                    <li>A link to your live prototype.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Judging Criteria:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>How user feedback guided your iterations.</li>
                    <li>Number of active users.</li>
                    <li>Tangible benefits delivered to users.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Timeline:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Stage 1 results and Stage 2 kickoff: January 1, 2026</li>
                    <li>Final submission: February 15, 2026</li>
                    <li>Winners announced: February 28, 2026</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-amber-500/80', 'border-r-4 border-r-amber-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
                    Stage 3
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Product Development</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  Teams advancing from Stage 2 will refine and enhance their products based on user feedback. If your prototype was a simple manual system or chat group, this is where you begin developing software. If you already have an app, this stage is about improving features, design, and reliability. Your focus should remain on making the product more effective and user-driven, not just more polished.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">What to Submit:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>A 5-minute video explaining and demonstrating how your project evolved, emphasizing user feedback and impact.</li>
                    <li>A link to your updated live prototype or demo.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Timeline:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Stage 2 results and Stage 3 kickoff: March 1, 2026</li>
                    <li>Final submission: March 31, 2026</li>
                    <li>Winners announced: April 15, 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Full timeline</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Stage 1: Idea Submission</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Submissions open: November 15, 2025</li>
                  <li>Submissions close: December 15, 2025</li>
                  <li>Results announced: December 31, 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Stage 2: Project Execution</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Stage 1 results and Stage 2 kickoff: January 1, 2026</li>
                  <li>Final submission: February 15, 2026</li>
                  <li>Winners announced: February 28, 2026</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Stage 3: Product Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Stage 2 results and Stage 3 kickoff: March 1, 2026</li>
                  <li>Final submission: March 31, 2026</li>
                  <li>Winners announced: April 15, 2026</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Prizes</h2>
            <p className="mb-4 leading-relaxed">All teams that reach Stage 3 will receive awards.</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>
                <span className="text-xl font-extrabold text-yellow-500">$1,000 - 1st Place</span>
              </li>
              <li>
                <span className="text-xl font-bold text-yellow-500">$1,000 - Shared by up to 5 other teams</span>
              </li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Open Source and Reuse Policy</h2>
            <p className="mb-4 leading-relaxed">
              Participants may use pre-existing or open-source software, provided usage is clearly documented. You must demonstrate what original contributions were made during the hackathon.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Intellectual Property &amp; Rights</h2>
            <p className="mb-4 leading-relaxed">
              Participants retain full ownership of their work. By participating, you grant Code4Sudan permission to feature your project for promotional or educational purposes. This ensures you keep creative control while allowing the community to learn from outstanding contributions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-green-600">Support for Participants</h2>
            <p className="mb-6 leading-relaxed">
              While participants lead their own projects, Code4Sudan will provide limited support where possible.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Available Support:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Funding Assistance: Small financial support for essential needs (e.g., hosting, AI tool subscriptions) upon demonstrated need.</li>
                  <li>Mentorship: Access to guidance and expert connections throughout development.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Resources:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>
                    Avoid Common Pitfalls: Read our blog articles for insights and tips:{' '}
                    <a href="https://code4sudan.com/#blog" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/#blog
                    </a>
                  </li>
                  <li>
                    Previous Hackathon Preparation: Access our knowledge hub for past hackathon prep series:{' '}
                    <a href="https://code4sudan.com/knowledge-hub/advice-for-proposing-ideas" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/knowledge-hub/advice-for-proposing-ideas
                    </a>
                  </li>
                  <li>
                    Previous Hackathon Winners: View the project gallery of our past hackathon winners:{' '}
                    <a href="https://code-for-sudan.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code-for-sudan.devpost.com/project-gallery
                    </a>
                  </li>
                  <li>
                    Judges' Remarks (Previous Hackathon): Watch the award ceremony remarks from our previous hackathon's judges:{' '}
                    <a href="https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function PyTorchHackathonPage({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';

  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {isArabic ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isArabic ? 'هاكاثون PyTorch' : 'PyTorch Hackathon'}
        </h1>
      </div>

      {isArabic ? (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">نظرة عامة</h2>
            <p className="mb-4 leading-relaxed">
              تدعوك مبادرة Code4Sudan للمشاركة في هاكاثون PyTorch! هذه فرصة للمساهمة في مشروع PyTorch.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">كيف تساهم</h2>
            <p className="mb-4 leading-relaxed">
              نشجعك على استكشاف <a href="https://pytorch.org/docs/stable/community/contribution_guide.html" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">دليل المساهمة الرسمي لـ PyTorch</a> للاطلاع على القائمة الكاملة من الخيارات. للمبتدئين، نوصي بالخيارات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>تجاوب على أسئلة الناس في منتدى النقاش.</li>
              <li>نعمل تيوتوريال جديد.</li>
              <li>تعدل أو تضيف للتوثيق الموجود.</li>
              <li>تكتشف مشاكل في الكود و تساعد في حلها.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">متطلبات التقديم</h2>
            <p className="mb-4 leading-relaxed">لتقييم مساهماتك، يرجى تقديم ما يلي:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>رابط ملفك الشخصي على GitHub ومنتدى النقاش الخاص بـ PyTorch.</li>
              <li>شرح مفصل للمساهمة الواحدة التي تفتخر بها أكثر.</li>
              <li>فقرة قصيرة تلخص جميع مساهماتك التي أكملتها خلال فترة الهاكاثون (إذا قمت بعدة مساهمات).</li>
              <li>وصف لما كنت تعرفه قبل البدء وما تعلمته في العملية.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">لماذا تشارك؟</h2>
            <p className="mb-4 leading-relaxed">بالإضافة إلى فرصة الفوز بجائزة 100 دولار، تقدم المشاركة في هاكاثون PyTorch العديد من الفوائد القيمة:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">ساهم في واحد من أهم مشاريع الذكاء الاصطناعي:</strong> ساهم مباشرة في PyTorch، أحد أهم أطر التعلم العميق في العالم.</li>
              <li><strong className="text-gray-900">تطوير المهارات والتعلم:</strong> تحدى نفسك واكتسب مهارات تقنية جديدة، وهو محور رئيسي في معايير التحكيم.</li>
              <li><strong className="text-gray-900">بناء ملفك المهني:</strong> أنشئ مساهمات ظاهرة على ملفاتك في GitHub و PyTorch لتعزيز خبرتك المهنية.</li>
              <li><strong className="text-gray-900">التواصل مع المجتمع:</strong> تفاعل مع مجتمع PyTorch الرسمي من خلال أنشطة متنوعة مثل الإجابة على الأسئلة أو تحسين التوثيق.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">معايير التحكيم</h2>
            <p className="mb-4 leading-relaxed">سيتم تقييم المشاركات بناءً على الجودة والكمية.</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">الجودة</h3>
              <p className="mb-2 leading-relaxed">نقيّم دقة واكتمال ووضوح وصرامة عملك التقنية. الأسئلة الرئيسية التي نأخذها في الاعتبار:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>ما مدى دقة مساهمتك؟</li>
                <li>هل حل ردك على مشكلة ما المشكلة بشكل صحيح؟</li>
                <li>ما مدى قيمة مساهمتك للمجتمع وقاعدة الكود؟</li>
                <li>كم تعلمت؟</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">الكمية</h3>
              <p className="leading-relaxed">هذا يقارن حجم عملك مع المشاركين الآخرين. على سبيل المثال، المشارك الذي حل 10 مشاكل بشكل صحيح سيُرتب أعلى من الذي عالج 3 فقط.</p>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <strong className="text-gray-900">ملاحظة مهمة:</strong> لا تقم بإرسال رسائل عشوائية في المنتدى. المساهمات العشوائية أو التي لا معنى لها لن تكسب نقاطًا وقد تضر بسمعتك. يرجى احترام العملية من خلال تقديم مساهمات ذات معنى ومدروسة فقط.
              </p>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">الجدول الزمني</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">فترة التقديم:</strong> آخر موعد للتقديم هو الساعة 5:00 مساءً يوم 28 فبراير 2025.</li>
              <li><strong className="text-gray-900">إعلان الفائز:</strong> بعد أسبوع واحد من انتهاء فترة التقديم.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">الجائزة</h2>
            <p className="text-xl font-bold text-yellow-500">الفائز بالمركز الأول سيحصل على 100 دولار أمريكي.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-red-500">الموارد</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>يرجى قراءة هذا الدليل بعناية، حيث يحتوي على جميع المعلومات اللازمة.</li>
              <li>إذا واجهت صعوبة، لا تتردد في طلب المساعدة في منتدى النقاش.</li>
            </ul>
          </section>
        </>
      ) : (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Overview</h2>
            <p className="mb-4 leading-relaxed">
              Code4Sudan invites you to participate in our PyTorch Hackathon! This is an opportunity to contribute to the PyTorch project.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">How to Contribute</h2>
            <p className="mb-4 leading-relaxed">
              We encourage you to explore the <a href="https://pytorch.org/docs/stable/community/contribution_guide.html" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">official PyTorch contribution guide</a> for a full list of options. For beginners, we recommend the following options from the full list to get started:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Respond to questions in the discussion forum.</li>
              <li>Develop a new tutorial.</li>
              <li>Contribute to the existing documentation.</li>
              <li>Report or investigate issues, including reproducing problems.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Submission Requirements</h2>
            <p className="mb-4 leading-relaxed">To have your contributions judged, please provide the following:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>A link to your profiles on both GitHub and the PyTorch discussion forum.</li>
              <li>A detailed explanation of the single contribution you are most proud of.</li>
              <li>A short paragraph summarizing all your contributions completed during the hackathon period (if you made multiple contributions).</li>
              <li>A description of what you knew before starting and what you learnt in the process.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Why Participate?</h2>
            <p className="mb-4 leading-relaxed">Beyond the chance to win the 100 USD grand prize, participating in the PyTorch Hackathon offers several valuable benefits:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">Make a Meaningful Contribution:</strong> Directly contribute to PyTorch, one of the world's leading deep learning frameworks.</li>
              <li><strong className="text-gray-900">Skill Development and Learning:</strong> Challenge yourself and acquire new technical skills, which is a key focus of the judging criteria.</li>
              <li><strong className="text-gray-900">Build Your Portfolio:</strong> Create visible contributions for your GitHub and PyTorch profiles to enhance your professional experience.</li>
              <li><strong className="text-gray-900">Community Engagement:</strong> Engage with the official PyTorch community through various activities like responding to questions or improving documentation.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Judging Criteria</h2>
            <p className="mb-4 leading-relaxed">Submissions will be evaluated based on both Quality and Quantity.</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality</h3>
              <p className="mb-2 leading-relaxed">We assess the accuracy, completeness, clarity, and technical rigor of your work. Key questions we consider include:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>How accurate was your contribution?</li>
                <li>Did your response to an issue correctly solve the problem?</li>
                <li>How valuable is your contribution to the community and the codebase?</li>
                <li>How much did you learn?</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quantity</h3>
              <p className="leading-relaxed">This compares the volume of your work against other participants. For example, a participant who correctly resolved 10 issues will be ranked higher than one who addressed only 3.</p>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <strong className="text-gray-900">Important Note:</strong> Do not spam the forum. Random or meaningless contributions will not earn points and may harm your reputation. Please respect the process by making only meaningful and well-thought-out contributions.
              </p>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Timeline</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">Submission Period:</strong> The submission deadline is scheduled for 5:00 PM on February 28th, 2025.</li>
              <li><strong className="text-gray-900">Winner Announcement:</strong> One week after the submission deadline.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Prize</h2>
            <p className="text-xl font-bold text-yellow-500">The first-place winner will receive 100 USD.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-red-500">Resources</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Please read this guide carefully, as it contains all the necessary information.</li>
              <li>If you get stuck, don't hesitate to ask for help in the discussion forum.</li>
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

function WorkshopSignupPage({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';

  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {isArabic ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isArabic ? 'سجّل لقيادة ورشة عمل!' : 'Sign-up to Lead a Workshop!'}
        </h1>
      </div>

      {isArabic ? (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">نظرة عامة</h2>
            <p className="mb-4 leading-relaxed">
              ندعوك للانضمام إلى مبادرة Code4Sudan عبر قيادة ورشة عمل. نعني بـ"ورشة العمل" أي تجربة تعليمية تفاعلية وجذابة في علوم الحاسوب. لها ثلاثة متطلبات أساسية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>يجب أن تكون مرتبطة بعلوم الحاسوب.</li>
              <li>يجب على المشاركين أداء قدر من العمل.</li>
              <li>يجب أن يتلقى المشاركون ملاحظات على عملهم من قائد الورشة.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              الصيغة والمدة مرنة تمامًا لتناسب احتياجاتك. يمكن أن تكون الورش افتراضية أو حضورية، وتتراوح من يوم واحد إلى شهر، ولثلاثة مشاركين أو مئة، ويمكن أن تكون غير متزامنة أو متزامنة أو مزيجًا من الاثنين. ستساعد Code4Sudan في التحضير واستقطاب المشاركين والإعلان، وقد تقدم جوائز صغيرة للمشاركين حسب توفر التمويل. ما يلي يوضح ما نفكر فيه، لكن إذا كانت لديك فكرة مختلفة تعتقد أنها تتماشى مع ركائز Code4Sudan (<a href="https://code4sudan.com/#about" className="text-green-600 hover:text-green-700 transition-colors">https://code4sudan.com/#about</a>)، فنحن حريصون على سماعها.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">من نبحث عنه</h2>
            <p className="mb-4 leading-relaxed">
              نبحث عن أفراد يتمتعون بخبرة قوية في علوم الحاسوب ومتحمسين لمشاركة معرفتهم مع الناس في السودان من خلال صيغة تفاعلية وجذابة.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">مسؤولياتك كقائد ورشة</h2>
            <p className="mb-4 leading-relaxed">
              يتضمن دورك أربع مراحل رئيسية:
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">1. تحديد هدف التعلم والمهمة:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>حدد المهارة أو المعرفة المحددة التي سيكتسبها المشاركون.</li>
                <li>حدد مهمة عملية أو مشروعًا محددًا كهدف.</li>
                <li>أمثلة: استخدام التعلم الآلي لتحليل صور الأقمار الصناعية للسودان، إعادة تنفيذ خوارزمية معينة، ضبط نموذج لغوي كبير مفتوح المصدر، المساهمة في البرمجيات مفتوحة المصدر، أو تنظيم مسابقة التقاط العلم. يمكن أن تكون المهمة أيضًا عملًا نظريًا، مثل حل مسائل رياضية أو إثبات نظرية. الاحتمالات واسعة، لذا كن مبدعًا!</li>
                <li>نحن مهتمون بشكل خاص بالموضوعات المتوسطة إلى المتقدمة، حيث أن الموضوعات التمهيدية (خاصة في الذكاء الاصطناعي) متاحة بسهولة في كثير من الأحيان. أمثلة على الموضوعات التمهيدية التي لا نبحث عنها: "كيفية تدريب شبكة عصبية في PyTorch" أو "مقدمة في Python".</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2. توثيق المهمة بوضوح:</h3>
              <p className="mb-2">اكتب وصفًا شاملاً للمهمة، يتضمن:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>الخطوات المطلوبة للمشاركين.</li>
                <li>أي مواعيد نهائية للتسليم.</li>
                <li>معايير التقييم.</li>
              </ul>
              <p className="mt-2 text-gray-600 italic">
                (يمكنك الاستلهام من هاكاثوناتنا السابقة: <a href="https://code-for-sudan.devpost.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">https://code-for-sudan.devpost.com/</a>)
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3. توفير الموارد والإرشاد:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>قدم مواد بداية، والتي يمكن أن تكون محتوى تنشئه أنت أو موارد موجودة على الإنترنت.</li>
                <li>لديك خيار إجراء جلسة واحدة أو أكثر مباشرة للإرشاد والشرح والأسئلة والأجوبة.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4. التقييم وتقديم ملاحظات بناءة:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>راجع المشاريع المكتملة من المشاركين.</li>
                <li>قدم ملاحظات مدروسة وبناءة على عملهم.</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-red-500">سجّل الآن</h2>
            <p className="mb-4 leading-relaxed">
              إذا كنت مهتمًا بقيادة ورشة عمل، يرجى ملء نموذج التسجيل أدناه:
            </p>
            <a
              href="https://docs.google.com/forms/d/1inIl0viAQ9OU6l8LuGalthC8KiVRX9mBgg-jR9YhxnU/viewform?pli=1&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              نموذج التسجيل
            </a>
          </section>
        </>
      ) : (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Overview</h2>
            <p className="mb-4 leading-relaxed">
              We invite you to join the Code4Sudan initiative by leading a workshop. By "workshop," we mean any engaging, interactive computer science learning experience. It has three main requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>It must be related to Computer Science (CS).</li>
              <li>Participants must perform some amount of work.</li>
              <li>Participants must receive some feedback on their work from the workshop lead.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              The format and duration are completely flexible to fit your needs. Workshops can be virtual or in-person, ranging from a single day to a month, can be for three participants or a hundred, and can be asynchronous, synchronous, or a mix of both. Code4Sudan will assist with preparation, participant recruitment, and advertising, and may offer small prizes for the participants depending on funding availability. The following details what we have in mind, but if you have an idea that differs but you think it aligns with the pillars of Code4Sudan (<a href="https://code4sudan.com/#about" className="text-green-600 hover:text-green-700 transition-colors">https://code4sudan.com/#about</a>), then we would be keen to hear it.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Who We're Looking For</h2>
            <p className="mb-4 leading-relaxed">
              We are seeking individuals with strong Computer Science expertise who are enthusiastic about sharing their knowledge with people in Sudan through an engaging, interactive format.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Your Responsibilities as a Workshop Lead</h2>
            <p className="mb-4 leading-relaxed">
              Your role involves four key stages:
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Define the Learning Objective and Task:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Determine the specific skill or knowledge participants will gain.</li>
                <li>Define a specific practical task or project as the goal.</li>
                <li>Examples: Using Machine Learning to analyze satellite imagery of Sudan, reimplementing a specific algorithm, fine-tuning an open-source Large Language Model (LLM), contributing to open-source software, or organizing a capture-the-flag competition. The task can also be theoretical work, such as solving mathematical problems or proving a theorem. The possibilities are vast, so feel free to be creative!</li>
                <li>We are particularly interested in intermediate to advanced topics, as introductory topics (especially in AI) are often readily available. Examples of introductory topics we are not seeking include: "How to train a neural network in PyTorch" or "Introduction to Python."</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Clearly Document the Task:</h3>
              <p className="mb-2">Write a comprehensive description of the task, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>The required steps for participants.</li>
                <li>Any relevant submission deadlines.</li>
                <li>The evaluation criteria.</li>
              </ul>
              <p className="mt-2 text-gray-600 italic">
                (Inspiration can be found in our previous hackathons: <a href="https://code-for-sudan.devpost.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">https://code-for-sudan.devpost.com/</a>)
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Provide Resources and Guidance:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Offer starting materials, which can be content you create or existing online resources.</li>
                <li>You have the option to conduct one or more live sessions for guidance, walk-throughs, and Q&A.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4. Evaluate and Give Constructive Feedback:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Review the completed submissions from participants.</li>
                <li>Provide thoughtful and constructive feedback on their work.</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Sign Up Now</h2>
            <p className="mb-4 leading-relaxed">
              If you are interested in leading a workshop, please fill out the sign-up form below:
            </p>
            <a
              href="https://docs.google.com/forms/d/1inIl0viAQ9OU6l8LuGalthC8KiVRX9mBgg-jR9YhxnU/viewform?pli=1&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Sign-up Form
            </a>
          </section>
        </>
      )}
    </div>
  );
}

function Hackathon2ResultsPage({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';
  const listMargin = isArabic ? 'mr-4' : 'ml-4';
  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {isArabic ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isArabic
            ? 'نتائج هاكاثون 2: مسابقة #برمج_للسودان'
            : 'Hackathon 2 Results: #Code4Sudan Competition'}
        </h1>
      </div>

      <section className="mb-16 pb-16 border-b border-gray-200">
        <p className="mb-4 leading-relaxed text-lg">
          {isArabic ? (
            <>
              بفخر كبير، نعلن عن اختتام مسابقة <strong>#برمج_للسودان</strong> بنجاح باهر وبنتائج مبهرة، حيث وزعنا أكثر من <strong>2000 دولار أمريكي</strong> كجوائز إجمالية! 🎉💰
            </>
          ) : (
            <>
              With great pride, we announce the conclusion of the <strong>#Code4Sudan</strong> competition with outstanding success and impressive results, having distributed over <strong>$2,000 USD</strong> in total prizes! 🎉💰
            </>
          )}
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-green-600">
          {isArabic ? '📊 إحصائيات المسابقة الملهمة' : '📊 Inspiring Competition Stats'}
        </h2>
        <ul className={`list-disc list-inside space-y-2 text-gray-700 ${listMargin}`}>
          {isArabic ? (
            <>
              <li>استقبلنا <strong>114 فكرة</strong> إبداعية. 💡</li>
              <li>تأهلت <strong>6 مشاريع</strong> مبتكرة للمرحلة النهائية. 🏅</li>
              <li>الأهم: جميع المشاريع الفائزة يتم تطبيقها حاليًا على أرض الواقع ويستخدمها مستخدمون حقيقيون! 🚀✅</li>
            </>
          ) : (
            <>
              <li>We received <strong>114 creative ideas</strong>. 💡</li>
              <li><strong>6 innovative projects</strong> qualified for the final stage. 🏅</li>
              <li>Most importantly: all winning projects are currently being applied in the real world and used by actual users! 🚀✅</li>
            </>
          )}
        </ul>
      </section>

      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-green-600">
          {isArabic
            ? '🏆 المركز الأول: شريان (جائزة 1000 دولار) — 🩸 إنقاذ حياة'
            : '🏆 1st Place: Shrayan ($1,000 prize) — 🩸 Saving Lives'}
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>{isArabic ? 'المشروع:' : 'The project:'}</strong>{' '}
          {isArabic
            ? 'تطبيق للتبرع بالدم يربط المحتاجين بالمتبرعين. تم تحميله أكثر من مائة مرة واستُخدم بالفعل لإنقاذ حياة بعض المرضى.'
            : 'A blood donation app connecting those in need with donors. Downloaded over a hundred times and already used to save the lives of several patients.'}
        </p>
        <ul className={`space-y-2 text-gray-700 ${listMargin}`}>
          <li>
            🎬 <strong>{isArabic ? 'شاهد الفيديو:' : 'Watch the video:'}</strong>{' '}
            <a href="https://vimeo.com/1179106044?share=copy&fl=sv&fe=ci" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">vimeo.com/1179106044</a>
          </li>
          <li>
            📱 <strong>{isArabic ? 'تجربة التطبيق:' : 'Try the app:'}</strong>{' '}
            <a href="https://play.google.com/store/apps/details?id=com.mqoder.shryan_sd&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">Google Play</a>
          </li>
        </ul>
        <p className="mt-4 mb-2 font-semibold">🤝 {isArabic ? 'تواصل مع الفريق:' : 'Get in touch with the team:'}</p>
        <ul className={`space-y-1 text-gray-700 ${listMargin}`}>
          <li>
            {isArabic ? 'مروان إبراهيم' : 'Murwan Ibrahim'} —{' '}
            <a href="https://www.linkedin.com/in/murwan-ibrahim-250860228" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
          </li>
          <li>
            {isArabic ? 'محمد طاهر' : 'Mohammed Tahir'} —{' '}
            <a href="https://www.linkedin.com/in/mohammed-tahir-bilal-50886b356" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
          </li>
        </ul>
      </section>

      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-red-500">
          {isArabic
            ? '🏅 المراكز الثانية المشتركة (300 دولار لكل مشروع)'
            : '🏅 Joint 2nd Place ($300 per project)'}
        </h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            {isArabic ? 'مستشارك — ⚖️ مساعد قانوني ذكي' : 'Mustasharak — ⚖️ AI Legal Assistant'}
          </h3>
          <p className="mb-3 leading-relaxed">
            <strong>{isArabic ? 'المشروع:' : 'The project:'}</strong>{' '}
            {isArabic
              ? 'مساعد ذكي للإجابة على الأسئلة القانونية.'
              : 'An AI assistant that answers legal questions.'}
          </p>
          <ul className={`space-y-2 text-gray-700 ${listMargin}`}>
            <li>
              🎬 <strong>{isArabic ? 'شاهد الفيديو:' : 'Watch the video:'}</strong>{' '}
              <a href="https://youtu.be/oitCc39oduE" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">youtu.be/oitCc39oduE</a>
            </li>
            <li>
              💬 <strong>{isArabic ? 'تجربة المشروع:' : 'Try the project:'}</strong>{' '}
              {isArabic ? 'بوت مستشارك على تليجرام —' : 'Mustasharak bot on Telegram —'}{' '}
              <a href="https://t.me/ItsMustasharbot" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">@ItsMustasharbot</a>
            </li>
          </ul>
          <p className="mt-3 mb-2 font-semibold">📞 {isArabic ? 'تواصل مع الفريق:' : 'Get in touch with the team:'}</p>
          <ul className={`space-y-1 text-gray-700 ${listMargin}`}>
            <li>
              {isArabic ? 'أسماء الهادي' : 'Asma Elhadi'} —{' '}
              <a href="https://www.linkedin.com/in/asma-elhadi-006078169/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
            </li>
            <li>
              {isArabic ? 'عمر عبد الرحيم التوم' : 'Omar Abdulrahim Eltoum'} —{' '}
              <a href="https://www.linkedin.com/in/omar-abdulrahim-1o/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            {isArabic ? 'مكتبة السودان — 📚 مصدر تعليمي' : 'Sudan Library — 📚 Educational Resource'}
          </h3>
          <p className="mb-3 leading-relaxed">
            <strong>{isArabic ? 'المشروع:' : 'The project:'}</strong>{' '}
            {isArabic
              ? 'موقع إلكتروني لتوفير الكتب المدرسية والامتحانات والملخصات.'
              : 'A website providing school textbooks, exams, and summaries.'}
          </p>
          <ul className={`space-y-2 text-gray-700 ${listMargin}`}>
            <li>
              🎬 <strong>{isArabic ? 'شاهد الفيديو:' : 'Watch the video:'}</strong>{' '}
              <a href="https://youtu.be/pbVmHVk-d0g?si=hGX8IyxkYHtjezZ-" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">youtu.be/pbVmHVk-d0g</a>
            </li>
            <li>
              🌐 <strong>{isArabic ? 'تجربة المشروع:' : 'Try the project:'}</strong>{' '}
              <a href="https://sudanlibrary.kesug.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">sudanlibrary.kesug.com</a>
            </li>
          </ul>
          <p className="mt-3 mb-2 font-semibold">🧑‍💻 {isArabic ? 'تواصل مع الفريق:' : 'Get in touch with the team:'}</p>
          <ul className={`space-y-1 text-gray-700 ${listMargin}`}>
            <li>
              {isArabic ? 'محمد منصور' : 'Mohammed Mansour'} —{' '}
              <a href="https://www.linkedin.com/in/mohammed-mansour-gumaa-65633b275/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            {isArabic ? 'شفاء — 💊 إدارة الرعاية الصحية' : 'Shifaa — 💊 Healthcare Management'}
          </h3>
          <p className="mb-3 leading-relaxed">
            <strong>{isArabic ? 'المشروع:' : 'The project:'}</strong>{' '}
            {isArabic
              ? 'سجل طبي إلكتروني لكل شخص ونظام إدارة للصيدليات.'
              : 'An electronic medical record for every person and a pharmacy management system.'}
          </p>
          <ul className={`space-y-2 text-gray-700 ${listMargin}`}>
            <li>
              🎬 <strong>{isArabic ? 'شاهد الفيديو:' : 'Watch the video:'}</strong>{' '}
              <a href="https://youtu.be/cIsqfHUEiOg?si=i1IW8OQscIxQslUF" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">youtu.be/cIsqfHUEiOg</a>
            </li>
            <li>
              💻 <strong>{isArabic ? 'تجربة المشروع:' : 'Try the project:'}</strong>{' '}
              <a href="https://shifaa-blue.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">shifaa-blue.vercel.app</a>
            </li>
          </ul>
          <p className="mt-3 mb-2 font-semibold">🌟 {isArabic ? 'تواصل مع الفريق:' : 'Get in touch with the team:'}</p>
          <ul className={`space-y-1 text-gray-700 ${listMargin}`}>
            <li>
              {isArabic ? 'هبة عبد الرحمن' : 'Heba Abdulrahman'} —{' '}
              <a href="https://www.linkedin.com/in/heba-fadlaila-b04621225" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
            </li>
            <li>
              {isArabic ? 'مجذوب الصديق' : 'Majzoub Siddig'} —{' '}
              <a href="https://www.linkedin.com/in/majzoub-siddig" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
            </li>
            <li>
              {isArabic ? 'حسام فرحات' : 'Hosam Farahat'} —{' '}
              <a href="https://www.linkedin.com/in/hosam-mohamed-eid-farahat-a6a723294" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
            </li>
            <li>
              {isArabic ? 'فتح الرحمن الجعلي' : 'Fath Alrhman Aljaali'} —{' '}
              <a href="https://www.linkedin.com/in/fath-alrhman-3a61852a2" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-green-600">
          {isArabic
            ? '🥉 المركز الثالث: أمانة (150 دولار) — 🤲 إدارة العمل الخيري'
            : '🥉 3rd Place: Amana ($150) — 🤲 Charity Work Management'}
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>{isArabic ? 'المشروع:' : 'The project:'}</strong>{' '}
          {isArabic
            ? 'نظام لإدارة عمل المنظمات الخيرية.'
            : 'A management system for charitable organizations.'}
        </p>
        <ul className={`space-y-2 text-gray-700 ${listMargin}`}>
          <li>
            📽️ <strong>{isArabic ? 'شاهد الفيديو:' : 'Watch the video:'}</strong>{' '}
            <a href="https://youtu.be/w4chwhfZTLc?si=hZbQHcrOFT4wDU6g" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">youtu.be/w4chwhfZTLc</a>
          </li>
        </ul>
        <p className="mt-3 mb-2 font-semibold">👩‍💻 {isArabic ? 'تواصل مع الفريق:' : 'Get in touch with the team:'}</p>
        <ul className={`space-y-1 text-gray-700 ${listMargin}`}>
          <li>
            {isArabic ? 'وفاء ماشا' : 'Wafaa Masha'} —{' '}
            <a href="https://www.linkedin.com/in/wafaa-masha" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
          </li>
        </ul>
      </section>

      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-red-500">
          {isArabic
            ? '⭐ المركز الرابع: مفقود (50 دولار) — 🔎 البحث بالذكاء الاصطناعي'
            : '⭐ 4th Place: Mafqood ($50) — 🔎 AI-Powered Search'}
        </h2>
        <p className="mb-4 leading-relaxed">
          <strong>{isArabic ? 'المشروع:' : 'The project:'}</strong>{' '}
          {isArabic
            ? 'موقع للبحث عن الأشخاص المفقودين باستخدام الذكاء الاصطناعي.'
            : 'A website for searching for missing persons using artificial intelligence.'}
        </p>
        <ul className={`space-y-2 text-gray-700 ${listMargin}`}>
          <li>
            📽️ <strong>{isArabic ? 'شاهد الفيديو:' : 'Watch the video:'}</strong>{' '}
            <a href="https://youtu.be/psjPBumf-ps?si=b3AsKoSGN_6DkDCa" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">youtu.be/psjPBumf-ps</a>
          </li>
          <li>
            🤖 <strong>{isArabic ? 'تجربة المشروع:' : 'Try the project:'}</strong>{' '}
            <a href="https://lost-in-sudan.online/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">lost-in-sudan.online</a>
          </li>
        </ul>
        <p className="mt-3 mb-2 font-semibold">🤝 {isArabic ? 'تواصل مع الفريق:' : 'Get in touch with the team:'}</p>
        <ul className={`space-y-1 text-gray-700 ${listMargin}`}>
          <li>
            {isArabic ? 'مصطفى عبدو' : 'Mustafa Abdo'} —{' '}
            <a href="https://www.linkedin.com/in/mustafa-abdo" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">LinkedIn</a>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <p className="mb-6 leading-relaxed text-lg">
          {isArabic
            ? 'نهنئ جميع الفرق الفائزة على إبداعهم والتزامهم بتقديم حلول تقنية ذات تأثير حقيقي على أرض الواقع! ندعوكم لدعم هذه المشاريع الواعدة والتواصل مع مطوريها. 👏'
            : 'We congratulate all the winning teams on their creativity and commitment to delivering tech solutions with real-world impact! We invite you to support these promising projects and reach out to their developers. 👏'}
        </p>

        <h2 className="text-2xl font-bold mb-4 text-green-600">
          {isArabic ? 'للمزيد من التفاصيل' : 'More Details'}
        </h2>
        <ul className={`space-y-2 text-gray-700 ${listMargin}`}>
          <li>
            📺 <strong>
              {isArabic ? 'شاهد الجلسة الختامية كاملة:' : 'Watch the full closing session:'}
            </strong>{' '}
            <a href="https://youtu.be/-FAmGzyh9IE?si=UMcMUojAW1M-DtoH" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">youtu.be/-FAmGzyh9IE</a>
          </li>
          <li>
            🌐 <strong>
              {isArabic ? 'كل تفاصيل المسابقة والمبادرة:' : 'All competition and initiative details:'}
            </strong>{' '}
            <a href="http://Code4sudan.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">Code4sudan.com</a>
          </li>
        </ul>

        <p className="mt-8 text-gray-600 italic" dir="ltr">
          {isArabic
            ? '#برمجة #تكنولوجيا #السودان #ابتكار #تطبيقات_هادفة #ريادة_الأعمال #TechForGood 💻🇸🇩'
            : '#Coding #Technology #Sudan #Innovation #ImpactfulApps #Entrepreneurship #TechForGood 💻🇸🇩'}
        </p>
      </section>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isSubpageHeroVisible, setIsSubpageHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Switch toggle style once user scrolls past the hero (roughly 90vh)
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.9);
      // Sub-page heroes are shorter (~200px), switch at 160px
      setIsSubpageHeroVisible(window.scrollY < 160);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Reset when route changes
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Use hero styles when on homepage hero OR on a sub-page with a page-hero visible
  const useHeroStyle = (isHomePage && isHeroVisible) || (!isHomePage && isSubpageHeroVisible);

  return (
    <div
      className={`min-h-screen bg-cream ${lang === 'ar' ? 'text-right' : ''}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50 flex flex-row items-center gap-3" dir="ltr">
        <span className={`text-sm font-medium ${useHeroStyle ? 'text-white drop-shadow-md' : 'text-gray-700'}`}>
          {lang === 'ar' ? 'اللغة' : 'Language'}
        </span>
        <div
          role="group"
          aria-label={lang === 'ar' ? 'تبديل اللغة' : 'Language toggle'}
          className={`inline-flex rounded-lg overflow-hidden shadow-lg ${useHeroStyle
            ? 'border border-white/30 bg-white/20 backdrop-blur-sm'
            : 'border border-gray-300 bg-white'
            }`}
        >
          <button
            type="button"
            onClick={() => setLang('ar')}
            className={`px-4 py-2 text-sm font-semibold focus:outline-none transition-all duration-200 ${lang === 'ar'
              ? 'bg-[#D4A853] text-gray-900'
              : useHeroStyle
                ? 'text-white hover:bg-white/20'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
            aria-pressed={lang === 'ar'}
          >
            AR
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-4 py-2 text-sm font-semibold focus:outline-none transition-all duration-200 ${useHeroStyle ? 'border-l border-white/30' : 'border-l border-gray-300'
              } ${lang === 'en'
                ? 'bg-[#0D4F4F] text-white'
                : useHeroStyle
                  ? 'text-white hover:bg-white/20'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/launch-hackathon" element={<LaunchHackathonPage lang={lang} />} />
        <Route path="/hackathon-2" element={<Hackathon2Page lang={lang} />} />
        <Route path="/hackathon-2-results" element={<Hackathon2ResultsPage lang={lang} />} />
        <Route path="/pytorch-hackathon" element={<PyTorchHackathonPage lang={lang} />} />
        <Route path="/workshop-signup" element={<WorkshopSignupPage lang={lang} />} />
        <Route path="/blog/:id" element={<BlogPost lang={lang} />} />
        <Route path="/contact" element={<ContactUsPage lang={lang} />} />
        <Route path="/knowledge-hub" element={<KnowledgeHubPage lang={lang} />} />
        <Route path="/knowledge-hub/:id" element={<KnowledgeHubItemPage lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;