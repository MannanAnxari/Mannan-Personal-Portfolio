// import { NextResponse } from "next/server";
// import User from "../../../../model/user";
// import { mongoDBConnection } from "../../../lib/mongodb";

// export async function POST(request) {
//   const { email, password } = await request.json();
//   console.log("Doneeeee-----------------");
//   await mongoDBConnection();
//   await User.create({ email, password });
//   return NextResponse.json({ message: "User registered!" }, { status: 200 });
// }