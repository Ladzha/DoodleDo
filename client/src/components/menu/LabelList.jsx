import Label from '../Label';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';

const LabelList = ({labels, loading, error}) => {
  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Tags</h3>
      <article className='menuListContainer'>
        {loading && <Loader/>}
        {error && <Error/>}
        {labels && 
          <ul className='list'>
              {labels.map((label) => (
                  <li key={label.id}><Label name={label.name}/>{label.id}</li>
              ))}
          </ul>
        }
      </article>
    </section>
  )
}

export default LabelList