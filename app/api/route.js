import { NextResponse } from "next/server";
import redirect from "next/navigation";

export async function GET(request) {
  redirect("/");
  return NextResponse.json({ message: "Welcome To our Api", version: "1.0" });
}
