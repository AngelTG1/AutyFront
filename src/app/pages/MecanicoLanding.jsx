import React from 'react'
import ClienteLanding from './ClienteLanding'
import MecanicHero from '../components/menic/MecanicHero'
import MechanicBenefitsSection from '../components/menic/MechanicBenefitsSection'
import MechanicHowItWorksSection from '../components/menic/MechanicHowItWorksSection'
import MechanicEarningsSection from '../components/menic/MechanicEarningsSection'
import { Footer } from '../components/footer'
import MechanicCtaSection from '../components/menic/MechanicCtaSection'


export default function MecanicoLanding() {
    return (
        <>
            <main className='min-h-screen text-gray-900'>
                <div className='p-3 lg:px-18'>
                    <MecanicHero />
                    <MechanicBenefitsSection/>
                    <MechanicHowItWorksSection/>
                    <MechanicEarningsSection />
                    <MechanicCtaSection/>
                </div>
                <Footer />
            </main>
        </>
    )
}
