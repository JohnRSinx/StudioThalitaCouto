import { Container } from "./styles";
import { Pen } from "phosphor-react";
import { FormDialog } from "../Dialog/Dialog";
import {useState} from "react";


export function Cards({content,setListClient}) {
  const [open, setOpen] = useState(false);

  function handleClickCard () {
    setOpen(true);
  }
  console.log(content)
  return (
    <>
    <FormDialog 
    open={open}
    onClose={()=>setOpen(false)}
    content={content}
    listCard={content.listCard}
    setListClient={setListClient}
    />
    
    <Container>
    <article onClick={()=>handleClickCard()}>
       <div className="contentHeader">
        <time>
          Data {content.time}
        </time>
        <button className="trashButton">
          <Pen size={26} weight="fill" />
        </button>
       </div>
      <div className="infoClient">
        <div className="categoryInfo">
          <h3>
            {content.name}
            </h3>
        </div>
        <div className="categoryInfo">
          <h3>{content.category}</h3>
        </div>
        <div className="categoryInfo">
          <h3>R$ {content.value}</h3>
        </div>
      </div>
    </article>
   </Container>
    </>
   
  )
}