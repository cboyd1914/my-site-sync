import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface GHLFormProps {
  /**
   * GoHighLevel webhook URL for form submissions
   * Get this from: GHL → Workflows → Create Webhook Trigger
   */
  webhookUrl?: string;
  
  /**
   * Form type determines fields and validation
   */
  formType: 'hero' | 'problem' | 'results' | 'final-cta' | 'hero-calendar' | 'final-calendar';
  
  /**
   * Custom submit button text
   */
  submitText?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

// Form validation schemas
const complianceFields = {
  privacyPolicy: z.literal("on", { errorMap: () => ({ message: "You must agree to the Privacy Policy." }) }),
  termsOfService: z.literal("on", { errorMap: () => ({ message: "You must agree to the Terms of Service." }) }),
};

const a2pFields = {
  a2pTransactional: z.literal("on", { errorMap: () => ({ message: "You must consent to transactional messages." }) }),
  a2pMarketing: z.literal("on", { errorMap: () => ({ message: "You must consent to marketing messages." }) }),
};

const heroFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  businessName: z.string().min(2, "Business name required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number").min(10).max(20),
  ...a2pFields,
  ...complianceFields,
});

const problemFormSchema = z.object({
  email: z.string().email("Invalid email address").max(255),
  challenge: z.enum(['missed-calls', 'time-management', 'tech-confusion', 'all']),
  ...complianceFields,
});

const resultsFormSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number").min(10).max(20),
  ...a2pFields,
  ...complianceFields,
});

const finalCTAFormSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number").min(10).max(20),
  bestTime: z.enum(['morning', 'afternoon', 'evening']),
  ...a2pFields,
  ...complianceFields,
});

