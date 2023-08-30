import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'

// the revalidate value always in seconds, so 1 day (the normal value in production) is 86400 seconds
export const revalidate = 86400

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome to Small Blog ✌🏻&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">David</span>
        </span>
      </p>

      <Posts />
    </div>
  )
}
