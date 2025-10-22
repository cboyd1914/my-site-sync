import { useEffect } from "react";

interface GHLChatWidgetProps {
  /**
   * GoHighLevel Location ID
   * Find this in your GHL account: Settings > Business Profile
   */
  locationId?: 2fYU3YOt8Ifm8e0UpwzP;
  
  /**
   * Chat widget configuration
   */
  config?: {
    position?: 'bottom-right' | 'bottom-left';
    primaryColor?: string;
    iconColor?: string;
  };
}

const GHLChatWidget = ({ locationId, config }: GHLChatWidgetProps) => {
  useEffect(() => {
    if (!locationId) return;

    // Load GoHighLevel chat widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.async = true;
    
    script.onload = () => {
      // Initialize chat widget
      if (window.leadConnector) {
        window.leadConnector.init({
          locationId: locationId,
          ...config,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up chat widget if it exists
      const chatWidget = document.getElementById('chat-widget');
      if (chatWidget) {
        chatWidget.remove();
      }
    };
  }, [locationId, config]);

  // If no location ID is provided, show setup instructions
  if (!locationId) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gold text-gold-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform animate-pulse-slow">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-0 bg-background border-2 border-gold rounded-lg p-4 shadow-xl w-80 hidden group-hover:block">
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Setup GoHighLevel Chat:</strong>
          </p>
          <ol className="text-xs text-muted-foreground space-y-1">
            <li>1. Get your Location ID from GHL</li>
            <li>2. Update GHLChatWidget component</li>
            <li>3. Chat will appear here automatically</li>
          </ol>
        </div>
      </div>
    );
  }

  // Chat widget will be injected by the GHL script
  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    leadConnector?: {
      init: (config: any) => void;
    };
  }
}

export default GHLChatWidget;
