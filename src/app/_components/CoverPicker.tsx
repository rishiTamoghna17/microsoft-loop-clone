"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CoverOption from "../_shared/CoverOption";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function CoverPicker({ children,setNewCover }: any) {
  const [selectedCover, SetSelectedCover] = React.useState("");
  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full">{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Cover</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
                {CoverOption.map((cover,index) => (
                  <div key={index} onClick={() => SetSelectedCover(cover?.imageUrl)}className={`${selectedCover === cover?.imageUrl ? "border-2 border-primary" : ""} p-1 rounded-md`}>
                    <Image
                      src={cover?.imageUrl}
                      width={200}
                      height={140}
                      alt={"cover"}
                      className="w-full h-[70px] object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" onClick={() => setNewCover(selectedCover)}>
                update
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CoverPicker;
