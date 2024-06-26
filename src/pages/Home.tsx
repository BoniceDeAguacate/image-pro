import Navbar from '../components/Navbar'
import UploadForm from '../components/UploadForm'
import ImageGallery from '../components/ImageGallery'
import { useAuth } from '../hooks/useAuth'

export default function () {
const {user} = useAuth();
console.log(user);

  return (
    <div className='max-w-4xl mx-auto'>
     <Navbar/>
     <UploadForm/>
     <ImageGallery/>
    </div>
  )
}
