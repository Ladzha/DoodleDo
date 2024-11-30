import React from 'react';
import Navbar from './Navbar';
import CategoryList from './CategoryList';
import ProjectList from './ProjectList';
import LabelList from './LabelList';

const MainMenu = () => {
  return (
    <aside className='mainMenu'>SideMenu
        <Navbar/>
        <CategoryList/> //список категори 
        <ProjectList/>  //список проектов 
        <LabelList/> // список лейблов по нажатиию фильтр?
        <section>sectio 1</section>
        <section>sectio 2</section>
    </aside>
  )
}

export default MainMenu