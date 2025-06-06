"use client"

import type React from "react"
import { useState } from "react"
import { Github, Twitter, Linkedin, Mail, Heart, ArrowRight, MapPin, Phone } from "lucide-react"

export interface FooterProps {
  className?: string
}

export function Footer({ className = "" }: FooterProps) {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API", href: "#api" },
    { name: "Security", href: "#security" },
    { name: "Enterprise", href: "#enterprise" },
  ]

  const resourceLinks = [
    { name: "Documentation", href: "#docs" },
    { name: "Guides", href: "#guides" },
    { name: "Blog", href: "#blog" },
    { name: "Changelog", href: "#changelog" },
    { name: "Status", href: "#status" },
    { name: "Community", href: "#community" },
  ]

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Live Chat", href: "#chat" },
    { name: "Report Bug", href: "#bug-report" },
    { name: "Feature Request", href: "#feature-request" },
    { name: "System Status", href: "#system-status" },
  ]

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Partners", href: "#partners" },
    { name: "Investors", href: "#investors" },
    { name: "Events", href: "#events" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
    { name: "Accessibility", href: "#accessibility" },
  ]

  return (
    <footer className={`bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Company info and newsletter */}
            <div className="lg:col-span-4">
              
            </div>

            {/* Links sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Product */}
                {/*  */}

                {/* Resources */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {resourceLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Support</h3>
                  <ul className="space-y-3">
                    {supportLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
              <span>© 2024 MonoRepo. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>by our team.</span>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
