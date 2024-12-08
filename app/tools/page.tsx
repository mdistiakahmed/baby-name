import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the wheel component with no SSR
const WheelOfNames = dynamic(
  () => import("@/components/wheel-of-names/WheelOfNames"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Name Wheel - Random Name Picker Tool | Baby Names",
  description: "Use our interactive Name Wheel tool to randomly select baby names. Perfect for parents who need help choosing names or want to make the selection process fun and engaging.",
  keywords: ["baby name picker", "random name selector", "name wheel", "baby name tool", "name selection wheel"],
};

export default function NameWheelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Name Wheel - Random Name Picker
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-center mb-8">
          Can't decide on a baby name? Let our interactive Name Wheel help you make the choice! 
          Add your favorite names and spin the wheel to randomly select one.
        </p>

        <h2 className="text-2xl font-semibold mb-4">How to Use the Name Wheel</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li>Enter your favorite baby names in the input field</li>
          <li>Click the plus button or press Enter to add each name</li>
          <li>Click anywhere on the wheel to spin it</li>
          <li>Wait for the wheel to stop to see your randomly selected name</li>
        </ol>

        <WheelOfNames />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">How random is the name selection?</h3>
              <p>
                Our name wheel uses a cryptographically secure random number generator to ensure 
                completely fair and unbiased selections every time you spin.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Can I remove names after they're selected?</h3>
              <p>
                Yes! After a name is selected, you can choose to remove it from the wheel using 
                the "Remove Name and Close" button, or keep it in for another chance using the 
                "Close" button.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Is there a limit to how many names I can add?</h3>
              <p>
                While there's no strict limit, we recommend keeping the list to 20-30 names for 
                the best visual experience and readability on the wheel.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Can I save my list of names?</h3>
              <p>
                Currently, the name list is stored in your browser session. We recommend keeping 
                a separate note of your favorite names if you want to return to them later.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Why Use a Name Wheel?</h2>
          <div className="space-y-4">
            <p>
              Choosing a baby name can be overwhelming with so many options available. A name 
              wheel adds an element of fun and excitement to the process, while helping to:
            </p>
            <ul className="list-disc pl-6">
              <li>Break decision paralysis by introducing an element of chance</li>
              <li>Make the name selection process more engaging and interactive</li>
              <li>Include family members in the name selection process</li>
              <li>Narrow down your options in an entertaining way</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
