import { signIn } from "@/auth"

export function SignIn() {
  return (
    <>
      <form action={async () => {
        "use server"
        await signIn("credentials", { num: 1, str: "1", bool: true });
      }}>
        <button >1</button>
      </form>
    </>
  );
}