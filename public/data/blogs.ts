type blogDataType = {
    id: string,
    title: string,
    blogs: {
        title: string,
        description: string,
    }[],
}[]

export const blogsData: blogDataType = [
    {
        id: "1",
        title: "The Future of Digital Transformation in Business",
        blogs: [
            {
                title: "Introduction",
                description: "n today's rapidly evolving business landscape, digital transformation is no longer a choice but a necessity. Companies across industries are leveraging technology to improve efficiency, enhance customer experiences, and drive growth. But what does the future hold for digital transformation?"
            },
            {
                title: "Key Drivers of Digital Transformation",
                description: "The future of digital transformation will be shaped by emerging technologies like Artificial Intelligence (AI), the Internet of Things (IoT), blockchain, and 5G. These technologies will enable businesses to become more agile, responsive, and customer-centric."
            },
            {
                title: "Case Studies",
                description: "Companies like Amazon and Netflix have redefined their industries through digital transformation. By adopting new technologies and rethinking their business models, they have set a new standard for customer experience and operational efficiency"
            },
            {
                title: "Conclusion",
                description: "As we look to the future, businesses must stay ahead of the curve by embracing digital transformation. Those that do will not only survive but thrive in the digital age"
            },
            {
                title: "SEO Keywords",
                description: "digital transformation, future of business, AI, IoT, blockchain, 5G"
            },
        ]
    }
] 