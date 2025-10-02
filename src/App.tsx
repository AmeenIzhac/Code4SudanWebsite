import { Code } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

function HomePage({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <>
      {lang === 'ar' ? (
        <>
          {/* Header */}
          <header className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-red-500" />
              <h1 className="text-3xl font-bold text-red-500">كود من أجل السودان</h1>
            </div>
            <p className="text-lg text-gray-700">تمكين السودان عبر التكنولوجيا والتعليم</p>
            <p className="mt-4">
              <strong>انضم إلى المجتمع:</strong>{' '}
              <a 
                href="https://t.me/+eb1WfhdFFAtkOGU0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 hover:underline transition-colors"
              >
                https://t.me/+eb1WfhdFFAtkOGU0
              </a>
            </p>
          </header>

          {/* Events */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-500">الفعاليات</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">فعاليات سابقة</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/launch-hackathon" 
                      className="text-red-400 hover:text-red-500 hover:underline transition-colors"
                    >
                      هاكاثون الإطلاق من 1 مايو - 31 يوليو
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">فعاليات قادمة</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/idea-proposal" 
                      className="text-red-400 hover:text-red-500 hover:underline transition-colors"
                    >
                      تقديم الأفكار - التاريخ سيحدد لاحقًا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-500">عن المبادرة</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400">رسالتنا</h3>
              <p className="mb-4 leading-relaxed">
                رسالتنا هي نشر وتحديث ودعم علوم الحاسوب في السودان — ليس كمجال تعليمي فحسب، بل أيضًا كأداة عملية لمعالجة احتياجات السودان.
              </p>
              <p className="mb-6 leading-relaxed">
                المبادرة تقوم على ركيزتين أساسيتين متساويتين:
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-red-400">الركيزة التعليمية</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>دعم وتحسين تعليم علوم الحاسوب في السودان</li>
                  <li>تمكين المعلمين والموجهين بالمصادر</li>
                  <li>تزويد الطلاب بالمعرفة والمهارات العملية الحديثة</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-red-400">ركيزة الإنتاج</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>تمكين ومكافأة تطبيق علوم الحاسوب لحل التحديات السودانية</li>
                  <li>توجيه ودعم الابتكار الذي يفيد السودان مباشرة</li>
                  <li>ربط المشاريع والأفكار بالموارد والإرشاد وفرص الشركات الناشئة</li>
                </ul>
              </div>

              <p className="text-gray-600 italic">
                كلا الركيزتين ضروريتان وبنفس الأهمية: تطوير التعليم يؤسس القاعدة، بينما التطبيق الواقعي يحقق الأثر. تكون الحلول فعالة فقط عندما يتقدم التعلم والابتكار العملي معًا.
              </p>
            </div>
          </section>

          {/* How We Work */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-500">كيف نعمل</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400">دعم الناس في السودان</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>توفير الوصول للتعليم عبر الجلسات والدروس والمحاضرات</li>
                <li>دعم المعلمين من خلال تمويل المواد والتخطيط وتحسين المناهج والدعم الإعلامي والتغذية الراجعة</li>
                <li>مكافأة الابتكار عبر الحوافز المالية والإرشاد والربط بالخبراء وتوجيه ريادة الأعمال</li>
                <li>ربط أصحاب التحديات بالمواهب التقنية لإيجاد حلول عملية</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400">التواصل مع الشتات</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>توفير منصة للتواصل مع الطلاب والمعلمين والمبتكرين في السودان</li>
                <li>إتاحة فرص للتدريس والإرشاد أو التعاون عن بُعد</li>
                <li>دعوة حلول يقودها الشتات لمعالجة تحديات السودان</li>
                <li>تمكين المساهمات المالية لاستدامة برامج التعليم والابتكار</li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-8 border-t border-gray-300">
            <p className="text-gray-600">© 2025 كود من أجل السودان</p>
          </footer>
        </>
      ) : (
    <>
      {/* Header */}
      <header className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Code className="w-8 h-8 text-red-500" />
          <h1 className="text-3xl font-bold text-red-500">Code for Sudan</h1>
        </div>
        <p className="text-lg text-gray-700">
          Empowering Sudan through technology and education
        </p>
        <p className="mt-4">
          <strong>Join the community!:</strong>{' '}
          <a 
            href="https://t.me/+eb1WfhdFFAtkOGU0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 hover:underline transition-colors"
          >
            https://t.me/+eb1WfhdFFAtkOGU0
          </a>
        </p>
      </header>

      {/* Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">Events</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Past Events</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/launch-hackathon" 
                  className="text-red-400 hover:text-red-500 hover:underline transition-colors"
                >
                  Launch Hackathon of May 1 - Jul 31
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Upcoming Events</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <Link 
                  to="/idea-proposal" 
                  className="text-red-400 hover:text-red-500 hover:underline transition-colors"
                >
                  Idea Proposal Date TBD
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">About</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Our Mission</h3>
          <p className="mb-4 leading-relaxed">
            Our mission is to spread, modernize, and support computer science in Sudan—not only as an educational field but equally as a practical tool to address Sudanese needs.
          </p>
          <p className="mb-6 leading-relaxed">
            The initiative is built on two equally essential pillars:
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-red-400">Educational Pillar</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Support and improve CS education in Sudan</li>
              <li>Empower teachers, mentors, and educators with resources</li>
              <li>Equip students with modern knowledge and practical skills</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-red-400">Production Pillar</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Enable and reward the application of CS to solve Sudan-specific challenges</li>
              <li>Guide and support innovation that benefits Sudan directly</li>
              <li>Connect projects and ideas with resources, mentorship, and startup opportunities</li>
            </ul>
          </div>

          <p className="text-gray-600 italic">
            Both pillars are necessary and of equal importance: advancing CS education provides a foundation, while real application brings tangible impact. Solutions are effective only when learning and practical innovation move forward together.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">How We Work</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Supporting People in Sudan</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Provide access to education through sessions, tutorials, and lectures</li>
            <li>Support teachers and educators by funding materials, planning courses, improving curricula, media support, and feedback</li>
            <li>Reward innovation for Sudan by offering financial incentives, mentorship, expert connections, and startup guidance</li>
            <li>Connect stakeholders with tech talent: facilitate partnerships between those facing local challenges and people with tech skills who can help solve these problems</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Engaging the Diaspora</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Offer a platform to connect with students, educators, and innovators in Sudan</li>
            <li>Provide opportunities to teach, mentor, or collaborate remotely</li>
            <li>Invite diaspora-led solutions that address Sudan's challenges</li>
            <li>Enable financial contributions to sustain education and innovation programs</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-8 border-t border-gray-300">
        <p className="text-gray-600">© 2025 Code for Sudan</p>
      </footer>
        </>
      )}
    </>
  );
}

function LaunchHackathonPage({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors mb-6"
        >
          {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-3xl font-bold text-red-500 mb-4">{lang === 'ar' ? 'هاكاثون الإطلاق من 1 مايو – 31 يوليو' : 'Launch Hackathon of May 1 – Jul 31'}</h1>
      </div>
      
      {/* Hackathon Header */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">{lang === 'ar' ? 'الهاكاثون' : 'Hackathon'}</h2>
        <p className="mb-2">
          <strong>{lang === 'ar' ? 'الهاكاثون على Devpost:' : 'Hackathon on Devpost:'}</strong>{' '}
          <a 
            href="https://code-for-sudan.devpost.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 hover:underline transition-colors"
          >
            https://code-for-sudan.devpost.com/
          </a>
        </p>
      </section>

      {/* About the Hackathon */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">{lang === 'ar' ? 'عن الهاكاثون' : 'About the Hackathon'}</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">{lang === 'ar' ? 'نبحث عن:' : "We're looking for:"}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'برامج حاسوبية تقدم قيمة ملموسة للمجتمعات السودانية' : 'Computer programs that deliver tangible value to Sudanese communities'}</li>
            <li>{lang === 'ar' ? 'حلول في مجالات متعددة مثل الصحة والتعليم والمالية والاتصال وغيرها' : 'Solutions across various domains including healthcare, education, finance, communication, and more'}</li>
            <li>{lang === 'ar' ? 'يمكن أن تكون المشاريع تطبيقات جوال أو مواقع أو أدوات برمجية أخرى' : 'Projects can be mobile apps, websites, or any software-based tools'}</li>
            <li>{lang === 'ar' ? 'المرحلة التجريبية مقبولة — ليس مطلوبًا إكمال المنتج بالكامل' : 'Proof-of-concept stage projects are welcome – full product completion is not required'}</li>
            <li>{lang === 'ar' ? 'تشجيع دمج الذكاء الاصطناعي لكنه غير إلزامي' : 'AI integration is encouraged but not mandatory'}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">{lang === 'ar' ? 'معايير الأهلية:' : 'Eligibility:'}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'مفتوح للسودانيين فقط' : 'Open to Sudanese nationals only'}</li>
            <li>{lang === 'ar' ? 'يمكن أن تتكون الفرق من 1-5 أعضاء' : 'Teams can consist of 1-5 members'}</li>
          </ul>
        </div>
      </section>

      {/* Winners */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">{lang === 'ar' ? 'الفائزون في هاكاثون 2025 الافتتاحي' : '2025 Inaugural Hackathon Winners'}</h2>
        <div className="space-y-3 text-gray-700">
          <p>{lang === 'ar' ? 'جائزة المركز الأول بقيمة ' : 'The first place prize of '}<strong>$1000</strong>{lang === 'ar' ? ' منحت إلى ' : ' was awarded to '}<strong className="text-red-500">AwkData</strong>.</p>
          <p>{lang === 'ar' ? 'جائزة المركز الثاني بقيمة ' : 'The second place prize of '}<strong>$500</strong>{lang === 'ar' ? ' منحت إلى ' : ' was awarded to '}<strong className="text-red-500">University Platform</strong>.</p>
          <p>{lang === 'ar' ? 'جوائز المركز الثالث بقيمة ' : 'Third place prizes of '}<strong>$100</strong>{lang === 'ar' ? ' لكل فريق منحت إلى ' : ' each were awarded to '}<strong className="text-red-500">Mission 249</strong>, <strong className="text-red-500">Elajy</strong>, <strong className="text-red-500">Monqez</strong> {lang === 'ar' ? 'و' : 'and'} <strong className="text-red-500">Dawak</strong>. {lang === 'ar' ? 'جائزة اختيار الجمهور بقيمة ' : 'The popular choice prize of '}<strong>$100</strong> {lang === 'ar' ? 'منحت إلى ' : 'was awarded to '}<strong className="text-red-500">Shobbak</strong>.</p>
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">{lang === 'ar' ? 'المتطلبات' : 'Requirements'}</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">{lang === 'ar' ? 'ماذا تبني' : 'What to Build'}</h3>
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
          <h3 className="text-xl font-semibold mb-4 text-green-400">{lang === 'ar' ? 'ماذا تُقدم' : 'What to Submit'}</h3>
          <p className="mb-4 leading-relaxed">
            {lang === 'ar' ? 'تُقبل المشاركات بالعربية أو الإنجليزية ويجب أن تتضمن:' : 'Submissions are accepted in Arabic or English and must include:'}
          </p>
          
          <p className="mb-4 text-gray-600 italic">
            {lang === 'ar' ? 'إذا كنت تفضل إبقاء شيفرتك خاصة، أضف "sudanhackathon@gmail.com" كمساهم في مستودعك' : 'If you prefer to keep your code private, add "sudanhackathon@gmail.com" as a collaborator to your repository'}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 text-red-400">{lang === 'ar' ? 'التوثيق' : 'Documentation'}</h4>
              <p className="mb-2">{lang === 'ar' ? 'وثيقة مختصرة من صفحة واحدة (PDF) توضّح:' : 'A concise one-page document (PDF format) explaining:'}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>{lang === 'ar' ? 'المشكلة التي يعالجها الحل' : 'The problem your solution addresses'}</li>
                <li>{lang === 'ar' ? 'كيفية عمل الحل' : 'How your solution works'}</li>
                <li>{lang === 'ar' ? 'الأثر المتوقع على المجتمعات السودانية' : 'Expected impact on Sudanese communities'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-red-400">{lang === 'ar' ? 'فيديو العرض' : 'Demo Video'}</h4>
              <p className="mb-2">{lang === 'ar' ? 'فيديو توضيحي (بحد أقصى 5 دقائق) مرفوع على يوتيوب أو جوجل درايف يوضح بجلاء:' : 'A video demonstration (maximum 5 minutes) uploaded to YouTube or Google Drive that clearly explains:'}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>{lang === 'ar' ? 'ماذا يفعل برنامجك (مع عرض توضيحي)' : "What your program does (with demonstration)"}</li>
                <li>{lang === 'ar' ? 'لماذا هو مفيد للسودان' : "Why it's beneficial to Sudan"}</li>
                <li>{lang === 'ar' ? 'كيف بنيته (التقنيات والمنهجية)' : 'How you built it (technology stack, approach)'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-red-400">{lang === 'ar' ? 'الشيفرة المصدرية' : 'Source Code'}</h4>
              <p>{lang === 'ar' ? 'رابط إلى مستودع الشيفرة المفتوحة (ويفضّل GitHub)' : 'A URL to your open-source code repository (GitHub preferred)'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Collapsible({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mb-6 border border-gray-200 rounded">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-green-500">{title}</span>
        <span className="text-2xl leading-none select-none">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );
}

function IdeaProposalPage({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors mb-6"
        >
          {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-3xl font-bold text-red-500 mb-4">{lang === 'ar' ? 'تقديم الأفكار' : 'Idea Proposal'}</h1>
      </div>
      {lang === 'ar' ? (
        <>
          <Collapsible title="مقدمة" defaultOpen>
            <p className="mb-6 leading-relaxed">هدف أساسي لـ كود من أجل السودان هو إنتاج تقنيات تفيد البلاد. لتحقيق ذلك نحتاج إلى:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>ابتكار أفكار</li>
              <li>تحقق من الأفكار</li>
              <li>تنفيذ الأفكار</li>
            </ul>
            <p className="mb-0 leading-relaxed">بدءًا بالمهمة الأولى، نريدك أن تقترح أفكارك للمشاريع التي يمكن أن تساعد السودان وسنختار الأفكار الواعدة لنمضي بها قدمًا إن شاء الله. ستجد نموذج التقديم في أسفل الصفحة.</p>
          </Collapsible>

          <h2 className="text-2xl font-bold mb-6 text-green-500">نصائح لتقديم أفكار جيدة</h2>
          <Collapsible title="نقاط الألم والاحتكاك">
            <p className="mb-6 leading-relaxed">هذه اقتراحاتنا لكيفية التفكير وتقديم أفكار جيدة لتكون أكثر احتمالًا للاختيار. تحتاج لمعرفة مفهومين:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>نقاط الألم</li>
              <li>الاحتكاك</li>
            </ul>
            <p className="mb-4 leading-relaxed">كل منتج أو خدمة تقدم فائدة ما، مثل توفير الوقت أو المال أو الجهد. إنفاق الوقت أو المال أو الجهد هي نقاط ألم، والمنتج الذي تستخدمه هو حل لتلك النقاط. كلما خففت وقتًا أو مالًا أو جهدًا أكثر، زادت قيمة المنتج.</p>
            <p className="mb-4 leading-relaxed">في الوقت نفسه، أي منتج أو خدمة تحتاج وقتًا أو جهدًا للاستخدام: تنزيل تطبيق، إنشاء حساب، الإعداد، التعلم... هذا هو الاحتكاك. كلما زاد الاحتكاك قلّ احتمال استخدام فكرتك.</p>
            <p className="mb-4 leading-relaxed">معادلة تقريبية لقيمة الفكرة: القيمة = تخفيف الألم ÷ الاحتكاك.</p>
            <h6 className="mb-4 leading-relaxed">دراسة حالة - إيباي مقابل باك ماركت.</h6>
            <p className="mb-0 leading-relaxed">إيباي موقع لبيع وشراء السلع المستعملة. باك ماركت مماثل لكنه يركز على الهواتف والحواسيب. على إيباي يجب البحث بين الخيارات، فحص الجودة، إيجاد السعر الأدنى، وانتظار قبول البائع — احتكاك كبير. في باك ماركت الأسعار ثابتة، والفحص يتم من قبلهم لضمان الجودة، ويمكنك الطلب مباشرة دون انتظار. نفس الخدمة لكن باك ماركت باحتكاك أقل بكثير.</p>
          </Collapsible>

          <Collapsible title="الأسواق (Marketplaces)">
            <p className="mb-6 leading-relaxed">السوق ليس فقط للشراء والبيع، بل أي منتج أو خدمة تحتاج عددًا كبيرًا من المستخدمين لتعمل. مثل فيسبوك، ستاك أوفرفلو، جيت هب، ومنصات مطابقة المتطوعين.</p>
            <p className="mb-6 leading-relaxed">من الصعب بدء الأسواق والحفاظ عليها لأنها تعاني مشكلة الدجاجة والبيضة. بدون مستخدمين لا يستخدمها أحد، وبدون استخدام من الصعب جذب المستخدمين الأُول. حتى بعد الحصول على مستخدمين يجب إبقاؤهم نشطين.</p>
            <p className="mb-0 leading-relaxed">لذا فالسوق صعب الانطلاق ويحتاج جهدًا كبيرًا وإطلاقًا قويًا. قد لا ينجح سوق لهواة خراطيم المياه، لكن طلب سيارة أجرة حاجة شائعة جدًا — لذا نجحت أوبر.</p>
          </Collapsible>

          <Collapsible title="النموذج الأولي الأدنى (MVPs)">
            <p className="mb-6 leading-relaxed">بناء MVP يعني عدم السعي فورًا إلى منتج نهائي مصقول، بل صنع شيء بسيط يعمل بأسرع ما يمكن. شاهد الصورة:</p>
            <div className="flex justify-center mb-6">
              <img src="/mvp.png" alt="مخطط MVP" className="max-w-full rounded shadow-md" loading="lazy" />
            </div>
            <p className="mb-4 leading-relaxed">المنتج هنا مركبة متحركة. المثال الأول غير مجدٍ حتى الوصول للسيارة النهائية، بينما المثال السفلي يقدم لوح تزلج يمكن استخدامه فورًا ثم يتحسن إلى سكوتر... وهكذا. هذا مشابه لما ينبغي فعله مع فكرتك.</p>
            <p className="mb-4 leading-relaxed">قبل بناء تطبيق، فكّر بأبسط طريقة للتنفيذ. مثلًا لمطابقة المدرسين استخدم نموذج جوجل وجدول بيانات بدل التطبيق. لمشروع زواج، ابدأ بمجموعة واتساب لمشاركة الملفات الشخصية.</p>
            <p className="mb-0 leading-relaxed">قد يستغرق بناء تطبيق أشهرًا. ميزة MVPs البسيطة المتسلسلة أنها سريعة الإعداد وتكشف مبكرًا مدى اهتمام الناس واستخدامهم، وبذلك تبني مجتمعًا جاهزًا عند الانتقال للمنتج الحقيقي.</p>
          </Collapsible>

          <Collapsible title="مصادر">
            <p className="mb-4 leading-relaxed">هذه لمحة سريعة عن مفاهيم مهمة. توجد مصادر كثيرة للتعمق في ابتكار الأفكار وبنائها واختبارها:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-0">
              <li><a href="https://www.youtube.com/watch?v=Th8JoIan4dg&list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&index=23" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 hover:underline transition-colors">YC كيفية الحصول على أفكار الشركات الناشئة وتقييمها</a></li>
              <li><a href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&si=k0z_Fk_Y2MmX6zrz" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 hover:underline transition-colors">YC مدرسة الشركات الناشئة</a></li>
              <li>كتاب The Mom Test (متوفر بالعربية والإنجليزية والصوت)</li>
              <li>كتاب The Lean Startup (متوفر بالعربية والإنجليزية والصوت)</li>
            </ul>
          </Collapsible>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-red-500 mb-4">نموذج التقديم</h1>
          </div>
          <p>
            مع مراعاة النصائح أعلاه، يمكنك تعبئة نموذج التقديم من{' '}
            <a href="https://forms.gle/1234567890" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 hover:underline transition-colors">هنا</a>.
          </p>
        </>
      ) : (
        <>
        <p className="mb-6 leading-relaxed">
          A core goal of Code for Sudan is to produce technology that benefits the country. To do this we need to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
          <li>Come up with ideas</li>
          <li>Validate the ideas</li>
          <li>Implement the ideas</li>
        </ul>
          <p className="mb-0 leading-relaxed">
            Starting with task one, we want you to propose your ideas for projects that can help Sudan and we will select promising ideas to take forward in sha' Allah.
            The application form can be found at the bottom of the page.
          </p>
          <br/>
          <br/>
        <h2 className="text-2xl font-bold mb-6 text-green-500">Advice for Proposing Good Ideas</h2>
          <Collapsible title="Pain Points and Friction">
        <p className="mb-6 leading-relaxed">
              Here is our suggestions for how to think of and propose good ideas so that they're more likely to be selected. You need to be aware of 2 concepts:
        </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Pain points</li>
            <li>Friction</li>
        </ul>
            <p className="mb-4 leading-relaxed">
              Any product or service you use provides a certain benefit, such as saving you time, money, or effort. Spending time, money, or effort are all pain points, the product you use is a solution to that pain point. The more time, money or effort you relieve, the more valuable the product is, so think carefully about how much time, money or effort is your idea going to save someone?
            </p>
            <p className="mb-4 leading-relaxed">
              At the same time, any product or service requires a certain amount of time, or effort to use. For example downloading an app, creating an account, account set up, learning how to use the software, etc. This is friction, the more friction your idea has, the less likely it is to be used.
            </p>
            <p className="mb-4 leading-relaxed">
              A rough equation for how valuable your idea is: value = pain relief / friction.
            </p>
            <h6 className="mb-4 leading-relaxed">
              Case study - Ebay vs Back Market.
            </h6>
            <p className="mb-0 leading-relaxed">
              Ebay is a website for buying and selling used items. Backmarket is the same, but focusing on phones and laptops. If someone wants buy from Ebay, they often have search through options, check the quality, find the lowest price, and wait for the seller to accept the bid. This is a lot of friction. Backmarket, has fixed prices, they inspect phones themselves to provide a quality guarantee, and you can ord immediately and not wait for the seller to accept the bid. Same service, but BackMarket has a lot less friction.
            </p>
          </Collapsible>

          <Collapsible title="Marketplaces">
            <p className="mb-6 leading-relaxed">
              In the building world, a marketplace is not just a place for buying and selling. A marketplace is any product or service that requires many users to exist on the platform for it to be functional. For example, Facebook is a marketplace, because it requires many users to exist on the platform for it to be functional. If only one person was on Facebook, it would be useless. Similarly Stack Overflow, GitHub, Volunteer Matching platforms, etc. are marketplaces.
            </p>
            <p className="mb-6 leading-relaxed">
              One thing to be careful of with marketplaces is that they are very difficult to get started and maintain. They suffer from a chicken and egg problem. If you have no users, no one will use the platform. If no one is using the platform, it's very hard to get the first users. Even once you have users, you need to keep them actively using it. If Facebook had thousands of users but no one was posting, no one would join it.
            </p>
            <p className="mb-0 leading-relaxed">
              Therefore marketplaces are very difficult to get started with. They usually require a lot of effort to launch as they need to get many users very suddenly so that they can function. So while it would be nice to have a marketplace where garden hose enthusiasts can meet up with other garden hose enthusiasts, it would likely never work. As for getting a taxi, this is something that a huge number of people need very often, which is why Uber is so successful.
            </p>
          </Collapsible>

          <Collapsible title="MVPs">
            <p className="mb-6 leading-relaxed">
              Building a Minimum Viable Product (MVP) means not to immediately start working towards the final polished product, but rather make something simple that works as quickly as possible. Look at this image for example:
            </p>
            <div className="flex justify-center mb-6">
              <img
                src="/mvp.png"
                alt="MVP diagram"
                className="max-w-full rounded shadow-md"
                loading="lazy"
              />
        </div>
            <p className="mb-4 leading-relaxed">
              Here the product is a moving vehicle. See how the first example is completely useless until you get to the final car, but the bottom example makes something useable immediately with the skateboard, once that is working, they improve it to a scooter, etc. This is a similar process to what you should do with your idea.
            </p>
            <p className="mb-4 leading-relaxed">
              If you are building an app, before building an app, you should try think of the simplest way you could make it work. For example, if you're making a tutor matching platform, don't build an app or website yet, make a Google Form and export the results to a spreadsheet. If you are making a matrimonial app, don't build an app or website yet, make a WhatsApp group and let people share profiles in the group.
            </p>
          <p className="mb-4 leading-relaxed">
              A great example of an MVP is <a href="https://www.mancrates.com/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 hover:underline transition-colors">Man Crates</a>. This company sells gifts for men. Production is a lot of time and money. They started by making a website that sells the product, before they had made the physical product. They allowed users to go to checkout, but when they check out, they get a message saying they don't deliver to that address. But really, they don't have any product at all yet. They just did this to see how many people would want to buy it, and once they realised it was a lot of people, they actually started producing it.
            </p>
            <p className="mb-0 leading-relaxed">
              An app can take months to build. The benefit of building very basic strung together MVPs, is that they take very little time to setup, and you can quickly see if people are interested in it and using it, and if so, you already have a community of people ready to on board once you start on the real product.
          </p>
          </Collapsible>

          <Collapsible title="Resources">
          <p className="mb-4 leading-relaxed">
              I just touched briefly on some important concepts here, but there is a lot more knowledge on how to come up with ideas, build them, and how to test whether people would use them. Here are some great resources that go into more detail:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-0">
              <li><a href="https://www.youtube.com/watch?v=Th8JoIan4dg&list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&index=23" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 hover:underline transition-colors">Y Combinator How to Get and Evaluate Startup Ideas </a></li>
              <li><a href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&si=k0z_Fk_Y2MmX6zrz" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 hover:underline transition-colors">Y Combinator Startup School</a></li>
              <li>The Mom Test (Book widely available in Arabic, English, and Audio)</li>
              <li>The Lean Startup (Book widely available in Arabic, English, and Audio)</li>
            </ul>
          </Collapsible>

        <div className="mb-8">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Application Form</h1>
        </div>

          <p>
            Keeping in mind the advice above, you can procede to fill in the application form <a href="https://forms.gle/1234567890" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 hover:underline transition-colors">here</a>.
          </p>
        </>
      )}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  return (
    <div className={`min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12 ${lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
        <span className="text-sm text-gray-600 hidden sm:inline">{lang === 'ar' ? 'اللغة' : 'Language'}</span>
        <button
          type="button"
          onClick={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
          className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 shadow-sm"
          aria-label={lang === 'ar' ? 'تبديل اللغة إلى الإنجليزية' : 'Toggle language to Arabic'}
        >
          {lang === 'en' ? 'AR' : 'EN'}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/launch-hackathon" element={<LaunchHackathonPage lang={lang} />} />
        <Route path="/idea-proposal" element={<IdeaProposalPage lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;