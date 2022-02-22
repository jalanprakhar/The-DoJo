import './ProjectList.css'
import {Link} from 'react-router-dom'
import Avatar from './Avatar'
export default function ProjectList({documents}) {
    if(documents.length===0){
        return (
            <p>No Projects to show</p>
        )
    }
  return (
    <div className='project-list'>
      {documents.map(project=>(
        <Link to={`/projects/${project.id}`} key={project.id}>
            <h4>{project.name}</h4>
            <p>Due by {project.dueDate.toDate().toDateString()}</p>
            <div className='assigned-to'>
                {project.assignedUsersList.map(user=>(
                    <ul>
                        <li key={user.photoURL}>
                            <Avatar
                            src={user.photoURL}
                            />
                        </li>
                    </ul>
                ))}
            </div>
        </Link>
      ))}
    </div>
  )
}
