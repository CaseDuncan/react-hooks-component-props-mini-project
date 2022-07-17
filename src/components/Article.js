import React from 'react'

function Article({title, date= "January 1, 1970", preview, minutes }) {
   
  return (
    <div>
        <article>
        <h3>{title}</h3>
        </article>
        <small>{date} {minutes} min read</small>
        <p>{preview}</p>
    </div>
  )
}

export default Article;