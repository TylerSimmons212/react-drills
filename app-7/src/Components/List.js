import React, { Component } from 'react';
import Todo from './ToDo';

export default function List( props ) {
  let list = props.tasks.map( ( ele, index ) => {
    return (
      <Todo key={ index } task={ ele } />
    )
  })

  return (
    <div>
      { list }
    </div>
  )
}