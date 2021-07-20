const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon lechter",
            },
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é  Insubistituível",
                author: "Augusto Cury",

            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ]
    }
]

    //contar o número de categorias e livros por categoria
    const numberOfCategory = booksByCategory.length
    console.log(numberOfCategory+" categorias")

    //contar o npumero de livros por categoria
    for(let i=0; i<booksByCategory.length;i++){

        const numberOfBooks = booksByCategory[i].books.length   
        console.log("Categoria "+booksByCategory[i].category+": "+numberOfBooks+" livros")

    }

    //contar o número de autores

    //coleta o nome dos autores de cada livro
    let arrAuthors = []
    for(let i=0;i<booksByCategory.length;i++){
        for(let y=0;y<booksByCategory[i].books.length;y++){
            arrAuthors.push(booksByCategory[i].books[y].author)
        }
        
    }

    //retira nomes repetidos do array
    let filterAuthors = [...new Set(arrAuthors)]
    //console.log("autores não repetidos: "+filterAuthors)
    
    //soma a quantidade de nomes (elementos) dentro do array
    let totalAuthors = filterAuthors.length
    console.log("Total de autores: "+totalAuthors)
  
    //função que mostra os livros do autor
    let showbooks = function(nameAuthor){
        //percorre as categorias
        for(let i=0; i<booksByCategory.length;i++){
            //percorre os livros
            for(let y=0;y<booksByCategory[i].books.length;y++){

                if(booksByCategory[i].books[y].author == nameAuthor){

                    console.log("Autor: "+nameAuthor+ " Livro: "+booksByCategory[i].books[y].title)

                 }              
            }
        }
    }

    showbooks("Stephen R. Covey")


