import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default function Ninjas({data}) {
    return (
        <div>
            <h1>All ninjas</h1>
            
            {data.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a href="" className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}
