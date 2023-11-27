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
import { AtSign, Hash } from "lucide-react";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Alert from "@/components/alert";
// import { login } from "@/lib/atoms";
// import { useAtom } from "jotai";
import { Icons } from "@/components/Icons";
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "@radix-ui/react-toast";
import { ToastAction } from "@/components/ui/toast";
import { useSignIn } from "@clerk/nextjs";

const formSchema = z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(5).max(50),
});

const AccessForm = () => {
  const [deactivate, setDeactivate] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { isLoaded, setActive, signIn } = useSignIn();
  // const [auth, setAuth] = useAtom(login);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setDeactivate(true);

    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      });

      // console.log(result);

      if (result.status === "complete") {
        setActive({ session: result.createdSessionId });
        setOpen(true);
      }
      // setDeactivate(false);

      // if (result.status !== "complete") {
      //   throw { status: 500, message: "Internal Error" };
      // }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      toast({
        // title: err?.errors[0]?.message,
        description: err?.errors[0]?.longMessage,
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setDeactivate(false);
    }

    // setTimeout(() => {
    //   // setOpen(true);
    //   setDeactivate(false);
    //   toast({
    //     title: "Wrong Credentials!",
    //     description: "Provided Email or Password must be wrong.",
    //     variant: "destructive",
    //     action: <ToastAction altText="Try again">Try again</ToastAction>,
    //   });
    //   // setAuth(true);
    // }, 2000);
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
          className="flex flex-col my-20 gap-3"
        >
          <FormField
            disabled={deactivate}
            control={form.control}
            name="email"
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
                      placeholder="Enter your email"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="mx-auto w-fit" />
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              </FormItem>
            )}
          />

          <FormField
            disabled={deactivate}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <div className="flex gap-3 max-w-lg mx-auto">
                    <span className="h-10 px-2 py-2 border rounded-lg">
                      {deactivate ? (
                        <Icons.spinner className="animate-spin" />
                      ) : (
                        <Hash />
                      )}
                    </span>
                    <Input
                      autoComplete="off"
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="mx-auto w-fit" />
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              </FormItem>
            )}
          />
          <Button
            className="max-w-lg mx-auto"
            disabled={deactivate}
            variant={"outline"}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
      {/* @ts-ignore */}
      {/* <Alert open={open} setOpen={setOpen} /> */}
      {/* <Toast /> */}
    </div>
  );
};

export default AccessForm;
