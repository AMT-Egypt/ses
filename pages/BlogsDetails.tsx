import { useRouter } from 'next/router'
import { blogsData } from '../public/data/blogs'
import InnterPageHead from '../modules/organisms/inner_page_head'

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
      <InnterPageHead title="Blogs Dtails" />
      <div className='container mx-auto'>
        <h2 className='text-white mb-4'>{category.title}</h2> 
        <div className='w-full flex-column gap-2'>
          {category.blogs.map((blog, index) => (
            <div className='text-white' key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsDetails
