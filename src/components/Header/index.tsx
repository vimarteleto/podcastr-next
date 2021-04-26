// date-fns para formatação de datas
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export default function Header() {

    // formatação de data com date-fns
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    return (
        <header className={styles.headerContainer}> 
            <img src="/logo.svg" alt="Podcastr"/>

            <p>O melhor para você ouvir sempre</p>
            <span>{currentDate}</span>

        </header>
    )
}