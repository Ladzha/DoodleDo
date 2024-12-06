import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';
import Label from './Label.jsx';

const LabelList = ({data, loading, error}) => {
  const labels = [
    {"_id": 1, "name": "With pleasure"}, 
    {"_id": 2, "name": "Daily"}
  ]
  
  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Labels</h3>
      <article className='menuListContainer'>
        {/* {loading && <Loader/>}
        {error && <Error/>} */}
        {labels && labels.map((label) => (
            <Label key={label._id} labelName={label.name}/>
          ))
        }
      </article>
    </section>
  )
}

export default LabelList