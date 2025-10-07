import { useEffect } from "react";

interface GHLCalendarProps {
  /** 
   * GoHighLevel calendar embed URL
   * Get this from your GHL account: Settings > Calendars > Select Calendar > Embed Code
   */
  calendarUrl?: string;
  className?: string;
}

const GHLCalendar = ({ calendarUrl, className = "" }: GHLCalendarProps) => {
  useEffect(() => {
    // Load GHL calendar script if URL is provided
    if (calendarUrl) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [calendarUrl]);

  if (!calendarUrl) {
    return (
      <div className={`bg-secondary border-2 border-dashed border-border rounded-lg p-12 ${className}`}>
        <div className="text-center max-w-xl mx-auto">
          <svg className="h-16 w-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-bold text-primary mb-2">
            GoHighLevel Calendar Integration
          </h3>
          <p className="text-muted-foreground mb-4">
            To activate the calendar widget:
          </p>
          <ol className="text-left text-sm text-muted-foreground space-y-2 mb-4">
            <li>1. Go to your GoHighLevel account</li>
            <li>2. Navigate to Settings → Calendars</li>
            <li>3. Select your calendar and click "Embed Code"</li>
            <li>4. Copy the calendar URL</li>
            <li>5. Update the GHLCalendar component with your URL</li>
          </ol>
          <div className="bg-background rounded p-4 text-xs font-mono text-left overflow-x-auto">
            <code className="text-accent">
              {`<GHLCalendar calendarUrl="your-ghl-calendar-url" />`}
            </code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`ghl-calendar-widget ${className}`}>
      <iframe
        src={calendarUrl}
        style={{ width: '100%', border: 'none', overflow: 'hidden' }}
        scrolling="no"
        id="ghl-calendar-iframe"
        className="rounded-lg shadow-lg min-h-[600px]"
      />
    </div>
  );
};

export default GHLCalendar;
