import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizard!</CardTitle>
          <CardDescription>
            Quizard is an app that lets you create and share quizzes with your
            friends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign in With Google" />
        </CardContent>
      </Card>
    </div>
  );
}
