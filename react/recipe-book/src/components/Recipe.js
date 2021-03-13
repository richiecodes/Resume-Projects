import React from 'react';
import style from '../styles/recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol className={style.list}>
                {ingredients.map(ingredient => (
                    <li key={ingredient.text}>{ingredient.text}</li>
                ))}
            </ol>
            <a href={image} target="_blank">
                <img className={style.image} src={image} alt="Image not found" to={image}/>
            </a>
            <p className={calories}>Calories: {calories}</p>
        </div>
    )
}

export default Recipe;