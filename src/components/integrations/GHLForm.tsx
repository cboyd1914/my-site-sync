import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  formType: 'hero' | 'problem' | 'results' | 'final-cta';
  
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
const heroFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  businessName: z.string().min(2, "Business name required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number").min(10).max(20),
});

const problemFormSchema = z.object({
  email: z.string().email("Invalid email address").max(255),
  challenge: z.enum(['missed-calls', 'time-management', 'tech-confusion', 'all']),
});

const resultsFormSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number").min(10).max(20),
});

const finalCTAFormSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number").min(10).max(20),
  bestTime: z.enum(['morning', 'afternoon', 'evening']),
});

const GHLForm = ({ webhookUrl, formType, submitText, className = "" }: GHLFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Validate based on form type
      let validatedData;
      switch (formType) {
        case 'hero':
          validatedData = heroFormSchema.parse(data);
          break;
        case 'problem':
          validatedData = problemFormSchema.parse(data);
          break;
        case 'results':
          validatedData = resultsFormSchema.parse(data);
          break;
        case 'final-cta':
          validatedData = finalCTAFormSchema.parse(data);
          break;
      }

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
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {renderFormFields()}
      <Button 
        type="submit" 
        variant="gold" 
        size={formType === 'hero' || formType === 'final-cta' ? "xl" : "lg"}
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
