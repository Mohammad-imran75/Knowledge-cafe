import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    // console.log(bookmark); 
    return (
        <div className='p-4'>
            <h3 className='text-[18px] font-semibold bg-gray-200 mt-4 p-4 rounded-xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object
}
export default Bookmark;