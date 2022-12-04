import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'

  

  function RenderDish({dish}){
    return(
      <Card>
         <CardImg width="100%" src={dish.image} alt={dish.name}/>
         <CardBody>
            <CardTitle>{dish.name}</CardTitle> 
            <CardText>{dish.description}</CardText>
         </CardBody>
      </Card>
    )
  }

  function RenderComments ({comments}) {
   
    const listComments = comments.map((comment)=>
      <li key={comment.id}>
        <p>
        {comment.comment}
        </p>
        <p>
        --{comment.author} ,
        {new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" }).format(new Date(comment.date))}
        </p>
      </li>

    );
    
   return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">{listComments}</ul>
    </div>
   );
  }

  const Dishdetail = (props) => {
    if(props.dish!=null){
      return(
        <div className="container">
        <div className="row">
          <div className="col-md-5 m-1 col-sm-12">
            <RenderDish dish={props.dish}/>
          </div>
          <div className="col-md-5 m-1 col-sm-12">
          <RenderComments comments={props.dish.comments}/>
          </div>
        </div>
      </div>
      )
    }else{
     return(
      <div></div>
     );
    }
  }

export default Dishdetail;