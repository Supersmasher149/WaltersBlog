import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About: NextPage = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <div className={"text-center"}>
                <h1 className={"text-4xl"}>About me as a person</h1>
                <p className={"m-10 text-lg"}>I am currently 16 years old and i am in my joiner year of highschool currently
                    attending Apex Friendship highschool. I am a very hardworking person and i
                    Love to learn new things. I am always looking for new challenges and I am very
                    curious about the world. I am a very hardworking person and i Love to learn new
                </p>
            </div>
        </div>
    )
}


export default About