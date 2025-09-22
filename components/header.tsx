import Link from "next/link";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Globe, Instagram } from "lucide-react";
import Image from "next/image";

import tiktokLogo from "@/public/tiktok.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/" className="font-sail">
        MemoriClick
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-xl">
            About
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#F6F0F0] md:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              Welcome to MemoriClick! 🎉📸
            </DialogTitle>
            <DialogDescription>What is MemoriClick?</DialogDescription>
          </DialogHeader>
          <div className="space-y-5 text-center text-xl/relaxed sm:text-left">
            <p>
              Step into a world of vintage charm and playful memories! ✨ MemoriClick
               is your go-to photobooth experience, where every snapshot is
              filled with joy, laughter, and a touch of retro magic. Whether
              you&apos;re celebrating a special occasion or just capturing fun
              moments with friends, our customizable and aesthetic filters bring
              your photos to life with a nostalgic yet modern twist.
            </p>
            <p>
              📷 Snap. Smile. Sparkle. Let’s make memories that last forever—one
             click at a time!
            </p>
          </div>
          <DialogFooter className="gap-3">
            <Link href="https://www.instagram.com/tjmdn_/" target="_blank">
              <Instagram className="h-5 w-5" />
       
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};
