import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Auth() {
  return (
    <>
      <div>
        <input type="text" placeholder="Email..." />
        <input type="text" placeholder="Password..." />
        <button>Sign In</button>
      </div>
    </>
  );
}

export default Auth;
