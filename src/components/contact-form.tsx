"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// ============================================================
// Web3Forms Integration
// To receive form submissions at info@noblelandcompany.com:
// 1. Go to https://web3forms.com
// 2. Enter your email and get a free Access Key
// 3. Replace "YOUR_WEB3FORMS_ACCESS_KEY" below with your key
// ============================================================
const WEB3FORMS_ACCESS_KEY = "d4c73289-ea50-4353-9c86-a61b1f76daea";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add Web3Forms access key
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Land Inquiry - Noble Land Co.");
    formData.append("from_name", "Noble Land Co. Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState("success");
        form.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setFormState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-[#2d5016]/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-[#2d5016]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1a1a15] mb-3">We Got Your Message!</h3>
        <p className="text-[#6b6560] max-w-md mx-auto">
          Thank you for reaching out to Noble Land Co. We&apos;ll review your
          information and get back to you within 1–2 business days.
        </p>
        <Button
          className="mt-6 bg-[#2d5016] hover:bg-[#3d6b1e] text-white"
          onClick={() => setFormState("idle")}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot (spam prevention) */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      {/* Error banner */}
      {formState === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first_name" className="text-[#1a1a15] font-medium">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="first_name"
            name="first_name"
            placeholder="Jane"
            required
            className="border-[#e2ddd4] focus-visible:ring-[#2d5016] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last_name" className="text-[#1a1a15] font-medium">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Smith"
            required
            className="border-[#e2ddd4] focus-visible:ring-[#2d5016] bg-white"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#1a1a15] font-medium">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
          className="border-[#e2ddd4] focus-visible:ring-[#2d5016] bg-white"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[#1a1a15] font-medium">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          className="border-[#e2ddd4] focus-visible:ring-[#2d5016] bg-white"
        />
      </div>

      {/* May we text? */}
      <div className="space-y-2">
        <Label htmlFor="may_text" className="text-[#1a1a15] font-medium">
          May We Text You?
        </Label>
        <Select name="may_text">
          <SelectTrigger
            id="may_text"
            className="border-[#e2ddd4] focus:ring-[#2d5016] bg-white"
          >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes, text is fine</SelectItem>
            <SelectItem value="no">No, please call or email</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Interested in selling */}
      <div className="space-y-2">
        <Label htmlFor="interested_selling" className="text-[#1a1a15] font-medium">
          Are You Interested in Selling Your Land? <span className="text-red-500">*</span>
        </Label>
        <Select name="interested_selling" required>
          <SelectTrigger
            id="interested_selling"
            className="border-[#e2ddd4] focus:ring-[#2d5016] bg-white"
          >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes_ready">Yes, I&apos;m ready to sell</SelectItem>
            <SelectItem value="yes_exploring">Yes, exploring my options</SelectItem>
            <SelectItem value="not_sure">Not sure yet</SelectItem>
            <SelectItem value="no">No, just have questions</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reference number */}
      <div className="space-y-2">
        <Label htmlFor="reference_number" className="text-[#1a1a15] font-medium">
          Reference Number
          <span className="text-[#6b6560] font-normal text-xs ml-2">(from our letter, if applicable)</span>
        </Label>
        <Input
          id="reference_number"
          name="reference_number"
          placeholder="e.g. NLC-2024-001"
          className="border-[#e2ddd4] focus-visible:ring-[#2d5016] bg-white"
        />
      </div>

      {/* Additional info */}
      <div className="space-y-2">
        <Label htmlFor="additional_info" className="text-[#1a1a15] font-medium">
          Additional Information
        </Label>
        <Textarea
          id="additional_info"
          name="additional_info"
          placeholder="Tell us about your property — location, acreage, any details you'd like to share..."
          rows={4}
          className="border-[#e2ddd4] focus-visible:ring-[#2d5016] bg-white resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={formState === "loading"}
        className="w-full bg-[#2d5016] hover:bg-[#3d6b1e] text-white font-semibold py-3 text-base transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit My Information →"
        )}
      </Button>

      <p className="text-center text-xs text-[#6b6560]">
        We respect your privacy. Your information is never sold or shared.
      </p>
    </form>
  );
}
