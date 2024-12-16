import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src="/src/assets/studio-ghibli-title.jpg" alt="Logo Studio Ghibli" />
            <nav>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#filmes">Filmes</a></li>
                    <li><a href="#personagens">Personagens</a></li>
                    <li><a href="#quiz">Quiz</a></li>
                </ul>
            </nav>
        </header>
    )
}