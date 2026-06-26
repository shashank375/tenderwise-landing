import LegalLayout from "../components/LegalLayout"

export default function DPDPPolicy() {
  return (
    <LegalLayout title="Data Processing Addendum" lastUpdated="June 2026">

      <h2>1. Relationship of the parties</h2>
      <p>This Data Processing Addendum ("DPA") supplements the Terms of Service between [LEGAL ENTITY NAME] ("TenderWise", "Processor") and the Pro-plan customer ("Customer", "Controller").</p>
      <p>It applies where TenderWise processes personal data on behalf of the Customer — in particular, personal data contained in documents the Customer uploads about its employees and personnel (employee details, resumes, salary slips) and other third parties, to obtain eligibility matching and document storage.</p>
      <p>For such data, the Customer is the Data Fiduciary / Controller and TenderWise is the Data Processor.</p>

      <h2>2. Scope and roles</h2>
      <ul>
        <li><strong>Subject matter:</strong> Storage, tracking, and AI/ML eligibility matching of Customer-uploaded documents.</li>
        <li><strong>Duration:</strong> For the term of the Customer's Pro subscription and the retention period thereafter.</li>
        <li><strong>Nature & purpose:</strong> Hosting, processing, and analysing documents to provide the Platform.</li>
        <li><strong>Types of personal data:</strong> Names, contact details, employment details, salary information, qualifications, and similar data contained in uploaded documents.</li>
        <li><strong>Categories of data subjects:</strong> The Customer's employees, personnel, and other individuals named in uploaded documents.</li>
      </ul>

      <h2>3. TenderWise's obligations as Processor</h2>
      <p>TenderWise will:</p>
      <ul>
        <li>Process only on documented instructions from the Customer, except where law requires otherwise.</li>
        <li>Ensure confidentiality — personnel authorised to process the data are bound by confidentiality obligations.</li>
        <li>Implement appropriate security — apply the technical and organisational measures described in the Privacy Policy.</li>
        <li>Engage sub-processors only as permitted in Section 5.</li>
        <li>Assist the Customer in responding to data-subject requests and meeting its security and breach-notification obligations.</li>
        <li>Notify breaches — inform the Customer without undue delay after becoming aware of a personal data breach affecting the Customer's data.</li>
        <li>Delete or return data at the end of services, except where law requires retention.</li>
        <li>Make available information reasonably necessary to demonstrate compliance with this DPA.</li>
      </ul>

      <h2>4. Customer's obligations as Controller</h2>
      <p>The Customer:</p>
      <ul>
        <li>Has a lawful basis and any necessary consent or notice to upload personal data about its employees and other individuals.</li>
        <li>Will provide instructions that comply with applicable data-protection law.</li>
        <li>Is responsible for the accuracy of the data it uploads and for responding to its own data subjects.</li>
      </ul>

      <h2>5. Sub-processors</h2>
      <p>The Customer authorises TenderWise to use sub-processors to provide the Platform (for example, cloud hosting provider and other providers listed in the Privacy Policy). TenderWise will impose data-protection obligations on sub-processors no less protective than this DPA and remains responsible for their performance. TenderWise will give notice of any intended changes to sub-processors and a reasonable opportunity to object.</p>

      <h2>6. Security measures</h2>
      <p>TenderWise applies reasonable security practices and procedures consistent with the SPDI Rules and good industry practice, including encryption in transit and at rest, access controls and role-based permissions, logging and monitoring, and regular reviews, as further described in the Privacy Policy.</p>

      <h2>7. International transfers</h2>
      <p>Where TenderWise processes the Customer's personal data outside India, it will do so only as permitted under the DPDP Act and applicable rules, and — where the GDPR applies — under an approved transfer mechanism such as Standard Contractual Clauses.</p>

      <h2>8. Liability and precedence</h2>
      <p>Liability under this DPA is subject to the limitations in the Terms of Service. In case of conflict between this DPA and the Terms regarding the processing of Customer personal data, this DPA prevails.</p>

      <h2>9. Contact</h2>
      <p>Data protection / DPA queries: grievance@tenderwise.in — Grievance Officer, [LEGAL ENTITY NAME], [ADDRESS].</p>

    </LegalLayout>
  )
}