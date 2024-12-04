import Project from '../ProjectCard.jsx';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';

const ProjectList = ({projects, loading, error}) => {

  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Projects</h3>
      <article className='menuListContainer'>
        {loading && <Loader/>}
        {error && <Error/>}
        {projects && 
          <ul className='list'>
              {projects.map((project) => (
                  <li key={project.id}><Project name={project.name} description={project.description} />{category.id}</li>
              ))}
          </ul>
        }
      </article>
  </section>
  )
}

export default ProjectList