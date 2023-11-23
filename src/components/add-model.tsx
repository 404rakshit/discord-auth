"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataForm } from "./model-form";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

export function AddModel() {
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <Dialog open={modalState} onOpenChange={setModalState}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Data</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <ScrollArea className="h-[600px] px-3">
          <DialogHeader>
            <DialogTitle>Data Form</DialogTitle>
            <DialogDescription>
              This form is meant to be filled with new data.
            </DialogDescription>
          </DialogHeader>
          {/* Form */}
          <DataForm setModal={setModalState} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
