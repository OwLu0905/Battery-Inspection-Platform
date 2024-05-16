"use client";
import * as z from "zod";

import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/forms";
import { Button, Link, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/login";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit() {}

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Dont have an account?"
      backButtonHref="/"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <TextField.Root
                      {...field}
                      placeholder="example@example.com"
                      type="email"
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <TextField.Root
                      {...field}
                      placeholder="********"
                      type="password"
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                  <Link size="2" href="/" className="font-normal">
                    Forgot password?
                  </Link>
                </FormItem>
              )}
            />
          </div>
          {/** <FormSuccess message={success} />
            <FormError message={error || urlError} /> */}
          <Button type="submit" className="w-full" disabled={false}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
