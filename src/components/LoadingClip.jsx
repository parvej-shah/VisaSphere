import { ScaleLoader } from 'react-spinners'

export default function LoadingClip() {
  return (
    <div className='min-h-screen bg-background flex justify-center items-center'> 
        <ScaleLoader color='#B32C35' size={56}/>
    </div>
  )
}
