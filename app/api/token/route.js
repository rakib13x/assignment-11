import { NextResponse } from "next/server";

export default function POST(req, res) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const newAuthHeader = `Bearer ${token}`;
    const response = NextResponse.next();
    response.setHeader("Authorization", newAuthHeader);
    res.send(response);
  } else {
    res.status(401).send("Missing Authorization Header");
  }
}
