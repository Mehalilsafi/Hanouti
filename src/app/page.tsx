import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Heroauth from "./components/Heroauth";
import NavAuth from "./components/NavAuth";
import { createClient } from "utils/supabase/server";
export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  return (
    <div>
      {user ? (
        <div>
        <NavAuth/>
        <Heroauth />
        </div>
      ) : (
        <div>
          <Nav />
          <Hero />
          <Footer />{" "}
        </div>
      )}
    </div>
  );
}
