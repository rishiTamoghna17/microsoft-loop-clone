"use client";
import CoverPicker from "@/app/_components/CoverPicker";
import Imoji from "@/app/_components/Imoji";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [workspaceName, setWorkspaceName] = useState("");
  const [imoji, setImoji] = useState("");

  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-xl">
        {/* Cover Image */}
        <CoverPicker setNewCover={(cover:string)=>setCoverImage(cover)}>
          <div className="relative group cursor-pointer">
            <h1 className="absolute w-full h-full justify-center items-center hidden group-hover:flex">
              Change Cover
            </h1>
            <div className="group-hover:opacity-40">
              <Image
                src={coverImage}
                width={400}
                height={400}
                alt={"workspace"}
                className="w-full h-[180px] rounded-t-xl object-cover"
              />
            </div>
          </div>
        </CoverPicker>
        {/* Input Section */}
        <div className="p-12">
          <h2 className="text-xl font-medium">Create a new worspace</h2>
          <h2 className="text-sm mt-2">
            This is a shared workspace where you can collaborate with your team.
            You can always rename it later.{" "}
          </h2>
          <div className="mt-8 flex gap-2 items-center justify-center">
            <Imoji setEmijiIcon={(emoji:string) => setImoji(emoji)}>
            <Button variant="outline">
                {imoji? imoji:<SmilePlus />}
              
            </Button>
            </Imoji>
            <Input
              placeholder="Workspace Name"
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
          <div className="mt-7 flex justify-end gap-6">
            <Button disabled={!workspaceName?.length}>Create</Button>{" "}
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
