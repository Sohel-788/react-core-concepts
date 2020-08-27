import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const score=5*5;
    let x=10;
    let y=x+score;
    const students={
        name:'Sohel',
        id:12,
        email:"mahmudsohel@gmail.com"
    }
    // css
    var style={
        color:'white',
        backgroundColor:'green',
        fontWeight:700,
        padding:"10px",
        textShadow:'5px 5px 10px red',
        textAlign:'center'
    }
    //Multiple components in an array objedcts
    const user=['Sohel', 'Shovo', 'Anis','Altaf', 'Sadik', 'Hiron', 'Sofik'];
   
    return (
        <div className={style} style={style}>
           <h1>Hello world! I am begginer in react</h1>
           <h2>My score is {y}</h2>
           <h3 style={{backgroundColor:'white',color:'green'}}>Name: {students.name+" "+'Mahmud'}</h3>
           <h3>Email: {students.email}</h3>

           {/* Component using */}
           <Person topic="Web Development" duration="The course duration is 6 mounts"></Person>
           <Person topic="Graphic Design" duration="The course duration is 3 mounts"></Person>
           <Person topic="Spoken English" duration="The course duration is 5 mounts"></Person>

           {/* product area */}

           <h1>Dynamic Product List Items</h1>
           {
               products.map(p=><Product product={p}></Product>)
           }

           {/* <h1>Static Product List Items</h1>
           <Product product={products[0]}></Product>
           <Product product={products[1]}></Product>
           <Product product={products[3]}></Product>
           <Product product={products[4]}></Product>
           <Product product={products[5]}></Product> */}
            

           {/* Multiple components in an array objects */}
           <h2>Static list items</h2>
           <ul>
               <li>{user[0]}</li>
               <li>{user[1]}</li>
               <li>{user[2]}</li>
               <li>{user[3]}</li>
               <li>{user[4]}</li>
               <li>{user[5]}</li>
           </ul>

           <h2>Dynamic list items</h2>
           <ul style={{listStyleType:'none'}}>
               {user.map(users=><li>{users}</li>)}
           </ul>
        {/* //Counter access */}
        <Counter></Counter>
        
        {/* Rander multiple array object */}
        <h1>Dynamic Rander multiple array object</h1>
        {
            teachers.map(T=> <Teacher name={T.name} subject={T.subject}></Teacher>)
        }
        <h1>Data loading from Api using useEffect</h1>
        {/* //loading data from api using useEffect */}
       

      
        </div>
    )
}

// Component declaration
function Person(props /*data passing*/) {
    var ComponentStyle={
        backgroundColor:'blue',
        color:'white',
        textShadow:'5px 5px 10px red',
        textAlign:'center'
    }
    var component2={
        border:'2px solid red',
        margin:'15px',
    }
    return (
        <div className={ComponentStyle} style={ComponentStyle}>
            <h1>Component means similar in look and different in data</h1>
            <div className={component2} style={component2}>
                 <h3>Subject: {props.topic}</h3>
                <p>Course duration: {props.duration}</p>
                 <button style={{cursor:'pointer',padding:'10px 20px',color:'white', backgroundColor:'red'}}>Details</button>
                
            </div>
        </div>
    )
}

//another componet area design
let products=[
    {name:'Photosop', price:'$23.90'},
    {name:'Illustrator', price:'$4.60'},
    {name:'PDF Reader', price:'$9.88'},
    {name:'PDF Reader', price:'$9.88'},
    {name:'PDF Reader', price:'$9.88'}
]
function Product(props) {
    var productStyle={
        backgroundColor:'#002B36',
        color:'#657B83',
        border:'2px solid gray',
        borderRadious:'10px',
        width:'250px',
        height:'200px',
        float:'left',
        margin:'5px'
    }
    //distructuring. you can comment out below line and uncomment the below h1,h2 tag , ultimatly output will be same
  const {name, price}=props.product;
    return (
        <div className={productStyle} style={productStyle} >
            <h2>{name}</h2>
            <h2>{price}</h2> <br/>
            {/* <h2>{props.product.name}</h2>
            <h1>{props.product.price}</h1><br/> */}
            <button style={
                {borderRadius:'5px', cursor:'pointer',padding:'10px 20px',color:'white', backgroundColor:'#4083C7'} 
                }>Buy Now</button>
        </div>
    )
}
//add to cart 

function Counter() {
    const [count, setCount]=useState(0);
    const increaseClick=()=>setCount(count+1);
    const decreaseClick=()=>setCount(count-1);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increaseClick} style={
                {borderRadius:'5px', cursor:'pointer',padding:'10px 20px',color:'white', backgroundColor:'#4083C7'} 
                }>Increase</button>
                <button onClick={decreaseClick} style={
                {borderRadius:'5px', cursor:'pointer',padding:'10px 20px',color:'white', backgroundColor:'#4083C7'} 
                }>Decrease</button>
        </div>
    )
}
//render multiple component from an array
const teachers=[
    {name:"Nahin",  subject:"English"},
    {name:"Osman Goni", subject:"Mathmetics"},
    {name:"Harun or Rashid", subject:"Bangla"},
    {name:"Mahfujur Rahman", subject:"Islamic Studies"}
]
function Teacher(props) {
  
    const divStyle={
        backgroundColor:'#003847',
        color:'#657B83',
        border:'2px solid yellow',
        borderRadious:'10px',
        width:'310px',
        height:'200px',
        float:'left',
        margin:'5px'
    }
    return(
        <div className={divStyle} style={divStyle}>
            <h1>{props.name}</h1> <br/>
            <h3>He is a professor of{props.subject} </h3>
        </div>
    )
}




export default App;