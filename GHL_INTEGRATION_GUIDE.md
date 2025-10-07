# GoHighLevel Integration Guide

## Overview
This website is ready for GoHighLevel (GHL) integration. Follow the steps below to connect your GHL account.

## 🔧 Integration Components

### 1. Calendar Widget (GHLCalendar)
**Purpose:** Allow visitors to book appointments directly on your website

**Setup Steps:**
1. Log into your GoHighLevel account
2. Navigate to **Settings → Calendars**
3. Select your calendar (or create a new one)
4. Click **"Embed Code"** or **"Get Link"**
5. Copy the calendar URL or iframe embed code
6. Update the code in these locations:
   - `src/components/Hero.tsx` (line 65)
   - `src/components/FinalCTA.tsx` (line 47)

**Example:**
```tsx
<GHLCalendar calendarUrl="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID" />
```

---

### 2. Live Chat Widget (GHLChatWidget)
**Purpose:** 24/7 AI-powered chat to engage visitors and capture leads

**Setup Steps:**
1. In GoHighLevel, go to **Settings → Business Profile**
2. Copy your **Location ID**
3. Update `src/pages/Index.tsx` (line 13)

**Example:**
```tsx
<GHLChatWidget 
  locationId="YOUR_LOCATION_ID_HERE"
  config={{
    position: 'bottom-right',
    primaryColor: '#C5A572',
  }}
/>
```

---

### 3. Form Webhooks (GHLForm)
**Purpose:** Capture leads and send them directly to your GHL CRM

**Setup Steps:**
1. In GoHighLevel, go to **Automations → Workflows**
2. Create a new workflow
3. Add a **Webhook trigger**
4. Copy the webhook URL
5. Update the `webhookUrl` prop in these files:
   - `src/components/Hero.tsx` (line 71)
   - `src/components/ProblemSection.tsx` (line 67)
   - `src/components/ResultsSection.tsx` (line 149)
   - `src/components/FinalCTA.tsx` (line 82)

**Example:**
```tsx
<GHLForm 
  formType="hero"
  submitText="Send Me More Information"
  webhookUrl="https://hooks.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID"
/>
```

---

## 📋 Form Types & Data Captured

### Hero Form (`formType="hero"`)
- Name
- Business Name
- Email
- Phone

### Problem Form (`formType="problem"`)
- Email
- Biggest Challenge (dropdown)

### Results Form (`formType="results"`)
- Name
- Email
- Phone

### Final CTA Form (`formType="final-cta"`)
- Name
- Email
- Phone
- Best Time to Call (dropdown)

---

## 🔒 Security Features

All forms include:
- ✅ Client-side validation using Zod schemas
- ✅ Input length limits
- ✅ Email and phone validation
- ✅ XSS protection
- ✅ Proper encoding for webhooks

---

## 🎯 Recommended GHL Workflows

### Workflow 1: New Lead Nurture
**Trigger:** Form submission from website
**Actions:**
1. Send immediate "Thank You" email
2. Wait 1 day → Send "3 Ways AI Can Transform Your Business"
3. Wait 2 days → Send SMS invitation to chat
4. Wait 3 days → Send case study email
5. Wait 5 days → Send booking reminder

### Workflow 2: Consultation Booked
**Trigger:** Calendar appointment booked
**Actions:**
1. Send confirmation email with meeting link
2. 24 hours before → Email reminder
3. 1 hour before → SMS reminder
4. If no-show → Send reschedule email
5. If attended → Send follow-up with proposal

---

## 🚀 Quick Start Checklist

- [ ] Get GHL Location ID for chat widget
- [ ] Get GHL Calendar URL(s) for booking widgets
- [ ] Create webhook in GHL workflow
- [ ] Update all webhook URLs in form components
- [ ] Test each form submission
- [ ] Verify leads appear in GHL CRM
- [ ] Test calendar bookings
- [ ] Configure chat widget responses
- [ ] Set up email/SMS sequences
- [ ] Test complete funnel flow

---

## 📞 Support

For GHL-specific questions, refer to:
- [GoHighLevel Documentation](https://help.gohighlevel.com/)
- [GoHighLevel API Docs](https://highlevel.readme.io/)
- GHL Support: support@gohighlevel.com

---

## 📝 Notes

- All forms work WITHOUT GHL integration (client-side validation only)
- Add webhook URLs to send data to GHL CRM
- Calendar widgets require GHL account with active calendars
- Chat widget requires active GHL subscription
- Test in development before deploying to production
