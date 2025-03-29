"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Shield,
  Wallet,
  BarChart3,
  Lock,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
const heroImage = `<svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#0D0D0D; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#121212; stop-opacity:1" />
        </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGradient)" />
    
    <!-- Blockchain Nodes -->
    <circle cx="150" cy="200" r="8" fill="#00ccff"/>
    <circle cx="300" cy="100" r="8" fill="#00ccff"/>
    <circle cx="450" cy="250" r="8" fill="#00ccff"/>
    <circle cx="600" cy="150" r="8" fill="#00ccff"/>
    <circle cx="700" cy="300" r="8" fill="#00ccff"/>
    
    <!-- Connecting Lines -->
    <line x1="150" y1="200" x2="300" y2="100" stroke="#00ccff" stroke-width="2" opacity="0.6"/>
    <line x1="300" y1="100" x2="450" y2="250" stroke="#00ccff" stroke-width="2" opacity="0.6"/>
    <line x1="450" y1="250" x2="600" y2="150" stroke="#00ccff" stroke-width="2" opacity="0.6"/>
    <line x1="600" y1="150" x2="700" y2="300" stroke="#00ccff" stroke-width="2" opacity="0.6"/>
    
    <!-- Wallet Icons (Placeholder Circles) -->
    <circle cx="200" cy="400" r="12" fill="#ffcc00"/>
    <circle cx="400" cy="450" r="12" fill="#ffcc00"/>
    <circle cx="650" cy="400" r="12" fill="#ffcc00"/>
</svg>`;
export default function Home() {
  const account = useAccount();
  console.log("acc", account);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}

      <main className=" px-12 lg:px-32">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black"></div>
            <div className="absolute  top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-3xl"></div>
          </div>

          <div className="container  relative z-10">
            <div className="grid p-8 gap-8 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold leading-tight ">
                  Unlock Your <br />
                  <AnimatedShinyText>
                    <span className="bg-gradient-to-r  from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      Credit Score
                    </span>{" "}
                  </AnimatedShinyText>
                  <br />
                  with Just Your Wallet
                </h1>
                <p className="text-lg text-zinc-400 max-w-md">
                  Our decentralized platform analyzes your blockchain activity
                  to generate a credit score without traditional credit checks
                  or personal information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-none h-12 px-8 text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all">
                    Check Your Score
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-700 hover:border-zinc-600 h-12 px-8 text-lg"
                  >
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 800 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
                      <stop
                        offset="0%"
                        style={
                          {
                            stopColor: "#0D0D0D",
                            stopOpacity: 1,
                          } as React.CSSProperties
                        }
                      />
                      <stop
                        offset="100%"
                        style={
                          {
                            stopColor: "#121212",
                            stopOpacity: 1,
                          } as React.CSSProperties
                        }
                      />
                    </radialGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bgGradient)" />

                  <circle cx="150" cy="200" r="8" fill="#00ccff" />
                  <circle cx="300" cy="100" r="8" fill="#00ccff" />
                  <circle cx="450" cy="250" r="8" fill="#00ccff" />
                  <circle cx="600" cy="150" r="8" fill="#00ccff" />
                  <circle cx="700" cy="300" r="8" fill="#00ccff" />

                  <line
                    x1="150"
                    y1="200"
                    x2="300"
                    y2="100"
                    stroke="#00ccff"
                    strokeWidth={2}
                    opacity={0.6}
                  />
                  <line
                    x1="300"
                    y1="100"
                    x2="450"
                    y2="250"
                    stroke="#00ccff"
                    strokeWidth={2}
                    opacity={0.6}
                  />
                  <line
                    x1="450"
                    y1="250"
                    x2="600"
                    y2="150"
                    stroke="#00ccff"
                    strokeWidth={2}
                    opacity={0.6}
                  />
                  <line
                    x1="600"
                    y1="150"
                    x2="700"
                    y2="300"
                    stroke="#00ccff"
                    strokeWidth={2}
                    opacity={0.6}
                  />

                  <circle cx="200" cy="400" r="12" fill="#ffcc00" />
                  <circle cx="400" cy="450" r="12" fill="#ffcc00" />
                  <circle cx="650" cy="400" r="12" fill="#ffcc00" />
                </svg>

                {/* <Image
                  src={heroImage}
                  alt="Blockchain Credit Score Visualization"
                  width={500}
                  height={500}
                  className="relative z-10"
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section id="features" className="py-20 bg-zinc-950">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                Revolutionary Features
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our platform leverages blockchain technology to provide a
                secure, anonymous, and accurate credit scoring system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all">
                    <BarChart3 className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Blockchain-powered Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400">
                    Our algorithm analyzes your on-chain transactions, DeFi
                    activity, and wallet history to generate an accurate credit
                    score without traditional credit checks.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all">
                    <Shield className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Secure & Anonymous
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400">
                    Your personal information stays private. We only analyze
                    public blockchain data, ensuring your identity remains
                    protected while providing accurate credit assessments.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all">
                    <Lock className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    No Traditional Checks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400">
                    Say goodbye to paperwork, credit bureaus, and invasive
                    background checks. Your blockchain activity speaks for
                    itself, providing a true picture of your financial behavior.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Use Us & How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Why Use Us */}
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-8">
                  Why Choose CryptoScore
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Decentralized & Trustless
                      </h3>
                      <p className="text-zinc-400">
                        Our platform operates on decentralized principles,
                        removing intermediaries and ensuring transparency in
                        credit scoring.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Global Accessibility
                      </h3>
                      <p className="text-zinc-400">
                        Available to anyone with a blockchain wallet, regardless
                        of location or traditional banking history.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Real-time Updates
                      </h3>
                      <p className="text-zinc-400">
                        Your credit score updates in real-time as your on-chain
                        activity evolves, providing the most current assessment.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* How It Works */}
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-8">
                  How It Works
                </h2>
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500"></div>

                  <div className="space-y-12">
                    <div className="relative pl-14">
                      <div className="absolute left-0 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Connect Your Wallet
                      </h3>
                      <p className="text-zinc-400">
                        Simply connect your blockchain wallet to our platform
                        with a single click. No registration or personal
                        information required.
                      </p>
                    </div>

                    <div className="relative pl-14">
                      <div className="absolute left-0 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Analyze Transactions
                      </h3>
                      <p className="text-zinc-400">
                        Our algorithm securely analyzes your public on-chain
                        transactions, DeFi activity, and wallet history to
                        assess creditworthiness.
                      </p>
                    </div>

                    <div className="relative pl-14">
                      <div className="absolute left-0 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Generate Credit Score
                      </h3>
                      <p className="text-zinc-400">
                        Receive your blockchain-based credit score instantly,
                        along with insights about your financial behavior and
                        recommendations for improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-zinc-950">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Everything you need to know about blockchain-based credit
                scoring
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-zinc-800 px-6">
                  <AccordionTrigger className="text-white hover:text-emerald-400 transition-colors">
                    How is my credit score calculated?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    Your credit score is calculated using a proprietary
                    algorithm that analyzes various factors from your blockchain
                    activity, including transaction history, wallet age, asset
                    holdings, DeFi participation, and on-chain repayment
                    behavior. We do not use traditional credit bureau data.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-zinc-800 px-6">
                  <AccordionTrigger className="text-white hover:text-emerald-400 transition-colors">
                    Is my personal information safe?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    Absolutely. We only analyze public blockchain data
                    associated with your wallet address. We never collect,
                    store, or share your personal information. Your privacy is
                    protected through our decentralized approach to credit
                    scoring.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-zinc-800 px-6">
                  <AccordionTrigger className="text-white hover:text-emerald-400 transition-colors">
                    Which blockchains do you support?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    We currently support Ethereum, Polygon, Binance Smart Chain,
                    Avalanche, and Solana. We're continuously expanding our
                    blockchain coverage to provide the most comprehensive credit
                    assessment possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-zinc-800 px-6">
                  <AccordionTrigger className="text-white hover:text-emerald-400 transition-colors">
                    How can I improve my blockchain credit score?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    You can improve your score by maintaining consistent
                    activity on supported blockchains, repaying DeFi loans on
                    time, holding assets for longer periods, and diversifying
                    your crypto portfolio. Our platform provides personalized
                    recommendations based on your specific activity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-zinc-800 px-6">
                  <AccordionTrigger className="text-white hover:text-emerald-400 transition-colors">
                    Who can access my credit score?
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    Your credit score is private by default. You have complete
                    control over who can access it. You can generate verifiable
                    credentials to share your score with specific DeFi
                    protocols, lenders, or services of your choice.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-8 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                  Ready to discover your blockchain credit score?
                </h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Connect your wallet today and unlock financial opportunities
                  based on your on-chain activity. No personal information
                  required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-none h-12 px-8 text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all">
                    Check Your Score
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-700 hover:border-zinc-600 h-12 px-8 text-lg"
                  >
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t  px-6 lg:px-16 border-zinc-800 py-12 bg-black">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/main-logo.png"
                  height={200}
                  width={200}
                  alt="Logo main"
                />
              </Link>
              <p className="text-zinc-400 text-sm mb-4">
                Revolutionizing credit scoring through blockchain technology.
                Secure, anonymous, and accurate.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Whitepaper <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} CryptoScore. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 mt-4 md:mt-0">
              Built on decentralized principles. Powered by blockchain
              technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
