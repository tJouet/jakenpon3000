import Link from "next/link";

export default function About() {
    return <h2>
        Hello from about
        <Link href={'/about/coucou'} >GO TO Coucou</Link>
    </h2>
}