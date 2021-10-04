(async() => {
    const res = await fetch('http://localhost:5000/v1/post')
    let posts = await res.json()
    
    if(res.status >= 200 && res.status <= 299){
        for(let post of posts){
            let li = document.createElement('li')
            let h1 = document.createElement('h1')
            let article = document.createElement('article')
            let p = document.createElement('p')

            li.append(h1, article, p)

            h1.textContent = post.title
            article.innerHTML = post.content
            p.textContent = post.created_at

            news.append(li)

        }
    }    
})()