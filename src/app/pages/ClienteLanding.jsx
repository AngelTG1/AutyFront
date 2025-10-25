import React from 'react'
import { HeroSection } from '../components/hero-section'
import { ServicesSection } from '../components/services-section'
import { FeaturesSection } from '../components/features-section'
import { HowItWorksSection } from '../components/how-it-works-section'
import { StatsSection } from '../components/stats-section'
import { CTASection } from '../components/cta-section'
import { Footer } from '../components/footer'
import { LeadFormSection } from '../components/LeadFormSection'

export default function ClienteLanding() {
    return (
        <>
            <main className='min-h-screen text-gray-900'>
                <div className='p-3 lg:px-18'>
                    <HeroSection />
                    <ServicesSection />
                    <FeaturesSection />
                    <HowItWorksSection />
                </div>
                <StatsSection />
                <LeadFormSection />
                <CTASection />
                <Footer />
            </main>
        </>
    )
}
