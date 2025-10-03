import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

// A general event logging function
const logAnalyticsEvent = (eventName: string, params?: { [key: string]: any }) => {
  if (analytics) {
    logEvent(analytics, eventName, params);
  } else {
    // This will log to the console if analytics is not available
    // Useful for debugging and for environments where analytics is not supported
    console.log(`Analytics event: ${eventName}`, params);
  }
};

// Specific event helpers
export const logCtaClick = (button_name: string) => {
  logAnalyticsEvent('cta_click', { button_name });
};

export const logFormSuccess = () => {
  logAnalyticsEvent('form_submission', { form_name: 'mailing_list' });
};

export const logLinkClick = (link_url: string) => {
  logAnalyticsEvent('link_click', { link_url });
};

// You can also log page views if you want to handle it manually,
// though GA4-based analytics often handles this automatically with history changes.
export const logPageView = (path: string) => {
    logAnalyticsEvent('page_view', {
        page_path: path,
        page_location: window.location.href
    });
}