import { ScaleLoader } from 'react-spinners'

export default function LoadingClip() {
  return (
    <div className='min-h-screen bg-accent flex justify-center items-center'> 
        <ScaleLoader color='#1E293B' size={50}/>
    </div>
  )
}
