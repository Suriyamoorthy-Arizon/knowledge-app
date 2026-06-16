"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import TiptapEditor from "@/components/TiptapEditor";

const categories = [
  "BigCommerce",
  "React",
  "Next.js",
  "Java",
  "Backend",
  "DevOps",
  "Integrations",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </span>

        <h2 className="mt-5 text-xl font-semibold">
          Issue Submitted Successfully
        </h2>

        <p className="mt-2 text-muted-foreground">
          Your issue has been submitted to the Knowledge Desk.
        </p>

        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setContent("");
            setCategory("");
          }}
        >
          Create Another Issue
        </Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        console.log({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          title: formData.get("title"),
          category,
          authorEmail: formData.get("email"),
          content,
        });

        setSubmitted(true);
      }}
    >
      <div>
        <h1 className="text-2xl font-bold">Submit Issue</h1>
        <p className="text-sm text-muted-foreground">
          Add a new issue to the Knowledge Desk.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Article Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter article title"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="category">Category</Label>

        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          required
        >
          <option value="">Select Category</option>

          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Author Email</Label>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="author@company.com"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Article Content</Label>

        <TiptapEditor
          content={content}
          onChange={setContent}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
      >
        Publish Issue
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Articles will be available in the Knowledge Desk after submission.
      </p>
    </form>
  );
}