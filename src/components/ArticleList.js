import React from 'react'
import Article from './Article';

function ArticleList({posts}) {
  const  postListing = posts.map((post)=>{
        return <Article
        key={post.id}
        title={post.title}
        date={post.date}
        minutes={post.minutes}
        />
    })
  return (
    <div>
        <main>
            {postListing}
            
        </main>
    </div>
  )
}

export default ArticleList;