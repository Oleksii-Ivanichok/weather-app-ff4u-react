'use client'
import styles from './styles.module.scss'
import { useState} from "react";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
    const correctLogin = "1";
    const correctPassword = "1";

    const router = useRouter();
    const [inputLogin, setLogin] = useState('');
    const [inputPassword, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(inputLogin === correctLogin && inputPassword === correctPassword){
            if(rememberMe){
                Cookies.set("userAuthorized", "true",
                    { expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) })
            } else {
                Cookies.set("userAuthorized", "true");
            }
            router.push('/dashboard');
        } else {
            alert('You entered wrong login or password');
        }
    }
    return (
        <div className={styles.login_wrapper}>
            <form className={styles.login__form}>
                <label>Login</label>
                <input
                    onChange={e => setLogin(e.target.value)}
                    value={inputLogin}
                    type="text"
                    placeholder="Login or email"
                />
                <label>Password</label>
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={inputPassword}
                    type="password"
                    placeholder="Password"
                />

                <label htmlFor="rememberCheckbox">
                    <input
                        onChange={e => setRememberMe(e.target.checked)}
                        checked={rememberMe}
                        type="checkbox"
                        id="rememberCheckbox"
                    />
                    Remember me
                </label>

                <button onClick={e => handleLogin(e)}>Login</button>
            </form>
        </div>

    )
}