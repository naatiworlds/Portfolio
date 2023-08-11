import './SobreMi.css'

function Card(props){
    return(
        <section id={props.id}>
            <div className="card">
            <h2>{props.titulo}</h2>
            <div className="content">
                <div className="colabs">
                    {imagen(props.imagen, props.alt)}
                    {figcaption(props.figure)}
                </div>
                <div class="colabs">
                    {imagen2(props.imagen2, props.alt2)}
                    {figcaption2(props.figure2)}
                </div>
                {content(props.content)}
                {Iframe(props.link)}
            </div>
        </div>
        </section>
    );
}

function imagen(imagen, alt){
    if (imagen) return <img src={imagen} alt={alt}/>
    else return ""
}
function figcaption(figure){
    if(figure) return <figcaption>{figure}</figcaption>
    else return ""
}
function imagen2(imagen, alt){
    if (imagen) return <img src={imagen} alt={alt}/>
    else return ""
}
function figcaption2(figure2){
    if(figure2) return <figcaption>{figure2}</figcaption>
    else return ""
}
function content(content){
    if(content) return <p>{content}</p>
    else return ""
}
function Iframe(link = ""){
    if (link){
        return (
            <div class="proyectContent">
            </div>
        );
    } 

}

export default Card;