 // hooks/useUserProfile.ts
'use client'

import { useEffect, useState } from 'react'
import { supabase } from 'utils/supabase/client'

export function useUserProfile() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUserAndProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        setProfile(profile)
      }

      setLoading(false)
    }

    getUserAndProfile()
  }, [])

  return { user, profile, loading }
}
