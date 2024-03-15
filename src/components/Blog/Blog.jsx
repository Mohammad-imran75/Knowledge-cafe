import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    console.log(blog);
    return (
        <div>
            <div className='pt-10'>
            <img src={cover} alt="" />
            </div>
            <div className='flex justify-between items-center mt-10 mb-10'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h1 className='font-bold text-3xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='text-3xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold '> Title :{title}</h1>
            <p>
            {
               hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
            </p>
            <button className='text-purple-800 font-semibold underline' onClick={()=>handleMarkAsRead(reading_time,id)}>Mark as read</button>
        </div>
    );
};
Blog.proTypes = {
 blog:PropTypes.object.isRequired
}
export default Blog;