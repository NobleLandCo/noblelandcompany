"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion className="w-full space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={index}
          className="border border-[#e2ddd4] rounded-xl px-6 bg-white shadow-sm data-[open]:border-[#2d5016]/30 data-[open]:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-left text-[#1a1a15] font-semibold text-base hover:no-underline hover:text-[#2d5016] py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#6b6560] leading-relaxed pb-5 text-sm">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
