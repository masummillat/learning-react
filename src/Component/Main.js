import React from 'react';
import Recipe from "./Recipe";
import  AddColorForm from './AddColorForm'
import  StarRating from './StarRating'
// import  Recipe from './Recipe';
// import  MemberList from './MemberList'
// import  HiddenMessages from './HiddenMessages'
import CountryList from './CountryList'

import RandomMeUser from './RandomMeUser'

const  Main = ({recipes})=>{
   return(

       <article>
           <header>
               <h1>Delicious Recipes</h1>
           </header>

           <div className="recipes">
               {recipes.map((recipes,i)=>
                    <Recipe key={i} {...recipes}/>
               )}
           </div>

           <AddColorForm onNewColor= {(title,color)=>{
               console.log(`TODO: add new ${title} and ${color} to the list`)
               console.log(`TODO: render UI with new color`)
           }}

           />

           <StarRating/>

           {/*<MemberList count={5}/>*/}
           {/*<HiddenMessages/>*/}
           {/*<CountryList/>*/}
           {/*<Timeline name="History of Skiing" data={historicDatesForSkiing}/>*/}
            <RandomMeUser/>
       </article>

   )
}

export  default  Main

