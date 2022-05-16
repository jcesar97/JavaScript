//	Funciones o propiedades de la clase Array :

const posts = [{
    id: 1,
    title: "Mi primer post",
    image: "https://img.com/1",
    tags: ['javascript', 'webdevelopment'],
  },{
    id: 2,
    title: "Mi experiencia con React",
    image: "https://img.com/2",
    tags: ['javascript', 'webdevelopment', 'react'],
  },{
    id: 3,
    title: "Porque deje Angular",
    image: "https://img.com/3",
    tags: ['javascript', 'webdevelopment', 'Angular'],
  }
  ]
  //	find
  posts.find(posts => posts.title == "Porque deje Angular")
  
  //	some
  posts.some(posts=>posts.id === 4)
  posts.some(posts=>posts.tags.includes('react'))
  
  //	every
  posts.every(posts=>posts.tags.includes('react'))
  
  //	map
  posts.map(posts => posts.title)
  
  //	filter
  posts.filter(posts => posts.tags.includes('Angular'))
  
  posts.reduce((allTags, posts) => {
    return Array.from(new Set([...allTags, ...posts.tags]))
  },[])