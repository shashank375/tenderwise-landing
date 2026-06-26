import LegalLayout from "../components/LegalLayout"

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 2026">

      <h2>1. Agreement to these Terms</h2>
      <p>These Terms of Service ("Terms") form a binding agreement between you ("you", "User") and [LEGAL ENTITY NAME] ("TenderWise", "we", "us"), governing your access to and use of the TenderWise website, web application, and services (the "Platform").</p>
      <p>By creating an account, signing in, or using the Platform, you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Platform.</p>

      <h2>2. What TenderWise does</h2>
      <p>TenderWise aggregates and displays publicly available government tender data and provides tools to search, view, download, bookmark, and share tenders, set deadline reminders, and — for Pro users — assess eligibility against tender requirements using a matching engine that processes your stored business data.</p>
      <p>Viewing and downloading government tender data is free. TenderWise charges only for value-added features such as the matching engine and storage and tracking of your business documents.</p>

      <h2>3. Eligibility and accounts</h2>
      <ul>
        <li>You must be at least 18 years old and capable of entering a contract.</li>
        <li>You sign up with a WhatsApp number and provide your name. You are responsible for keeping your account secure and for all activity under it.</li>
        <li>You agree to provide accurate information and to keep it current.</li>
        <li>We may suspend or terminate accounts that violate these Terms.</li>
      </ul>

      <h2>4. Plans, pricing, and payment</h2>

      <h3>4.1 Free plan</h3>
      <p>The Free plan lets you sign up with a WhatsApp number, set basic filters, search tenders, download tender documents, set WhatsApp deadline reminders, and share tenders, at no charge.</p>

      <h3>4.2 Pro plan</h3>
      <ul>
        <li><strong>Price:</strong> ₹999 per month plus applicable GST.</li>
        <li><strong>Eligibility:</strong> available only to genuine contractors or businesses with a valid GST number.</li>
        <li><strong>Features:</strong> storage and tracking of business and statutory documents, the AI/ML matching engine, eligibility assessments, and document-expiry/renewal flags.</li>
        <li><strong>Billing:</strong> charged monthly in advance through Razorpay, with auto-renewal unless cancelled.</li>
      </ul>

      <h3>4.3 Verification</h3>
      <p>We may verify your GST number and business documents before granting or continuing Pro access. We may decline or revoke Pro access if verification fails or information is false.</p>

      <h3>4.4 Refunds and cancellation</h3>
      <p>Refunds and cancellations are governed by our separate Refund & Cancellation Policy.</p>

      <h3>4.5 Referrals</h3>
      <p>If you participate in any referral programme, referral payouts are made through Razorpay to the bank details you provide, subject to the programme's specific terms and our right to withhold payouts for fraud or abuse.</p>

      <h2>5. Your content and documents</h2>
      <ul>
        <li><strong>Ownership:</strong> you retain all rights to the business documents, financial documents, employee documents, and other content you upload ("Your Content").</li>
        <li><strong>Licence to us:</strong> you grant us a limited licence to host, store, process, and display Your Content solely to provide the Platform to you.</li>
        <li><strong>Your responsibility:</strong> you are responsible for Your Content, including its accuracy and your right to upload it.</li>
        <li><strong>Accuracy of assessments:</strong> matching results and gap insights are decision-support only and we do not guarantee tender outcomes.</li>
      </ul>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Platform for any unlawful purpose or in breach of any tender or procurement rules.</li>
        <li>Upload false, misleading, or fraudulent documents or impersonate any person or entity.</li>
        <li>Scrape, crawl, or bulk-extract data from the Platform except as expressly permitted.</li>
        <li>Reverse-engineer, disrupt, or attempt to gain unauthorised access to the Platform or its systems.</li>
        <li>Upload malware or content that infringes others' rights or violates law.</li>
        <li>Resell or commercially exploit the Platform or its paid features without our written consent.</li>
      </ul>

      <h2>7. Intellectual property</h2>
      <p>The Platform, including its software, matching engine, taxonomy, design, text, and branding (excluding Your Content and government tender data), is owned by or licensed to TenderWise and protected by law. We grant you a limited, non-exclusive, non-transferable, revocable licence to use the Platform per these Terms.</p>

      <h2>8. Disclaimers</h2>
      <p>The Platform is provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all warranties, express or implied. TenderWise is not a substitute for professional, legal, or procurement advice. Eligibility assessments and matching results are informational aids; you are solely responsible for your bidding decisions.</p>

      <h2>9. Limitation of liability</h2>
      <p>To the maximum extent permitted by law, TenderWise will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost business, lost opportunities, or lost data. Our total aggregate liability will not exceed the greater of (a) the amount you paid us in the 3 months before the claim, or (b) ₹[AMOUNT].</p>

      <h2>10. Indemnity</h2>
      <p>You agree to indemnify and hold TenderWise harmless from claims, losses, and expenses arising from your breach of these Terms, your misuse of the Platform, Your Content, or your violation of any law or third-party right.</p>

      <h2>11. Third-party services</h2>
      <p>The Platform relies on third-party services including Razorpay for payments and WhatsApp for messaging. Your use of those services may be subject to their own terms. We are not responsible for third-party services beyond our reasonable control.</p>

      <h2>12. Suspension and termination</h2>
      <p>You may stop using the Platform and delete your account at any time. We may suspend or terminate your access if you breach these Terms, fail to pay, provide false information, or use the Platform in a way that risks harm or legal exposure.</p>

      <h2>13. Changes to the Platform and these Terms</h2>
      <p>We may modify or discontinue features and may update these Terms. For material changes we will give notice through the Platform or by WhatsApp. Continued use after changes take effect means you accept the updated Terms.</p>

      <h2>14. Governing law and dispute resolution</h2>
      <p>These Terms are governed by the laws of India. The courts at [CITY, STATE] have exclusive jurisdiction. Disputes may also be resolved by arbitration under the Arbitration and Conciliation Act, 1996, seated at [CITY], before a sole arbitrator.</p>

      <h2>15. Contact</h2>
      <p>Questions about these Terms: legal@tenderwise.in, [LEGAL ENTITY NAME], [ADDRESS].</p>

    </LegalLayout>
  )
}