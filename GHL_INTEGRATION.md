# GHL CALENDAR INTEGRATION - COMPLETE SETUP

## ✅ WHAT'S BEEN INTEGRATED

Your GoHighLevel calendar is now fully integrated into your website!

**Calendar URL:** https://link.aileadbuilder.com/widget/booking/DwPMHjYuQIQ4fCv9XsGw

---

## 🔗 WHERE YOUR GHL CALENDAR APPEARS

Your calendar is integrated in **5 strategic locations**:

### 1. **Hero Section (Top of Page)**
- **Button:** "Book a Call"
- **Action:** Opens your GHL calendar in new tab
- **Why:** First thing visitors see - maximum conversions

### 2. **AI Consulting Service Card**
- **Button:** "Schedule a Consultation"
- **Action:** Opens your GHL calendar in new tab
- **Why:** Direct path for consulting leads

### 3. **Speaking Service Card**
- **Button:** "Book Me for Speaking"
- **Action:** Opens your GHL calendar in new tab
- **Why:** Event organizers can book immediately

### 4. **Speaking Section CTA**
- **Button:** "Schedule a Call"
- **Action:** Opens your GHL calendar in new tab
- **Why:** After reading your topics, they can book

### 5. **Contact Section - EMBEDDED WIDGET** ⭐
- **Display:** Full calendar widget embedded on page
- **Action:** Visitors can book without leaving your site
- **Why:** Reduces friction, increases bookings

---

## 🎯 HOW IT WORKS

### For Visitors:
1. Click any "Book a Call" or "Schedule" button
2. Opens your GHL calendar (new tab or embedded widget)
3. They pick a time
4. They enter their info
5. Booking confirmation sent to both of you

### For You (in GHL):
- All bookings appear in your GHL calendar
- Automated confirmation emails sent
- Reminders sent automatically
- Lead captured in your GHL pipeline
- Can trigger workflows/automations

---

## ✅ WHAT'S INCLUDED IN THIS INTEGRATION

### Embedded Calendar Widget
- Full calendar shows on your contact page
- 800px height (fits most screens)
- Rounded corners (matches site design)
- Shadow effect (professional look)
- Responsive (works on mobile)

