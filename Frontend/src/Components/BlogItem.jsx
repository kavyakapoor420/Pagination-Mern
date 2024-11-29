/* eslint-disable react/prop-types */


const BlogItem=({value})=>{
    return (
        <>
            <div className="blog-item" key={value?._id}>
                 {/* User-Info */}
                 <div className="user-info">
                    <div className="avatar">A</div>
                     <div className="user-details">
                        <h1>{value?.name}</h1>
                        <p>{value.email}</p>
                     </div>
                 </div>
                        {/* Blog-Description */}
                        <div className="blog-description">
                            {value.description}
                        </div>
                       {/* Blog-Date */}
                       <div className="blog-date">Posted On :November 21,2024</div>
            </div>
        </>
    )
}

export default BlogItem ;