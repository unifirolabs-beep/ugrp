"use client"

import ExecutiveInvitation from "@/components/leadership/ExecutiveInvitation"
import LeadershipSection from "@/components/leadership/Leadership"
import LeadershipPhilosophy from "@/components/leadership/LeadershipPhilosophy"
import ProvenOutcomes from "@/components/leadership/ProvenOutcomes"
import ClientTestimonials from "@/components/leadership/Testimonials"

export default function Leadership() {
    return (
        <>
            <main>
                <LeadershipSection />
                <LeadershipPhilosophy />
                <ProvenOutcomes />
                <ClientTestimonials />
                <ExecutiveInvitation />
            </main>
        </>
    )
}