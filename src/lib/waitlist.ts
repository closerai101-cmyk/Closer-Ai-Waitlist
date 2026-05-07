import { supabase } from './supabaseClient';

export interface WaitlistEntry {
  fullName: string;
  email: string;
  country?: string;
}

export interface WaitlistResult {
  success: boolean;
  error?: string;
}

export async function submitWaitlist(entry: WaitlistEntry): Promise<WaitlistResult> {
  const { error } = await supabase.from('waitlist_signups').insert({
    full_name: entry.fullName.trim(),
    email: entry.email.trim().toLowerCase(),
    country: entry.country || null,
  });

  if (!error) return { success: true };
  if (error.code === '23505') {
    return { success: false, error: "You're already on the list." };
  }
  return { success: false, error: 'Something went wrong. Please try again.' };
}
