"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/Button";
import { projectTypes } from "@/lib/contact";
import { cn } from "@/lib/cn";

const fieldClass =
  "w-full rounded-chip border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center rounded-card border border-line bg-white p-card"
      >
        <span aria-hidden="true" className="text-3xl">
          🎉
        </span>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
          Thanks, your message is with us
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          Someone from the team will reply within 24 hours. If it is urgent,
          call the number above and we will pick up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-card border border-line bg-white p-card"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-ink"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`mt-2 ${fieldClass}`}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-ink"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-subject"
          className="block text-sm font-semibold text-ink"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder="What can we help with?"
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-ink">Project Type</legend>

        <div className="mt-3 flex flex-wrap gap-2">
          {projectTypes.map((projectType) => {
            const selected = projectType === selectedType;

            return (
              <label
                key={projectType}
                className={cn(
                  "cursor-pointer rounded-pill border px-4 py-2 text-sm font-semibold transition-colors duration-200",
                  selected
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-white text-muted hover:border-primary hover:text-primary",
                )}
              >
                <input
                  type="radio"
                  name="projectType"
                  value={projectType}
                  checked={selected}
                  onChange={() => setSelectedType(projectType)}
                  className="sr-only"
                />
                {projectType}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-ink"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about the project, the timeline and the budget range."
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <div className="mt-6">
        <Button type="submit">Send Message &rarr;</Button>
      </div>
    </form>
  );
}
