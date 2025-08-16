import SEO from "@/components/seo/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";

const studies = [
	{
		href: "/case-studies/kikpay",
		title: "AI-Powered Recharge Platform for KIKPAY",
		items: [
			{ label: "Challenge", text: "High fraud & manual reconciliation" },
			{
				label: "Solution",
				text: "Recharge API + anomaly detection + automated settlement",
			},
			{ label: "Outcome", text: "Fraud reduced by 40%, settlement time cut by 70%" },
		],
	},
	{
		href: "/case-studies/paynidi-pro",
		title: "Personalized E-commerce Engine for PAYNIDI PRO",
		items: [
			{ label: "Challenge", text: "Low AOV and poor search conversion" },
			{ label: "Solution", text: "AI-based recommendation + smart search" },
			{ label: "Outcome", text: "18% increase in AOV, 22% lift in conversion" },
		],
	},
];

const CaseStudies = () => {
	return (
		<main>
			<SEO
				title="Case Studies — AI-Powered Results | WaapTech"
				description="Explore AI-enabled case studies across fintech and e-commerce with measurable outcomes."
				path="/case-studies"
			/>

			<section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
				<h1 className="font-heading text-3xl md:text-4xl">Case Studies</h1>

				<div className="mt-8 grid gap-6 md:grid-cols-2">
					{studies.map((s, i) => (
						<Reveal key={i} delayMs={i * 180} durationMs={1600}>
							<a
								href={s.href}
								className="block"
								aria-label={s.title}
								role="link"
							>
								<Card className="group cursor-pointer overflow-hidden rounded-lg transform transition-all duration-500 will-change-transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border border-border/40 bg-gradient-to-br from-white/60 to-white/20 dark:from-white/10 dark:to-white/5">
									<CardContent className="space-y-3 p-6 transform transition-transform duration-500 group-hover:-translate-y-1">
										<h2 className="font-heading text-xl transition-all duration-300 group-hover:scale-102 group-hover:text-primary">
											{s.title}
										</h2>

										{s.items.map((it, idx) => (
											<p
												key={idx}
												className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90"
											>
												<strong>{it.label}:</strong> {it.text}
											</p>
										))}

										<div className="mt-4 flex items-center">
											<span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary transition-all duration-400 group-hover:scale-125" />
											<span className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary/80">
												Read case study
											</span>
										</div>
									</CardContent>
								</Card>
							</a>
						</Reveal>
					))}
				</div>

				<div className="mt-8 flex justify-center">
					<Reveal delayMs={studies.length * 120} durationMs={900}>
						<a href="/contact" aria-label="Start your project">
							<Button className="transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
								Start your project →
							</Button>
						</a>
					</Reveal>
				</div>
			</section>
		</main>
	);
};

export default CaseStudies;
