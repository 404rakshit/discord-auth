"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import addNewData from "@/action/addNewData";
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  lastname: z.string().min(2, {
    message: "Last Name must be at least 2 characters",
  }),
  firstname: z.string().min(2, {
    message: "Last Name must be at least 2 characters",
  }),
  address: z.string().min(2, {
    message: "Last Name must be at least 2 characters",
  }),
  city: z.string().min(2, {
    message: "Last Name must be at least 2 characters",
  }),
});

export function DataForm({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setModal(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Enter your Lastname"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display last name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Enter your FirstName"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display first name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Enter your Address"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your current address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Enter your City"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your current city where you live in.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
