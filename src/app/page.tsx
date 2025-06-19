import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Heroauth from "./components/Heroauth";
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
        <Heroauth />
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
