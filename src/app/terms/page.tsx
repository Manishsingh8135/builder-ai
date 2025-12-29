import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using our AI automation and software development services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 gradient-bg-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: January 2024
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by {siteConfig.name} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; 
              or &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree 
              to these Terms, please do not use our services.
            </p>

            <h2>2. Services</h2>
            <p>
              We provide AI automation, custom software development, web application development, 
              mobile app development, and related consulting services. The specific scope of services 
              will be outlined in individual project agreements.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information as needed for project execution</li>
              <li>Make timely payments as outlined in project agreements</li>
              <li>Provide necessary access to systems and data as required</li>
              <li>Respond to communications and provide feedback in a timely manner</li>
              <li>Ensure you have the right to share any data or content provided to us</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <h3>Client Ownership</h3>
            <p>
              Upon full payment, you will own all custom code, designs, and deliverables created 
              specifically for your project, except for:
            </p>
            <ul>
              <li>Third-party libraries and frameworks (subject to their own licenses)</li>
              <li>Our pre-existing tools, templates, and methodologies</li>
            </ul>

            <h3>Our Intellectual Property</h3>
            <p>
              We retain ownership of our proprietary tools, processes, and any general-purpose 
              components not specifically created for your project.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or sensitive information 
              shared during the engagement. This obligation survives the termination of our agreement.
            </p>

            <h2>6. Payment Terms</h2>
            <p>
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul>
              <li>Deposits are required before work begins</li>
              <li>Progress payments are due according to agreed milestones</li>
              <li>Final payment is due upon project completion</li>
              <li>Late payments may incur interest charges</li>
            </ul>

            <h2>7. Project Changes</h2>
            <p>
              Changes to project scope after agreement signing will be handled through a change 
              request process, which may affect timeline and cost.
            </p>

            <h2>8. Warranties and Disclaimers</h2>
            <p>
              We warrant that our services will be performed in a professional and workmanlike manner. 
              However, we do not guarantee specific business outcomes or results.
            </p>
            <p>
              OUR SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
              INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY FOR ANY CLAIMS ARISING FROM 
              THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU FOR THE 
              SPECIFIC PROJECT GIVING RISE TO THE CLAIM.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims, damages, or expenses 
              arising from your use of our services or violation of these Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              Either party may terminate a project agreement with written notice as specified in 
              the agreement. Upon termination, you are responsible for payment for work completed.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of California, without regard to its conflict of law provisions.
            </p>

            <h2>13. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or our services shall first be attempted to 
              be resolved through good-faith negotiation. If negotiation fails, disputes shall be 
              resolved through binding arbitration.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify clients of 
              significant changes via email or through our website.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <ul>
              <li>Email: {siteConfig.contact.email}</li>
              <li>Address: {siteConfig.contact.address.city}, {siteConfig.contact.address.country}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
