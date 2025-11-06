import { ReactNode, useState } from 'react';

interface CollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

function Collapsible({ title, defaultOpen = false, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-50 transition-all"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-xl leading-none select-none text-gray-600">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="px-5 py-4 bg-white">{children}</div>}
    </div>
  );
}

interface AdviceForProposingIdeasSectionProps {
  lang: 'en' | 'ar';
}

export function AdviceForProposingIdeasSection({ lang }: AdviceForProposingIdeasSectionProps) {
  return (
    <section className="mb-16 pb-16 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-green-600">
        {lang === 'ar' ? 'نصائح لتقديم أفكار جيدة' : 'Advice for Proposing Good Ideas'}
      </h2>

      {lang === 'ar' ? (
        <>
          <Collapsible title="نقاط الألم والاحتكاك">
            <p className="mb-6 leading-relaxed">
              هذه اقتراحاتنا لكيفية التفكير وتقديم أفكار جيدة لتكون أكثر احتمالًا للاختيار. تحتاج لمعرفة مفهومين:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>نقاط الألم</li>
              <li>الاحتكاك</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              كل منتج أو خدمة تقدم فائدة ما، مثل توفير الوقت أو المال أو الجهد. إنفاق الوقت أو المال أو الجهد هي نقاط ألم، والمنتج الذي تستخدمه هو حل لتلك النقاط. كلما خففت وقتًا أو مالًا أو جهدًا أكثر، زادت قيمة المنتج.
            </p>
            <p className="mb-4 leading-relaxed">
              في الوقت نفسه، أي منتج أو خدمة تحتاج وقتًا أو جهدًا للاستخدام: تنزيل تطبيق، إنشاء حساب، الإعداد، التعلم... هذا هو الاحتكاك. كلما زاد الاحتكاك قلّ احتمال استخدام فكرتك.
            </p>
            <p className="mb-4 leading-relaxed">معادلة تقريبية لقيمة الفكرة: القيمة = تخفيف الألم ÷ الاحتكاك.</p>
            <h6 className="mb-4 leading-relaxed">دراسة حالة - بلوكباستر مقابل نتفليكس.</h6>
            <p className="mb-0 leading-relaxed">
              كانت بلوكباستر تتطلب من العملاء القيادة إلى متجر فعلي، تصفح مجموعة محدودة، وإرجاع أقراص DVD في الوقت المحدد لتجنب رسوم التأخير. بدأت نتفليكس بإرسال أقراص DVD مباشرة إلى بابك دون رسوم تأخير، ثم انتقلت إلى البث الفوري — مما منح العملاء راحة وتنوعًا وإمكانية وصول أكبر بكثير. لذا قللت نتفليكس الاحتكاك وتفوقت.
            </p>
          </Collapsible>

          <Collapsible title="الأسواق (Marketplaces)">
            <p className="mb-6 leading-relaxed">
              السوق ليس فقط للشراء والبيع، بل أي منتج أو خدمة تحتاج عددًا كبيرًا من المستخدمين لتعمل. مثل فيسبوك، ستاك أوفرفلو، جيت هب، ومنصات مطابقة المتطوعين.
            </p>
            <p className="mb-6 leading-relaxed">
              من الصعب بدء الأسواق والحفاظ عليها لأنها تعاني مشكلة الدجاجة والبيضة. بدون مستخدمين لا يستخدمها أحد، وبدون استخدام من الصعب جذب المستخدمين الأُول. حتى بعد الحصول على مستخدمين يجب إبقاؤهم نشطين.
            </p>
            <p className="mb-0 leading-relaxed">
              لذا فالسوق صعب الانطلاق ويحتاج جهدًا كبيرًا وإطلاقًا قويًا. قد لا ينجح سوق لهواة خراطيم المياه، لكن طلب سيارة أجرة حاجة شائعة جدًا — لذا نجحت أوبر.
            </p>
          </Collapsible>

          <Collapsible title="التطبيقات المستقلة (Stand-Alone Apps)">
            <p className="mb-6 leading-relaxed">
              نهتم كثيرًا بالأفكار التي تقدّم قيمة فورية للمستخدم دون الاعتماد على شبكة أو جهة تعتمدها. تخيّل تطبيقًا يساعد مزارعًا على استخدام الذكاء الاصطناعي لتحليل التربة، أو أداة تمنح السائق مسارات أكثر كفاءة في الوقت الحقيقي، أو أي حل يُستخدم فور تثبيته ويمنح فائدة ملموسة.
            </p>
            <p className="mb-0 leading-relaxed">
              هذه المشاريع يسهل اختبارها وتحسينها بسرعة لأنها لا تحتاج إلى تبنٍ مؤسسي. ومع ذلك، إذا كانت لديك فكرة قوية تعتمد على سوق أو جهة تتبناها، فنرحب بها أيضًا؛ سنقيّمها بعناية أكبر لأن تحويلها إلى واقع يتطلب تنسيقًا أوسع.
            </p>
          </Collapsible>

          <Collapsible title="النموذج الأولي الأدنى (MVPs)">
            <p className="mb-6 leading-relaxed">بناء MVP يعني عدم السعي فورًا إلى منتج نهائي مصقول، بل صنع شيء بسيط يعمل بأسرع ما يمكن. شاهد الصورة:</p>
            <div className="flex justify-center mb-6">
              <img src="/mvp.png" alt="مخطط MVP" className="max-w-full rounded shadow-md" loading="lazy" />
            </div>
            <p className="mb-4 leading-relaxed">
              المنتج هنا مركبة متحركة. المثال الأول غير مجدٍ حتى الوصول للسيارة النهائية، بينما المثال السفلي يقدم لوح تزلج يمكن استخدامه فورًا ثم يتحسن إلى سكوتر... وهكذا. هذا مشابه لما ينبغي فعله مع فكرتك.
            </p>
            <p className="mb-4 leading-relaxed">
              قبل بناء تطبيق، فكّر بأبسط طريقة للتنفيذ. مثلًا لمطابقة المدرسين استخدم نموذج جوجل وجدول بيانات بدل التطبيق. لمشروع زواج، ابدأ بمجموعة واتساب لمشاركة الملفات الشخصية.
            </p>
            <p className="mb-4 leading-relaxed">
              مثال رائع على MVP هو <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">إير بي إن بي</a>. لم يقم المؤسسون ببناء موقع كبير مع خلفية معقدة — قرروا فقط تأجير بعض المراتب في شقتهم خلال مؤتمر في سان فرانسيسco. التقطوا بعض الصور، وضعوها على الإنترنت، وانتظروا. حجز الناس فعلاً. أثبت ذلك أن الفكرة نجحت. من ذلك الاختبار الصغير، بنوا إير بي إن بي التي تساوي الآن أكثر من 70 مليار دولار.
            </p>
            <p className="mb-0 leading-relaxed">
              قد يستغرق بناء تطبيق أشهرًا. ميزة MVPs البسيطة المتسلسلة أنها سريعة الإعداد وتكشف مبكرًا مدى اهتمام الناس واستخدامهم، وبذلك تبني مجتمعًا جاهزًا عند الانتقال للمنتج الحقيقي.
            </p>
          </Collapsible>

          <Collapsible title="مصادر">
            <p className="mb-4 leading-relaxed">
              هذه لمحة سريعة عن مفاهيم مهمة. توجد مصادر كثيرة للتعمق في ابتكار الأفكار وبنائها واختبارها:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-0">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Th8JoIan4dg&list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&index=23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  YC كيفية الحصول على أفكار الشركات الناشئة وتقييمها
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&si=k0z_Fk_Y2MmX6zrz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  YC مدرسة الشركات الناشئة
                </a>
              </li>
              <li>كتاب The Mom Test (متوفر بالعربية والإنجليزية والصوت)</li>
              <li>كتاب The Lean Startup (متوفر بالعربية والإنجليزية والصوت)</li>
            </ul>
          </Collapsible>
        </>
      ) : (
        <>
          <Collapsible title="Pain Points and Friction">
            <p className="mb-6 leading-relaxed">
              Here are our suggestions for how to think of and propose good ideas so that they're more likely to be selected. You need to be aware of 2 concepts:
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
            <p className="mb-4 leading-relaxed">A rough equation for how valuable your idea is: value = pain relief / friction.</p>
            <h6 className="mb-4 leading-relaxed">Case study - Blockbuster vs Netflix.</h6>
            <p className="mb-0 leading-relaxed">
              Blockbuster required customers to drive to a physical store, browse limited selections, and return DVDs on time to avoid late fees. Netflix started by mailing DVDs directly to your door with no late fees, then moved to instant streaming — giving customers vastly more convenience, variety, and accessibility. So Netflix reduced friction and came out on top.
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

          <Collapsible title="Stand-Alone Apps">
            <p className="mb-6 leading-relaxed">
              We are especially excited to see self-contained apps that deliver value the moment someone installs them, without depending on a wider marketplace or an institution to adopt them. Imagine a farmer using on-device AI to understand soil conditions, a driver optimizing routes in real time, or any focused tool that makes a single user's day better right away.
            </p>
            <p className="mb-0 leading-relaxed">
              These ideas shine because they can be built, tested, and refined quickly. Still, if you have a bold marketplace or ecosystem-based concept, please submit it—just know we'll evaluate it more critically since it takes extra coordination to bring to life.
            </p>
          </Collapsible>

          <Collapsible title="MVPs">
            <p className="mb-6 leading-relaxed">
              Building a Minimum Viable Product (MVP) means not to immediately start working towards the final polished product, but rather make something simple that works as quickly as possible. Look at this image for example:
            </p>
            <div className="flex justify-center mb-6">
              <img src="/mvp.png" alt="MVP diagram" className="max-w-full rounded shadow-md" loading="lazy" />
            </div>
            <p className="mb-4 leading-relaxed">
              Here the product is a moving vehicle. See how the first example is completely useless until you get to the final car, but the bottom example makes something useable immediately with the skateboard, once that is working, they improve it to a scooter, etc. This is a similar process to what you should do with your idea.
            </p>
            <p className="mb-4 leading-relaxed">
              If you are building an app, before building an app, you should try think of the simplest way you could make it work. For example, if you're making a tutor matching platform, don't build an app or website yet, make a Google Form and export the results to a spreadsheet. If you are making a matrimonial app, don't build an app or website yet, make a WhatsApp group and let people share profiles in the group.
            </p>
            <p className="mb-4 leading-relaxed">
              A great example of an MVP is <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">Airbnb</a>. The founders didn't build a big website with a complex backend — they just decided to rent some mattresses in their apartment during a conference in San Francisco. They took some photos, put them online, and waited. People actually booked. That proved the idea worked. From that small test, they built Airbnb now worth over $70B.
            </p>
            <p className="mb-0 leading-relaxed">
              An app can take months to build. The benefit of building very basic strung together MVPs is that they take very little time to setup, and you can quickly see if people are interested in it and using it, and if so, you already have a community of people ready to on board once you start on the real product.
            </p>
          </Collapsible>

          <Collapsible title="Resources">
            <p className="mb-4 leading-relaxed">
              I just touched briefly on some important concepts here, but there is a lot more knowledge on how to come up with ideas, build them, and how to test whether people would use them. Here are some great resources that go into more detail:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-0">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=Th8JoIan4dg&list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&index=23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  Y Combinator How to Get and Evaluate Startup Ideas
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&si=k0z_Fk_Y2MmX6zrz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  Y Combinator Startup School
                </a>
              </li>
              <li>The Mom Test (Book widely available in Arabic, English, and Audio)</li>
              <li>The Lean Startup (Book widely available in Arabic, English, and Audio)</li>
            </ul>
          </Collapsible>
        </>
      )}
    </section>
  );
}
