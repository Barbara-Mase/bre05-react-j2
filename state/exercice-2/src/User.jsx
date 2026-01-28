import {useState} from 'react';

const User = (props) => {
    const [user, setUser] = useState({isOnline: false, role: "Anonyme"})
    
    if (user.isOnline === true) {
        return (
            <article>
                <h2>Mari Doucet</h2>
                <h3>Rôle de l'utilisateur : {user.role}</h3>
                <p>Statut de l'utilisateur : en ligne</p>
            </article>
        )
    } else {
        return (
            <article>
                <h2>Mari Doucet</h2>
                <h3>Rôle de l'utilisateur : {user.role}</h3>
                <p>Statut de l'utilisateur : hors-ligne</p>
            </article>)
    }
}

export default User;