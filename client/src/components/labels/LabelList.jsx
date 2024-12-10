import Label from './Label.jsx';

const LabelList = ({labels, onSelectLabel})=> {

  const handleClick =(labelId)=>{
    onSelectLabel(labelId)
  }

  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Labels</h3>
      <article className='menuListContainer'>
        {labels && labels.map((label) => (
            <Label 
            key={label._id} 
            labelName={label.name}
            onClick={()=>handleClick(label._id)}/>))
        }
      </article>
    </section>
  )
}

export default LabelList