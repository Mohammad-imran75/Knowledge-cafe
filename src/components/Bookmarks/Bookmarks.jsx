import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks,readingTime}) => {
    console.log(bookmarks);
    return (
        <div className='w-1/3 bg-pink-300 ml-4 rounded-lg'>
            <div className="bg-purple-400 mt-20 rounded-xl">
                <p className="text-slate-200 font-semibold p-4 ">Spent time on read :{readingTime}  min</p>
            </div>
            <h2 className='text-3xl p-4 '>BookMark Blogs :{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;