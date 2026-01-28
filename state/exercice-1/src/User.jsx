import {useState} from 'react';

    const User = (props) => {
        const [isConnected, setIsCon] = useState(false);
        
        if(isConnected === true) {
            return (
                <article>
                    <h2>Mari Doucet</h2>
                    <p>Statut de l'utilisateur : en ligne</p>
                </article>
            )
            
        } else {
            
            return (
                <article>
                    <h2>Mari Doucet</h2>
                    <p>Statut de l'utilisateur : hors ligne</p>
                </article>
            )
        }
        
    }

export default User;
