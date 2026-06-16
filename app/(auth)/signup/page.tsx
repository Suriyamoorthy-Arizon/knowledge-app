"use client"

import Link from "next/link"
import { Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignupPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Free for up to 15 members. No credit card required.
      </p>

      <Tabs defaultValue="company" className="mt-7">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="company" className="gap-1.5">
            <Building2 className="size-4" />
            Company
          </TabsTrigger>
          <TabsTrigger value="employee" className="gap-1.5">
            <User className="size-4" />
            Employee
          </TabsTrigger>
        </TabsList>

        {/* Company signup */}
        <TabsContent value="company" className="mt-6">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="c-company">Company name</Label>
              <Input id="c-company" placeholder="Acme Corp" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="c-name">Your name</Label>
              <Input id="c-name" placeholder="Jordan Rivera" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="c-email">Work email</Label>
              <Input id="c-email" type="email" placeholder="jordan@acme.com" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="c-password">Password</Label>
              <Input id="c-password" type="password" placeholder="At least 8 characters" required />
            </div>
            <Button type="submit" size="lg" className="mt-1 w-full" asChild>
              <Link href="/login">Create workspace</Link>
            </Button>
          </form>
        </TabsContent>

        {/* Employee signup */}
        <TabsContent value="employee" className="mt-6">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="e-code">Invite code or workspace</Label>
              <Input id="e-code" placeholder="acme.knowledgedesk.com" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="e-name">Full name</Label>
              <Input id="e-name" placeholder="Sam Patel" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="e-email">Work email</Label>
              <Input id="e-email" type="email" placeholder="sam@acme.com" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="e-password">Password</Label>
              <Input id="e-password" type="password" placeholder="At least 8 characters" required />
            </div>
            <Button type="submit" size="lg" className="mt-1 w-full" asChild>
              <Link href="/login">Join workspace</Link>
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        By creating an account you agree to our Terms of Service and Privacy Policy.
      </p>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
