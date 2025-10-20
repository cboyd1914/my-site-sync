import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <article className="prose prose-lg max-w-none">
          <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 22, 2025</p>
          
          <section className="space-y-8">
            <p className="text-lg">
              Apex Resolution ("we," "our," or "us") respects your privacy. This policy explains 
              how we handle your information when you use our website and SMS messaging program.
            </p>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Information We Collect</h2>
              <p>
                We may collect your name, phone number, email, and appointment details. When you 
                use our SMS program, we also collect your opt-in/opt-out preferences and message responses.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">How We Use It</h2>
              <p className="mb-3">We use your information only to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send appointment reminders and confirmations</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
              </ul>
              <p className="mt-4 font-semibold">
                We do <strong>not</strong> sell your information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">SMS Messaging</h2>
              <p>
                By signing up, you agree to receive appointment-related texts. You can cancel anytime 
                by texting <strong>STOP</strong>. For help, reply <strong>HELP</strong> or contact us at{" "}
                <a href="mailto:info@theapexresolution.com" className="text-gold hover:underline">
                  info@theapexresolution.com
                </a>{" "}
                or{" "}
                <a href="tel:+18166529975" className="text-gold hover:underline">
                  (816) 652-9975
                </a>.
                Message and data rates may apply.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Security</h2>
              <p>
                We take reasonable steps to protect your data, but no system is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Children's Privacy</h2>
              <p>
                Our services are not for anyone under 18, and we do not knowingly collect 
                information from children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Updates</h2>
              <p>
                We may update this policy. Changes will be posted on this page.
              </p>
            </div>

            <div className="border-t pt-6 mt-8">
              <h2 className="font-display text-2xl font-bold mb-4">Contact</h2>
              <div className="space-y-2">
                <p>
                  📧{" "}
                  <a href="mailto:info@theapexresolution.com" className="text-gold hover:underline">
                    info@theapexresolution.com
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a href="tel:+18166529975" className="text-gold hover:underline">
                    (816) 652-9975
                  </a>
                </p>
                <p>
                  🌐{" "}
                  <a href="https://theapexresolution.com" className="text-gold hover:underline">
                    theapexresolution.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
