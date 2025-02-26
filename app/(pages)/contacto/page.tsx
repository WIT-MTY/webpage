import React from 'react';
import Section from '@/app/components/general/Section';
import Footer from '@/app/components/general/Footer';
import InfoHeader from '@/app/components/general/InfoHeader';
import ContactInfo from '@/app/components/contactInfo';

const ContactPage = () => {
    return (
        <main className="flex flex-col min-h-screen pt-24">
            {/* Page Content (Grows to push footer down) */}
            <div className="flex-grow">
                <Section>
                    <div className="mt-4 mb-8 pt-8">
                        <InfoHeader title="¡Te escuchamos!" description="Nos encantaría saber de ti. Contáctanos por email o envíanos un DM en Instagram y te responderemos con gusto."/>
                    </div>
                </Section>
                <Section>
                    <ContactInfo />
                </Section>
            </div>

            {/* Footer Stays at the Bottom */}
            <Footer />
        </main>
    );
};

export default ContactPage;
