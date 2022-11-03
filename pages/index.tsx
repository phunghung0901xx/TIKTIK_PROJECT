import type { NextPage } from 'next'
import axios from 'axios'
import {Video} from '../types'
import VideoCard from '../components/VideoCard'
import NoResults from '../components/NoResults'
import { BASE_URL } from '../utils'
interface Iprops {
 videos: Video[]
}
const Home = ({videos}:Iprops) => {
  console.log(videos)
  return (
   
    <div className="flex flex-col gap-10 videos flex-auto h-full">
  {
    videos?.length ? (videos.map((video:Video)=>(
      <VideoCard  post={video} key={video._id}/>
    ))
    ): (
      <NoResults text={'No videos'} />
    )
  }
    </div>
  )
}
export const getServerSideProps = async () => {
  const {data} = await axios.get(`${BASE_URL}/api/post`)
 
  return  {
    props: {
      videos: data
    }
  }
}
export default Home