### All Buttons Linked
- 4 "Book a Call" / "Schedule" buttons throughout site
- All open in new tab (don't lose your site)
- Professional button styling (your brand colors)

### Backup Contact Form
- Formspree contact form still available
- For people who prefer email
- Located below the calendar widget

---

## 🎨 STYLING & DESIGN

### Calendar Widget Styling:
```css
✓ White background
✓ Navy heading (#1E3A8A)
✓ Rounded corners (12px)
✓ Box shadow (professional depth)
✓ Centered on page (max 900px wide)
✓ Subtitle in gray (helpful context)
```

### Button Styling:
```css
✓ Navy background (#1E3A8A)
✓ White text
✓ Hover effect (lifts up 2px)
✓ Rounded corners (8px)
✓ Opens in new tab (target="_blank")
```

### Mobile Optimization:
```css
✓ Calendar widget scales to fit screen
✓ Height adjusts automatically
✓ Buttons stack vertically on small screens
✓ Text remains readable
```

---

## 🔧 CUSTOMIZATION OPTIONS

### Option 1: Adjust Calendar Height

If 800px is too tall or short:

1. Open `index.html`
2. Find line ~710: `height: 800px;`
3. Change to: `height: 600px;` (shorter) or `height: 1000px;` (taller)
4. Save and re-upload

### Option 2: Remove Embedded Widget (Keep Button Links Only)

If you prefer people click buttons instead of seeing the widget:

1. Open `index.html`
2. Find the `<div class="calendar-embed">` section (around line 700)
3. Delete everything from `<div class="calendar-embed">` to `</div>` (the entire block)
4. Save and re-upload

All buttons will still work—widget just won't show on page.

### Option 3: Change Button Text

If you want different wording:

1. Open `index.html`
2. Find buttons:
   - Hero: "Book a Call" (line ~110)
   - Services: "Schedule a Consultation" (line ~260)
   - Speaking: "Book Me for Speaking" (line ~280)
   - Speaking CTA: "Schedule a Call" (line ~680)
3. Change text to your preference:
   - "Schedule Your Call"
   - "Book a Discovery Call"
   - "Reserve Your Spot"
   - "Get Started"
4. Save and re-upload

### Option 4: Add Calendar to Other Pages

When you create new pages (blog, case studies, etc.):

**Add this code** where you want the calendar button:
```html
<a href="https://link.aileadbuilder.com/widget/booking/DwPMHjYuQIQ4fCv9XsGw" 
   target="_blank" 
   class="btn-primary">
   Book a Call
</a>
```

---

## 📊 TRACKING & ANALYTICS

### What You Can Track in GHL:
- ✓ Number of bookings from website
- ✓ Which time slots are most popular
- ✓ Lead source (website visitors)
- ✓ Conversion rate (visitors → bookings)
- ✓ No-show rate
- ✓ Revenue per booking

### How to Track:
1. **GHL Dashboard:** Calendar → Appointments
2. **Source Tracking:** All bookings show "website" as source
3. **Workflows:** Set up automations for new bookings
4. **Reports:** Run calendar reports monthly

### Optimization Ideas:
- If no bookings in first week → Make buttons more prominent
- If high no-show rate → Add SMS reminders in GHL
- If people bounce at calendar → Simplify time slot options
- If bookings spike certain times → Add more availability then

---

## 🚨 TESTING CHECKLIST

Before going live, test these:

### Desktop Testing:
- [ ] Click "Book a Call" in hero section
- [ ] GHL calendar opens in new tab
- [ ] Can select a time slot
- [ ] Can enter contact info
- [ ] Confirmation page appears
- [ ] Scroll down to contact section
- [ ] Embedded calendar loads
- [ ] Can book directly from embedded widget

### Mobile Testing:
- [ ] All buttons work on phone
- [ ] Calendar opens correctly
- [ ] Can scroll through available times
- [ ] Form fields are tappable
- [ ] Confirmation works
- [ ] Embedded widget displays properly (doesn't overflow screen)

### GHL Side:
- [ ] Test booking appears in your GHL calendar
- [ ] Confirmation email sent to test email
- [ ] Lead created in GHL pipeline
- [ ] Any automations triggered correctly

---

## 🔧 TROUBLESHOOTING

### Issue: Calendar Widget Not Loading

**Possible causes:**
1. Wrong URL (check spelling)
2. GHL calendar not published
3. Browser blocking iframe
4. Slow internet connection

**Fix:**
- Verify URL is exactly: `https://link.aileadbuilder.com/widget/booking/DwPMHjYuQIQ4fCv9XsGw`
- Check GHL: Calendar → Settings → Make sure calendar is "Published"
- Try different browser (Chrome, Safari, Firefox)
- Check browser console for errors (F12 → Console)

### Issue: Buttons Don't Open Calendar

**Possible causes:**
1. Pop-up blocker enabled
2. JavaScript disabled
3. Link broken

**Fix:**
- Disable pop-up blocker for your site
- Enable JavaScript in browser
- Right-click button → "Inspect" → Check `href` attribute

### Issue: Calendar Shows But Can't Select Times

**Possible causes:**
1. No availability set in GHL
2. All slots booked
3. Calendar permissions issue

**Fix:**
- Log into GHL: Calendar → Availability
- Set available hours
- Check if you blocked out all times
- Make sure calendar is set to "Public"

### Issue: Mobile Users Can't Book

**Possible causes:**
1. Calendar too wide for screen
2. Text too small
3. Buttons too small to tap

**Fix:**
- Already fixed with responsive CSS
- If still issues: Reduce iframe height
- GHL calendar is mobile-optimized by default

---

## 📈 CONVERSION OPTIMIZATION TIPS

### Increase Bookings:

**1. Button Placement:**
- ✅ Already at top (hero section)
- Consider adding to end of each service description
- Add to footer as backup CTA

**2. Button Copy:**
- Test variations:
  - "Book Your Free Consultation"
  - "Schedule Your Discovery Call"
  - "Reserve Your 30-Minute Session"
- Add urgency: "Book This Week - Limited Spots"

**3. Calendar Availability:**
- More time slots = more bookings
- Offer early morning and evening slots
- Consider weekends for speaking inquiries

**4. Reduce Friction:**
- ✅ Embedded widget (already done)
- Set minimum booking notice (not too far out)
- Keep form fields to minimum
- Add calendar to confirmation email

**5. Social Proof:**
- Add testimonials near booking buttons
- "Join 50+ business owners who've scheduled calls"
- Show calendar filling up ("3 spots left this week")

---

## 🎯 GHL AUTOMATION IDEAS

Since bookings come through GHL, you can automate:

### Immediate Automations:
1. **Send confirmation email** with:
   - What to expect on the call
   - Questionnaire to fill out before call
   - Links to relevant resources

2. **Create contact in pipeline** with:
   - Source: "Website"
   - Interest: Based on which button they clicked
   - Status: "Booked Call"

3. **Send reminder sequence:**
   - 24 hours before: "Looking forward to our call tomorrow"
   - 1 hour before: "Call starts in 1 hour - here's the number"
   - After call: "Thanks for the call - here's what we discussed"

### Advanced Automations:
4. **Qualify leads automatically:**
   - Send pre-call questionnaire
   - Score based on responses
   - Route high-value leads differently

5. **No-show follow-up:**
   - If they miss call: Auto-send "Let's reschedule"
   - Offer 2 new time options
   - Move to "No Show" pipeline

6. **Post-call workflow:**
   - Send proposal template
   - Schedule follow-up call
   - Move to "Opportunity" stage

---

## 📞 NEXT STEPS

### Immediate (Today):
1. ✅ GHL calendar integrated (done!)
2. Test all buttons on desktop
3. Test embedded widget
4. Test on your phone
5. Do a test booking yourself

### This Week:
6. Set your availability in GHL
7. Customize confirmation emails
8. Set up reminder automations
9. Add calendar to email signature
10. Monitor first bookings

### Ongoing:
11. Track bookings weekly
12. Optimize time slot availability
13. A/B test button copy
14. Review no-show rate
15. Adjust based on data

---

## ✅ INTEGRATION COMPLETE!

Your GHL calendar is now:
- ✅ Linked from 4 strategic buttons
- ✅ Embedded on contact page
- ✅ Styled to match your brand
- ✅ Mobile-optimized
- ✅ Ready for bookings

**Test it now:** https://link.aileadbuilder.com/widget/booking/DwPMHjYuQIQ4fCv9XsGw

When your site goes live, every visitor can book a call with you in 60 seconds.

---

## 🆘 NEED HELP?

**GHL Calendar Issues:**
- GHL Support: support@gohighlevel.com
- GHL Documentation: help.gohighlevel.com

**Website Integration Issues:**
- Check this guide first
- Email: carlosboyd@gmail.com
- Or use Claude Opus 4 Projects (see CLAUDE_OPUS_GUIDE.md)

**Optimization Questions:**
- Read "Conversion Optimization Tips" above
- Monitor analytics for 2 weeks
- Make data-driven changes

---

**Your calendar is integrated and ready to convert visitors into booked calls!**

Test it thoroughly before launch, then watch the bookings roll in.

Good luck! 🚀
