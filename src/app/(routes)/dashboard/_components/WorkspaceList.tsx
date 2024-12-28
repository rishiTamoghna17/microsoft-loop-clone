"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function WorkspaceList() {
  const { user } = useUser();
  const [workspaceList, setWorkspaceList] = useState([]);
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hello , {user?.firstName}</h1>
        <Link href={"/createworkspace"}>
          <Button>+</Button>
        </Link>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div>
          <h2 className="text-primary font-medium">Workspaces</h2>
        </div>
        <div className="flex items-center gap-2">
          <LayoutGrid />
          <AlignLeft />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        {workspaceList?.length === 0 ? (
          <div className="flex flex-col items-center">
            <Image
              src={"/workspace.png"}
              width={200}
              height={200}
              alt={"workspace"}
              className="relative left-1"
            />
            <h2 className="font-bold text-center">
              Create a workspace
            </h2>
            <Link href={"/createworkspace"}>
              <Button >+ New Workspace</Button>
            </Link>
          </div>
        ) : (
          <div>workspace list</div>
        )}
      </div>
    </div>
  );
}

export default WorkspaceList;