const GHLForm = ({ webhookUrl, formType, submitText, className = "" }: GHLFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getSchema = () => {
    switch (formType) {
      case 'hero':
        return heroFormSchema;
      case 'problem':
        return problemFormSchema;
      case 'results':
        return resultsFormSchema;
      case 'final-cta':
      case 'hero-calendar':
      case 'final-calendar':
        return finalCTAFormSchema;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Validate based on form type
      const schema = getSchema();
      const validatedData = schema.parse(data);

      // If webhook URL is provided, send to GHL
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...validatedData,
            formType,
            timestamp: new Date().toISOString(),
            source: window.location.href,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        toast({
          title: "Success! 🎉",
          description: "Your information has been submitted. We'll be in touch soon!",
        });
      } else {
        // If no webhook, just show success message
        console.log('Form submitted (no GHL webhook configured):', validatedData);
        toast({
          title: "Form Submitted",
          description: "Configure your GHL webhook to capture leads automatically.",
        });
      }

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit form. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Render different forms based on type
  const renderFormFields = () => {
    switch (formType) {
      case 'hero':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                name="name"
                placeholder="Your Name" 
                required
                className="bg-primary-foreground text-foreground h-12"
                maxLength={100}
              />
              <Input 
                name="businessName"
                placeholder="Business Name" 
                required
                className="bg-primary-foreground text-foreground h-12"
                maxLength={100}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                name="email"
                type="email" 
                placeholder="Email Address" 
                required
                className="bg-primary-foreground text-foreground h-12"
                maxLength={255}
              />
              <Input 
                name="phone"
                type="tel" 
                placeholder="Phone Number" 
                required
                className="bg-primary-foreground text-foreground h-12"
                maxLength={20}
              />
            </div>
          </>
        );

      case 'problem':
        return (
          <>
            <Input 
              name="email"
              type="email" 
              placeholder="Enter your email" 
              required
              className="h-12"
              maxLength={255}
            />
            <Select name="challenge" required>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="What's your biggest challenge?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="missed-calls">Missed Calls</SelectItem>
                <SelectItem value="time-management">Time Management</SelectItem>
                <SelectItem value="tech-confusion">Tech Confusion</SelectItem>
                <SelectItem value="all">All of the Above</SelectItem>
              </SelectContent>
            </Select>
          </>
        );

      case 'results':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                name="name"
                placeholder="Your Name" 
                required
                className="h-12"
                maxLength={100}
              />
              <Input 
                name="email"
                type="email" 
                placeholder="Email Address" 
                required
                className="h-12"
                maxLength={255}
              />
            </div>
            <Input 
              name="phone"
              type="tel" 
              placeholder="Phone Number" 
              required
              className="h-12"
              maxLength={20}
            />
          </>
        );

      case 'final-cta':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                name="name"
                placeholder="Your Name" 
                required
                className="bg-primary-foreground text-foreground h-12"
                maxLength={100}
              />
              <Input 
                name="email"
                type="email" 
                placeholder="Email Address" 
                required
                className="bg-primary-foreground text-foreground h-12"
                maxLength={255}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                name="phone"
                type="tel" 
                placeholder="Phone Number" 
                required
                className="bg-primary-foreground text-foreground h-12"
                maxLength={20}
              />
              <Select name="bestTime" required>
                <SelectTrigger className="bg-primary-foreground text-foreground h-12">
                  <SelectValue placeholder="Best time to call" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                  <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );
      
      case 'hero-calendar':
      case 'final-calendar':
        return (
          <>
            <Input 
              name="name"
              placeholder="Your Name" 
              required
              className="bg-primary-foreground text-foreground h-12"
              maxLength={100}
            />
            <Input 
              name="email"
              type="email" 
              placeholder="Email Address" 
              required
              className="bg-primary-foreground text-foreground h-12"
              maxLength={255}
            />
            <Input 
              name="phone"
              type="tel" 
              placeholder="Phone Number" 
              required
              className="bg-primary-foreground text-foreground h-12"
              maxLength={20}
            />
            <Select name="bestTime" required>
              <SelectTrigger className="bg-primary-foreground text-foreground h-12">
                <SelectValue placeholder="Best time to call" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
              </SelectContent>
            </Select>
          </>
        );
    }
  };

  const shouldRenderA2P = formType === 'hero' || formType === 'results' || formType === 'final-cta' || formType === 'hero-calendar' || formType === 'final-calendar';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {renderFormFields()}
      
      {/* Privacy Policy and Terms of Service Checkboxes - Required for all forms */}
      <div className="space-y-3 pt-2">
        <div className="flex items-start space-x-2">
          <Checkbox id="privacyPolicy" name="privacyPolicy" required className="mt-1" />
          <Label htmlFor="privacyPolicy" className="text-xs font-normal text-muted-foreground leading-relaxed">
            I have read and agree to the <a href="/privacy" target="_blank" className="underline font-medium">Privacy Policy</a>.
          </Label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="termsOfService" name="termsOfService" required className="mt-1" />
          <Label htmlFor="termsOfService" className="text-xs font-normal text-muted-foreground leading-relaxed">
            I have read and agree to the <a href="/terms" target="_blank" className="underline font-medium">Terms of Service</a>.
          </Label>
        </div>
      </div>
      
      {/* A2P Checkboxes - Only for forms that collect phone numbers */}
      {shouldRenderA2P && (
        <div className="space-y-3 pt-2">
          <div className="flex items-start space-x-2">
            <Checkbox id="a2pTransactional" name="a2pTransactional" required className="mt-1" />
            <Label htmlFor="a2pTransactional" className="text-xs font-normal text-muted-foreground leading-relaxed">
              By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="a2pMarketing" name="a2pMarketing" required className="mt-1" />
            <Label htmlFor="a2pMarketing" className="text-xs font-normal text-muted-foreground leading-relaxed">
              By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
            </Label>
          </div>
        </div>
      )}

      <Button 
        type="submit" 
        variant="gold" 
        size={formType === 'hero' || formType === 'final-cta' || formType === 'hero-calendar' || formType === 'final-calendar' ? "xl" : "lg"}
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : (submitText || "Submit")}
      </Button>
      {!webhookUrl && (
        <p className="text-xs text-center text-muted-foreground">
          ⚠️ GHL webhook not configured. Forms will validate but not send to CRM.
        </p>
      )}
    </form>
  );
};

export default GHLForm;
