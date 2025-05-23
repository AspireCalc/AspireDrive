"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { createAccount, signInUser } from "@/lib/actions/user.actions";
import OTPModel from "./OTPModel";

type FormType = 'sigin' | 'signup';

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName: formType === "signup" ? z.string().min(2).max(50) : z.string().optional(),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState(null)

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const user =
          type === "signup" 
          ? await createAccount({
            fullName: values.fullName || '',
            email: values.email
            })
          : await signInUser({ email: values.email});

      setAccountId(user.accountId);
    } catch {
      setErrorMessage("Failed to create an account. Please try again")
    } finally {
      setIsLoading(false);
    }


  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="form-title mt-10">
            {type === "sigin" ? "Sign In" : "Sign Up"}
          </h1>
          {type === "signup" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">Full Name</FormLabel>
                    <FormControl>
                      <Input className="shad-input" placeholder="Enter your full name" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">Email ID</FormLabel>
                  <FormControl>
                    <Input className="shad-input " placeholder="Enter your email id" {...field} />
                  </FormControl>
                </div>
                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />
          <Button type="submit" className="form-submit-button" disabled={isLoading}>
            {type === "sigin" ? "Sign In" : "Sign Up"}
            {isLoading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              />
            )}
          </Button>

          {errorMessage && (
            <p className="error-message">*{errorMessage}</p>
          )}

          <div className="body-2 flex justify-center">
            <p className="text-light-100">
              {type === "sigin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              className="ml-1 font-medium text-blue"
              href={type === "sigin" ? "/signup" : "/signin"}
            >
              {type === "sigin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
        </form>
      </Form>

      {accountId && <OTPModel email={form.getValues('email')} accountId={accountId} />}
    </>
  )
}

export default AuthForm