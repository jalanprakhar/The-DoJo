import './Dashboard.css'

import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList';
export default function Dashboard() {
  const {documents,error}=useCollection('projects');

  console.log(documents);
  return (
    
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectList documents={documents}/>}
    </div>
  )
}