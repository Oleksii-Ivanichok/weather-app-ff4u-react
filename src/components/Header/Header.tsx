import styles from './styles.module.scss'
const Header = (props: any) => {
    return (
        <header>
            <div className="container">
                <div className={styles.header__firstrow}>
                    <p>
                        <span className={styles.city}>{props.location.name},</span>
                        <span className="country"> {props.location.country}</span>
                    </p>
                </div>

            </div>
        </header>
    )
}

export {Header}