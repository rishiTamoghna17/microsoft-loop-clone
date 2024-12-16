"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

function WorkspaceList() {
  const { user } = useUser();
  const [workspaceList,setWorkspaceList] = useState([])
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hello , {user?.firstName}</h1>
        <Button>+</Button>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div>
            <h2 className="text-primary font-medium">Workspaces</h2>
        </div>
        <div className="flex items-center gap-2">
            <LayoutGrid/>
            <AlignLeft/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10 bg-slate-600">
        {workspaceList?.length === 0 ? <div>
          <Image src={'/workspace.png' } width={200} height={200} alt={'workspace'} />
          <h2 className="text-primary font-medium">Create a workspace</h2>
          <Button variant={"outline"} className="mt-2">+ New Workspace</Button>
        </div> : <div>workspae list</div> }
      </div>
    </div>
  );
}

export default WorkspaceList;
