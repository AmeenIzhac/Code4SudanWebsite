import { Code } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
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
                  Launch Hackathon of May 1 – Jul 31
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Future Events</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/idea-proposal" 
                  className="text-red-400 hover:text-red-500 hover:underline transition-colors"
                >
                  Idea Proposal
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
  );
}

function LaunchHackathonPage() {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors mb-6"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-red-500 mb-4">Launch Hackathon of May 1 – Jul 31</h1>
      </div>
      
      {/* Hackathon Header */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">Hackathon</h2>
        <p className="mb-2">
          <strong>Hackathon on Devpost:</strong>{' '}
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
        <h2 className="text-2xl font-bold mb-6 text-green-500">About the Hackathon</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">We're looking for:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Computer programs that deliver tangible value to Sudanese communities</li>
            <li>Solutions across various domains including healthcare, education, finance, communication, and more</li>
            <li>Projects can be mobile apps, websites, or any software-based tools</li>
            <li>Proof-of-concept stage projects are welcome – full product completion is not required</li>
            <li>AI integration is encouraged but not mandatory</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Eligibility:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Open to Sudanese nationals only</li>
            <li>Teams can consist of 1-5 members</li>
          </ul>
        </div>
      </section>

      {/* Winners */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">2025 Inaugural Hackathon Winners</h2>
        <div className="space-y-3 text-gray-700">
          <p>The first place prize of <strong>$1000</strong> was awarded to <strong className="text-red-500">AwkData</strong>.</p>
          <p>The second place prize of <strong>$500</strong> was awarded to <strong className="text-red-500">University Platform</strong>.</p>
          <p>Third place prizes of <strong>$100</strong> each were awarded to <strong className="text-red-500">Mission 249</strong>, <strong className="text-red-500">Elajy</strong>, <strong className="text-red-500">Monqez</strong> and <strong className="text-red-500">Dawak</strong>. The popular choice prize of <strong>$100</strong> was awarded to <strong className="text-red-500">Shobbak</strong>.</p>
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">Requirements</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">What to Build</h3>
          <p className="mb-4 leading-relaxed">
            Create a computer program that addresses a specific need within Sudanese society. Your solution can be:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>A mobile application that solves a local challenge</li>
            <li>A web platform that connects communities or provides services</li>
            <li>A data analysis tool that offers insights for decision-making</li>
            <li>Any software-based solution that creates positive impact</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-400">What to Submit</h3>
          <p className="mb-4 leading-relaxed">
            Submissions are accepted in Arabic or English and must include:
          </p>
          
          <p className="mb-4 text-gray-600 italic">
            If you prefer to keep your code private, add "sudanhackathon@gmail.com" as a collaborator to your repository
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 text-red-400">Documentation</h4>
              <p className="mb-2">A concise one-page document (PDF format) explaining:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>The problem your solution addresses</li>
                <li>How your solution works</li>
                <li>Expected impact on Sudanese communities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-red-400">Demo Video</h4>
              <p className="mb-2">A video demonstration (maximum 5 minutes) uploaded to YouTube or Google Drive that clearly explains:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>What your program does (with demonstration)</li>
                <li>Why it's beneficial to Sudan</li>
                <li>How you built it (technology stack, approach)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-red-400">Source Code</h4>
              <p>A URL to your open-source code repository (GitHub preferred)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function IdeaProposalPage() {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors mb-6"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-red-500 mb-4">Idea Proposal</h1>
      </div>
      
      {/* Introduction */}
      <section className="mb-12">
        <p className="mb-6 leading-relaxed">
          A core goal of Code for Sudan is to produce technology that benefits the country. To do this we need to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
          <li>Come up with ideas</li>
          <li>Validate the ideas</li>
          <li>Implement the ideas</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          Starting with task one, we want you to propose your ideas for projects that can help Sudan and we will select promising ideas to take forward inshaAllah.
        </p>
      </section>

      {/* Advice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-500">Advice for Good Ideas</h2>
        <p className="mb-6 leading-relaxed">
          Here is some advice for how to think of and propose good ideas so that it's more likely to be selected:
        </p>
        
        <div className="mb-8">
          <p className="mb-4 leading-relaxed">
            For anyone to use your product, there are 2 components: how strong their need or desire is for it, and how difficult it is to use. For example, (gpt give example)
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 leading-relaxed">
            <strong>Is it a marketplace?</strong> (like to marketplace def) Not a bad thing, but marketplaces require significant pain points or low friction
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 leading-relaxed">
            normal advic
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 leading-relaxed">
            ycomb vid
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-4 leading-relaxed">
            Give examples of bad ideas eg meetup app, explain the idea then let them guess if its good or not then reveal ans
          </p>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launch-hackathon" element={<LaunchHackathonPage />} />
        <Route path="/idea-proposal" element={<IdeaProposalPage />} />
      </Routes>
    </div>
  );
}

export default App;