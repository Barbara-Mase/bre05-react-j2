const User = (props) => {

    return (
        <article>
            <h2>Prénom et Nom de l'utilisateur : {props.user.firstName} {props.user.lastName}</h2>
            <a href="">Email de l'utilisateur : {props.user.email}</a>
        </article>
    )
    
}

export default User;