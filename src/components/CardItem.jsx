function CardItem(hero){
    return (
        <div className="card">
            <h2 className="card__name">{hero.hero.name}</h2>        
            <div className="card__text">
                <p className="card__universe">Вселенная: {hero.hero.universe}</p>
                <p className="card__alterego">Альтер эго: {hero.hero.alterego}</p>
                <p className="card__occupation">Род деятельности: {hero.hero.occupation}</p>
                <p className="card__friends">Друзья: {hero.hero.friends}</p>
                <p className="card__superpowers">Суперсилы: {hero.hero.superpowers}</p>
            </div>
            <img className="card__image" alt="the hero" src ={hero.hero.url}  />
            <p className="card__info">Дополнительная информация: ${hero.hero.info}</p>
            <div className="rating">
                <input type="radio" id={`${hero.hero.name}${5}`} className="star" name={hero.hero.name} value="5"></input>
                <label htmlFor={`${hero.hero.name}${5}`} title="Оценка «5»"></label>
                <input type="radio" id={`${hero.hero.name}${4}`} className="star" name={hero.hero.name} value="4"></input>
                <label htmlFor={`${hero.hero.name}${4}`} title="Оценка «4»"></label>
                <input type="radio" id={`${hero.hero.name}${3}`} className="star" name={hero.hero.name} value="3"></input>
                <label htmlFor={`${hero.hero.name}${3}`} title="Оценка «3»"></label>
                <input type="radio" id={`${hero.hero.name}${2}`} className="star" name={hero.hero.name} value="2"></input>
                <label htmlFor={`${hero.hero.name}${2}`} title="Оценка «2»"></label>
                <input type="radio" id={`${hero.hero.name}${1}`} className="star" name={hero.hero.name} value="1"></input>
                <label htmlFor={`${hero.hero.name}${1}`} title="Оценка «1»"></label>
            </div>
        </div>
    )
}

export { CardItem};