import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is CloserAI?",
    answer: "An AI-powered sales training platform that simulates real prospect conversations with voice analysis, micro-expression detection, and brutal post-call debriefs. Built exclusively for elite closers who execute at the highest level.",
  },
  {
    question: "Who is this for?",
    answer: "Sales Closrs & Freelancers",
  },
  {
    question: "How does the AI simulate real prospects?",
    answer: "Our Real Emotion Engine analyzes tonality, pacing, objection patterns, and micro-expressions in real-time. Every simulation adapts to your approach, creating unpredictable scenarios that mirror live calls.",
  },
  {
    question: "When do I get access?",
    answer: "We're onboarding in waves during private beta. Submit your email and we'll reach out personally if you're a fit. Invitations go to verified closers first.",
  },
  {
    question: "Is this only for experienced closers?",
    answer: "No. Closer Ai is designed for closers of all levels. This is begginer friendly as well as for professionals",
  },
];

export function FAQAccordion() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
      className="w-full max-w-3xl mx-auto space-y-3"
    >
      {faqs.map((faq, index) => {
        const itemValue = `item-${index}`;
        const isOpen = openItem === itemValue;

        return (
          <Accordion.Item
            key={index}
            value={itemValue}
            className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2A2A2A] transition-colors hover:border-[#3A3A3A]"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between group">
                <span className="text-white text-left pr-4 sm:pr-8 font-light tracking-tight text-sm sm:text-base">
                  {faq.question}
                </span>
                <Plus
                  className={`shrink-0 text-[#C8B89A] transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  size={20}
                  strokeWidth={1.5}
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-[#999999] font-light leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
