// Adicione seu código aqui
var pos = {
    user: "",
    description: "",
    body: "",

} 
const posts = []

const focu = () => {
    const input =  document.getElementById("field")
    input.focus();
}

const getForm = () => {
    const input = document.querySelector("input")
    console.log("a ", input.value); 
    addPost(input.value)
    var n = document.getElementsByClassName("post")
    if (n.length) {
        n.forEach(element => element.remove())
    }
    
    montarPost(input.value)
    input.value = ''
    
}
const  addPost = (post) => {
    posts.push(post)
}


const montarPost = (element) => {
    const post = document.createElement("div")
    post.className = " post";
    post.setAttribute('id', 'post')

    const postAvatar = document.createElement("div")
    post.className = " post__avatar";

    const img = document.createElement('img');
    img.src ="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
    postAvatar.appendChild(img);


    const divPai = document.createElement("div");
    divPai.className += " post__body"

    const divHeader = document.createElement("div");
    divHeader.className += " post__header"

    const headerText = document.createElement("div");
    headerText.className += " post__headerText"
    headerText.id = "user"

    var h3 = document.createElement("h3");
    var texto = document.createTextNode("Cristina");
    h3.appendChild(texto);

    var span1 = document.createElement("span");
    span1.className += " post__headerSpecial";

    var span2 = document.createElement("span");
    span2.className += " material-icons post__badge";
    var textoSpan1 = document.createTextNode("  @somanathg");

    span1.appendChild(textoSpan1);

    var textoSpan2 = document.createTextNode("  verified");

    span2.appendChild(textoSpan2);
    span1.appendChild(span2)
    h3.appendChild(span1)
    headerText.appendChild(h3)

    const pNovo = document.createElement("p");
    var conteudoNovo = document.createTextNode(element);

    pNovo.appendChild(conteudoNovo);

    const divDesc = document.createElement("div");
    divDesc.className += " post__headerDescription";
    
    const divFooter = document.createElement("div");
    divFooter.className = "post__footer"
    const spanFooter1 = document.createElement("span");
    const spanFooter2 = document.createElement("span");
    const spanFooter3 = document.createElement("span");
    spanFooter1.className = "material-icons"
    spanFooter2.className = "material-icons"
    spanFooter3.className = "material-icons"
    var conteudoSpanFooter1 = document.createTextNode("repeat");
    var conteudoSpanFooter2 = document.createTextNode("favorite_border");
    var conteudoSpanFooter3 = document.createTextNode("publish");

    spanFooter1.appendChild(conteudoSpanFooter1);
    spanFooter2.appendChild(conteudoSpanFooter2);
    spanFooter3.appendChild(conteudoSpanFooter3);
    divFooter.appendChild(spanFooter1)
    divFooter.appendChild(spanFooter2)
    divFooter.appendChild(spanFooter3)

    const img2 = document.createElement("img");
    img2.src = "https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
    img2.alt= ""
    divDesc.appendChild(pNovo);
    divHeader.appendChild(headerText)
    divHeader.appendChild(divDesc)
    post.appendChild(postAvatar)
    divPai.appendChild(divHeader)
    divPai.appendChild(img2)
    divPai.appendChild(divFooter)
    post.appendChild(divPai)

    const feed = document.getElementById("feed")
    feed.append(post)



}