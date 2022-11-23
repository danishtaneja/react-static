import React from 'react'
import { Navbar } from '../components/Navbar';
import Contact from './Contact';
import { Education } from './Education';
import { Projects } from './myProjects';
import { Profile } from './Profile';
import { Skills } from './Skills';

export const Home = () => {
  return (
    <>
    <Navbar />
    <Profile />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}
