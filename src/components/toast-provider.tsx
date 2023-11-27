"use client";
import { ToastProvider } from "@radix-ui/react-toast";
import React from "react";
import { Toaster } from "./ui/toaster";

const ToastProviderComp = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      {children}
      <Toaster />
    </ToastProvider>
  );
};

export default ToastProviderComp;
