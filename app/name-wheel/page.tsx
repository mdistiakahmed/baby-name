import ShareWidget from "@/components/share/ShareWidget";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the wheel component with no SSR
const WheelOfNames = dynamic(
  () => import("@/components/wheel-of-names/WheelOfNames"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Wheel of Names | Free Random Name Picker Tool | BabyNamesNestlings",
  description:
    "Free and easy-to-use name wheel spinner. Perfect for teachers, classrooms, baby name selection, and raffles. Enter names and spin the wheel to pick a random winner. No ads, no registration required!",
  keywords: [
    "wheel of names",
    "random name picker",
    "name spinner",
    "classroom name picker",
    "baby name selector",
    "free name wheel",
    "online name spinner",
    "teacher tool",
    "raffle picker",
    "random name generator",
  ],
  openGraph: {
    title: "Wheel of Names | Free Random Name Picker Tool | BabyNamesNestlings",
    description:
      "Free and easy-to-use name wheel spinner. Perfect for teachers, classrooms, baby name selection, and raffles. Enter names and spin the wheel to pick a random winner. No ads, no registration required!",
    type: "website",
    locale: "en_US",
    url: `http://babynamenestlings.com/name-wheel`,
    siteName: "BabyNameNestlings",
    images: [
      {
        url: "/name-wheel.PNG",
        width: 1200,
        height: 630,
        alt: "wheel of names",
      },
    ],
  },
};

export default function NameWheelPage() {
  return (
    <div className="flex px-2">
      {/* Left margin for ads */}
      <div className="hidden lg:block w-[200px] min-h-screen">
        {/* Ad space */}
      </div>

      {/* Main content */}
      <div className="flex-1 container mx-auto  max-w-4xl">
        <h1 className="text-lg font-bold text-center mb-6">
          Wheel of Names - Free Random Name Picker
        </h1>

        {/* Wheel Component */}
        <WheelOfNames />

        <div className="my-4">
          <ShareWidget />
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a href="#wheel-spinner" className="block hover:text-blue-600">
              1. What is the Wheel Spinner?
            </a>
            <a href="#how-to-use" className="block hover:text-blue-600">
              2. How to Use the Wheel
            </a>
            <a href="#privacy" className="block hover:text-blue-600">
              3. Privacy & Security
            </a>
            <a href="#applications" className="block hover:text-blue-600">
              4. Applications & Use Cases
            </a>
            <a href="#features" className="block hover:text-blue-600">
              5. Features & Customization
            </a>
            <a href="#faq" className="block hover:text-blue-600">
              6. FAQs
            </a>
          </nav>
        </div>

        {/* Main Content Sections */}
        <div className="prose max-w-none mt-12">
          <section id="wheel-spinner" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              What is the Wheel Spinner?
            </h2>
            <p>
              The Wheel of Names is a free, user-friendly random name picker
              tool that adds fun and fairness to selection processes. Whether
              you&apos;re a teacher picking students for classroom activities,
              parents choosing baby names, or organizing team activities, our
              wheel spinner makes random selection engaging and transparent.
            </p>
          </section>

          <section id="how-to-use" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              How to Use the Wheel
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Enter names in the input field</li>
              <li>Click the "+" button or press Enter to add each name</li>
              <li>Use the shuffle button to randomize the order (optional)</li>
              <li>Click the wheel to spin</li>
              <li>Wait for the wheel to stop to see your selected name</li>
            </ol>
          </section>

          <section id="privacy" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
            <div className="space-y-4">
              <p>
                Your privacy and data security are our top priorities. Our name
                wheel random picker provides:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <strong>100% Browser-Based Processing:</strong> All name
                  selections and wheel operations happen directly in your
                  browser - ensuring complete data privacy as no information
                  ever leaves your device
                </li>
                <li>
                  <strong>Zero Data Storage:</strong> Unlike other online name
                  pickers, we don&apos;t store, collect, or track any of your
                  entered names or selection history - making it perfect for
                  sensitive name lists and classroom use
                </li>
                <li>
                  <strong>Secure Random Selection:</strong> Our wheel utilizes
                  the same cryptographically secure random number generation
                  technology used in cybersecurity applications, guaranteeing
                  truly random and unbiased name selection
                </li>
                <li>
                  <strong>No Account Required:</strong> Access all features
                  without registration or login - no email, personal
                  information, or user tracking involved
                </li>
                <li>
                  <strong>GDPR Compliant:</strong> Our privacy-first approach
                  means we&apos;re fully compliant with global privacy
                  standards, making our tool suitable for educational and
                  professional use worldwide
                </li>
              </ul>
            </div>
          </section>

          <section id="applications" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Applications & Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Education & Classroom
                </h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Interactive Student Participation:</strong> Fairly
                    select students for class presentations, answers, or special
                    responsibilities
                  </li>
                  <li>
                    <strong>Group Formation:</strong> Create random project
                    teams or study groups with unbiased selection
                  </li>
                  <li>
                    <strong>Class Games & Activities:</strong> Organize
                    educational games, reading orders, or presentation sequences
                  </li>
                  <li>
                    <strong>Student Recognition:</strong> Select student of the
                    day or weekly award recipients
                  </li>
                  <li>
                    <strong>Virtual Learning:</strong> Maintain student
                    engagement in online classrooms with fair participation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Personal & Professional Use
                </h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Baby Name Selection:</strong> Make the exciting
                    process of choosing your baby&apos;s name fun and fair
                    between family favorites
                  </li>
                  <li>
                    <strong>Team Building:</strong> Randomly assign roles,
                    tasks, or presentation orders in workplace meetings
                  </li>
                  <li>
                    <strong>Event Planning:</strong> Organize raffle drawings,
                    door prize winners, or party game participants
                  </li>
                  <li>
                    <strong>Family Activities:</strong> Decide family game night
                    orders, chore assignments, or movie picks
                  </li>
                  <li>
                    <strong>Social Events:</strong> Manage secret Santa
                    assignments, potluck contributions, or party games
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="features" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Features & Customization
            </h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6">
                <li>Smooth spinning animation with sound effects</li>
                <li>Option to remove selected names</li>
                <li>Name list shuffling</li>
                <li>Celebration effects when winner is selected</li>
                <li>Mobile-friendly design</li>
                <li>No ads interrupting the experience</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions About Our Name Wheel Spinner
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">
                  How random is the name wheel picker?
                </h3>
                <p>
                  Our wheel spinner uses cryptographically secure random number
                  generation (CSRNG) - the same technology used in cybersecurity
                  applications. This ensures completely fair, unbiased, and
                  truly random name selection every time you spin. Unlike simple
                  random number generators, our system provides enterprise-grade
                  randomization that&apos;s impossible to predict or manipulate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  Is the name wheel spinner completely free to use?
                </h3>
                <p>
                  Yes! Our random name picker wheel is 100% free with no hidden
                  costs, premium features, or subscription requirements. All
                  features - including unlimited spins, name list shuffling, and
                  winner animations - are available to everyone. We&apos;re
                  committed to providing a free, ad-light tool for teachers,
                  parents, and professionals worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  How many names can I add to the wheel?
                </h3>
                <p>
                  The name wheel supports up to 500 names per spin, making it
                  perfect for large classrooms, extensive baby name lists, or
                  big event raffles. The wheel automatically adjusts its size
                  and segment distribution to ensure clear visibility and fair
                  probability regardless of your list size.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  Can I save or export my name lists?
                </h3>
                <p>
                  Currently, names are stored in your browser session for
                  privacy reasons. We recommend keeping a backup of your
                  frequently used lists in a separate document. For teachers and
                  regular users, you can quickly copy-paste your name lists from
                  a spreadsheet or text file. We&apos;re exploring secure ways
                  to add list saving features while maintaining our strict
                  privacy standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  Does the wheel work on mobile devices and tablets?
                </h3>
                <p>
                  Yes! Our name wheel spinner is fully responsive and works
                  perfectly on smartphones, tablets, and desktop computers. The
                  touch-friendly interface makes it easy to add names, spin the
                  wheel, and view results on any device. The wheel&apos;s
                  animations and celebrations are optimized for both touch
                  screens and mouse interactions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  Can I use the wheel for classroom activities and teaching?
                </h3>
                <p>
                  Absolutely! The name wheel is especially popular among
                  educators for its fairness and engagement features. Teachers
                  can use it for selecting students for activities, creating
                  random groups, choosing presenters, or making classroom games
                  more exciting. The tool&apos;s visual spinning animation and
                  sound effects help maintain student interest while ensuring
                  fair participation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">
                  What makes this name wheel different from other random
                  pickers?
                </h3>
                <p>
                  Our name wheel stands out with its combination of features:
                  cryptographically secure randomization, complete privacy
                  protection, smooth animations, celebration effects, and a
                  clean, ad-light interface. Unlike other tools, we don&apos;t
                  require registration, never store your data, and provide a
                  fully responsive experience across all devices. Plus, our
                  wheel is optimized for both quick selections and engaging
                  classroom or event experiences.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right margin for ads */}
      <div className="hidden lg:block w-[200px] min-h-screen">
        {/* Ad space */}
      </div>
    </div>
  );
}
