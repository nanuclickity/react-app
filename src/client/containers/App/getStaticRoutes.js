import NotFoundPage from 'pages/NotFound'
import HomePage from 'pages/HomePage'
import AboutPage from 'pages/AboutPage'
import ContactPage from 'pages/ContactPage'
import FacebookPage from 'pages/FacebookPage'
import MusicPage from 'pages/MusicPage'

// Pass location to switch component, so history updates don't block app from re-rendering
export default function Pages(location, auth) {
  return {
    NotFoundPage,
    HomePage,
    AboutPage,
    ContactPage,
    FacebookPage,
    MusicPage
  }
}
