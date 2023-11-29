import { Inter } from 'next/font/google'
import Providers from './Providers'
import ThemeSitcher from './ThemeSwitcher'
import './globals.css'
import { metadata } from './metadata' // Import the metadata

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:title" content={metadata.twitterTitle} />
        <meta
          name="twitter:description"
          content={metadata.twitterDescription}
        />
        <meta name="twitter:image" content={metadata.twitterImage} />
        {/* Add other SEO-related meta tags as needed */}
        {/* Add other metadata, stylesheets, scripts, etc., as needed */}
      </html>
      <body className={inter.className}>
        {/* Wrap your content with ThemeProvider */}

        <Providers>{children}</Providers>
      </body>
    </>
  )
}

export default Layout
