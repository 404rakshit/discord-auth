"use client";

import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { AtSign } from "lucide-react";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Alert from "@/components/alert";
import { login } from "@/lib/atoms";
import { useAtom } from "jotai";
import { Icons } from "@/components/Icons";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const AccessForm = () => {
  const [deactivate, setDeactivate] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [auth, setAuth] = useAtom(login);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setDeactivate(true);
    setTimeout(() => {
      setOpen(true);
      setDeactivate(false);
      setAuth(true);
    }, 3000);
  }

  return (
    <div>
      <section className="flex justify-between">
        <h1>Access Form</h1>
        <ModeToggle />
      </section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col my-20"
        >
          <FormField
            disabled={deactivate}
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <div className="flex gap-3 max-w-lg mx-auto">
                    <span className="h-10 px-2 py-2 border rounded-lg">
                      {deactivate ? (
                        <Icons.spinner className="animate-spin" />
                      ) : (
                        <AtSign />
                      )}
                    </span>
                    <Input
                      autoComplete="off"
                      type="email"
                      className="font-"
                      placeholder="Enter your email"
                      {...field}
                    />
                    <Button
                      disabled={deactivate}
                      variant={"outline"}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="mx-auto w-fit" />
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              </FormItem>
            )}
          />
        </form>
      </Form>
      {/* @ts-ignore */}
      <Alert open={open} setOpen={setOpen} />
    </div>
  );
};

export default AccessForm;
