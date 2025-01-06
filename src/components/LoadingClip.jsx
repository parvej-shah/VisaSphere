import { ScaleLoader } from 'react-spinners'

export default function LoadingClip() {
  return (
    <div className='min-h-screen bg-background flex justify-center items-center'> 
        <ScaleLoader color='#5eff00' size={56}/>
    </div>
  )
}
