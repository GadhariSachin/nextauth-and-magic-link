import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginBtn from "./component/LoginBtn";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(JSON.stringify(session));

  /*

  session: {
    session: {
      user: {
        name: "Sachin Gadhari",
        email: "sachin@truesparrow.com",
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocJccK2FsXHt08MhOCCroE_cmBzakEiJBbuS7Dnjlj0S=s96-c",
      },
      expires: "2024-03-16T08:08:59.090Z",
    },
    token: {
      name: "Sachin Gadhari",
      email: "sachin@truesparrow.com",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJccK2FsXHt08MhOCCroE_cmBzakEiJBbuS7Dnjlj0S=s96-c",
      sub: "104272868902052100512",
      iat: 1707984209,
      exp: 1710576209,
      jti: "dbdad358-038f-4042-a7b8-ed3e255eba56",
    },
  },

   */

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <>Logged In</> : <LoginBtn />}
    </main>
  );
}
