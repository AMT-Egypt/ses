import { useRouter } from 'next/router'
import { blogsData } from '../public/data/blogs'

const BlogsDetails: React.FC = () => {
  const router = useRouter()

  const id = router.asPath.split("?")[1]

  // Convert id to number for comparison
  const blogId = Number(id)
  
  // Find the blog category by ID
  const category = blogsData.find(category => category.id === blogId)

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div>
      <h1>{category.title}</h1>
      {category.blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogsDetails
