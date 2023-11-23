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
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    createProfile(values);
  }

  const { mutate: createProfile, isPending: creatingNew } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      const res = await fetch("/api/addNew", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onError: (err) => {
      console.error(err);
    },
    onSuccess: async (data) => {
      console.log(data);
      setModal(false);
      // await new Promise((res) => setTimeout(() => res, 500));
      queryClient.invalidateQueries({ queryKey: ["person"] });
    },
  });

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
        <Button disabled={creatingNew} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
