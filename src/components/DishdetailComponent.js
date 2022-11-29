import React, { Component } from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'


class Dishdetail extends Component{
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  
  renderDish(dish){
    if(dish != null){
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
    else {
    return(
      <div></div>
    )
   }
  }

  renderComments(dish){
   if(dish!=null){
    const listComments = dish.comments.map((comment)=>
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

   }else{
    <div></div>
   }
   
  }

  render(){
   
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-1 col-sm-12">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-md-5 m-1 col-sm-12">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Dishdetail;