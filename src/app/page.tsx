import {Button} from "@nextui-org/react";
import * as actions from "../action";
import {auth} from "@/auth"


export default async function Home() {
  const session = await auth();
  console.log(await auth())
  return (
    <>
    <form action={actions.signIn}>
    <Button color="primary">
      sign in
    </Button>
    </form>
    <form action={actions.signOut}>
    <Button color="primary">
      signout
    </Button>
    </form>
    {session?.user?<div>sign in{JSON.stringify(session.user)}</div>:<div>signout</div>}
    </>
  );
}


