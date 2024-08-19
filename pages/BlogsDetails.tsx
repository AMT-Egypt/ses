import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import InnterPageHead from '../modules/organisms/inner_page_head'
import { blogsData } from '../public/data/blogs'
const BlogsDetails: React.FC = () => {
  const [category, setCategory] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const id = router.asPath.split('?')[1]
      const blogId = Number(id)
      const foundCategory = blogsData.find(category => category.id === blogId)
      setCategory(foundCategory)
    }
  }, [router.isReady])

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <>
      <Head>
        <meta
          name="Keywords"
          content={category.blogs[category.blogs.length - 1].description} />
      </Head>
      <div>
        <InnterPageHead title="Blogs Details" />
        <div className="container mx-auto">
          <h2 style={{ paddingBottom: '2rem' }} className="text-white mb-4">
            {category.title}
          </h2>
          <div className="w-full flex-column gap-2">
            {category.blogs.map((blog, index) => (
              <div className="text-white" key={index}>
                <h4 style={{ fontWeight: 'bold' }}>{blog.title}</h4>
                <p>{blog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogsDetails
