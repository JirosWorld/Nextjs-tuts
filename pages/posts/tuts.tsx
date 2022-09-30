import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/Layout"

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>
}

export default function TutsPage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>
        <Header title="Develop. Preview. Mock" />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <p>
          <Image
            src="/neutralimg.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </p>

        <button onClick={handleClick}>Like ({likes})</button>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </div>
    </Layout>
  )
}
