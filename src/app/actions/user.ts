'use server'
import { profile } from "console";
import { createClient } from "utils/supabase/server";

export async function getUserProfile() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id);
  if (profileError) {
    console.error("profile fetch error :", profileError);
    return { user, profile: null };
  }
  return{user,profile}
}
