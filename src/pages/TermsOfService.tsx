import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
          <h1 className="font-display text-4xl font-bold mb-8">Terms and Conditions - SMS</h1>
          
          <section className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Apex Resolution AI Consulting Service</h2>
              <p>
                This messaging program will provide users with appointment reminder and confirmation texts 
                for our consulting services. Users can expect to receive messages related to upcoming 
                appointments, scheduling, and confirmation of consultations.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-3">How to Cancel</h3>
              <p>
                You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. 
                Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this 
                confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as 
                you did initially, and we will resume sending SMS messages to you.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-3">Need Help?</h3>
              <p>
                If you experience issues with the messaging program, reply with the keyword HELP for 
                more assistance, or reach out directly to{" "}
                <a href="mailto:info@theapexresolution.com" className="text-gold hover:underline">
                  info@theapexresolution.com
                </a>{" "}
                for support.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-3">Important Information</h3>
              <p>
                Carriers are not liable for delayed or undelivered messages. As always, message and 
                data rates may apply for messages sent to you from us and to us from you. You will 
                receive appointment reminder and confirmation texts. For questions about your text plan 
                or data plan, contact your wireless provider.
              </p>
            </div>

            <div className="border-t pt-6 mt-8">
              <h3 className="font-display text-xl font-bold mb-3">Contact Information</h3>
              <p>
                For privacy-related inquiries, please refer to our privacy policy at{" "}
                <a href="https://theapexresolution.com" className="text-gold hover:underline">
                  theapexresolution.com
                </a>
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Support Email:</strong>{" "}
                  <a href="mailto:info@theapexresolution.com" className="text-gold hover:underline">
                    info@theapexresolution.com
                  </a>
                </p>
                <p>
                  <strong>Phone Number:</strong>{" "}
                  <a href="tel:+18166529975" className="text-gold hover:underline">
                    (816) 652-9975
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

export default TermsOfService;
