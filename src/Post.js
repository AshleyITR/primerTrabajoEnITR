import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Post = (props) => {
  return (



<div class="row align-items-center">
    <div class="col"> 
    <p>{' '}</p>
    </div>
    <div class="col">
    <div class="d-flex flex-row align-items-center">
      <div class="card">
                <div class="icon">
                  {' '}
                  
                  <img src={props.item.owner.picture}></img>{' '}
                </div>
                <div class="card-body">
                
                  <p>
                    Usuari@: {capitalize(props.item.owner.title)}{' '}
                    {props.item.owner.firstName} {props.item.owner.lastName}
                  </p>
                  <button type="button" class="btn btn-primary bg-light">
                    <Link to={'/post/' + props.item.id}>
                      {' '}
                      Detalle del post{' '}
                    </Link>
                  </button>
               
                  </div>
                </div>
              </div>
            </div>
    
    <div class="col"> 
       <p>{' '}</p>
    </div>
    </div>
  ); 
};

export default Post;
