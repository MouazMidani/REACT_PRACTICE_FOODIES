import { Redirect, Slot } from 'expo-router'

export default function RootLayout() {
  const isAuthenticated = false;

  if(!isAuthenticated) return <Redirect href="/sign-up" />
  return <Slot />
}