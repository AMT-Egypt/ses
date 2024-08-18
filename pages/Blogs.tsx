import { useRouter } from 'next/router'
import InnterPageHead from '../modules/organisms/inner_page_head'
import { blogsData } from '../public/data/blogs'

const Blogs: React.FC = () => {
  const router = useRouter()

  const handleBlogClick = (id: number) => {
    // Navigate to the blog details page with the ID
    router.push(`BlogsDetails?${id}`)
  }

  const containerStyle: React.CSSProperties = {
    border: '1px solid #578df5',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '249px',
    height: '19rem',
    margin: '16px',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
  }

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '12rem',
    objectFit: 'cover',
  }

  const titleStyle: React.CSSProperties = {
    padding: '16px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
  }

  return (
    <>
      <InnterPageHead title="Blogs" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '16px',
          minHeight: '60rem',
        }}
        className="blog_container"
      >
        {blogsData.slice(0, 11).map(category => (
          <div
            key={category.id}
            style={containerStyle}
            onClick={() => handleBlogClick(category.id)}
          >
            <img
              src="https://i.pinimg.com/564x/45/7e/23/457e23ba64ca4d2d0c3d7d35dda1a356.jpg"
              alt={category.title}
              style={imageStyle}
            />
            <div style={titleStyle}>{category.title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blogs
