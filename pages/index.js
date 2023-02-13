import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import React from 'react'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mehdi Yanat | Full-Stack Developer</title>
        <meta name="description" content="I’m a Full-Stack web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/logo (1).png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
