
const User = (props) => {
    
    return (
        <article>
            <h2>Prénom et Nom de l'utilisateur : {props.userInfos.firstName} {props.userInfos.lastName}</h2>
            <a href="">Email de l'utilisateur : {props.userInfos.email}</a>
        </article>
    )
}

export default User