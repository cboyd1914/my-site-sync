// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Brand Check Form Handler
(function() {
    // The published funnel backend URL
    const FUNNEL_API_URL = 'https://funnel.theapexresolution.com/api/trpc/brandAudit.submitRequest';

    const form = document.getElementById('brandCheckForm');
    const submitBtn = document.getElementById('brandCheckSubmit');
    const successDiv = document.getElementById('brandCheckSuccess');

    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Gather form data
        const clientName = document.getElementById('bc-name').value.trim();
        const businessName = document.getElementById('bc-business').value.trim();
        const email = document.getElementById('bc-email').value.trim();
        const phone = document.getElementById('bc-phone').value.trim();
        const websiteUrl = document.getElementById('bc-website').value.trim();

        // Basic validation
        if (!clientName || !businessName || !email || !websiteUrl) {
            alert('Please fill in all required fields.');
            return;
        }

        // Get UTM params from URL
        const urlParams = new URLSearchParams(window.location.search);

        // Disable button and show loading
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            const payload = {
                clientName: clientName,
                businessName: businessName,
                email: email,
                websiteUrl: websiteUrl,
                source: 'website_form',
            };

            // Add optional fields
            if (phone) payload.phone = phone;
            if (urlParams.get('utm_source')) payload.utmSource = urlParams.get('utm_source');
            if (urlParams.get('utm_medium')) payload.utmMedium = urlParams.get('utm_medium');
            if (urlParams.get('utm_campaign')) payload.utmCampaign = urlParams.get('utm_campaign');

            // tRPC mutations expect the input wrapped in { json: ... }
            const response = await fetch(FUNNEL_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ json: payload }),
            });

            if (!response.ok) {
                throw new Error('Server returned ' + response.status);
            }

            // Show success message
            form.style.display = 'none';
            successDiv.style.display = 'block';

        } catch (error) {
            console.error('Brand Check submission error:', error);
            alert('Something went wrong. Please try again or email carlosboyd@gmail.com directly.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
})();
