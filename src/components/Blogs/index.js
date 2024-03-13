import { blogsList } from "./data";
import { MdAccessTime } from "react-icons/md";

export default function Blogs() {
    const [firstBlog, ...restBlogs] = blogsList;
    // console.log(firstBlog);

    return (
        <>
            <div className="section-10__first-blog">
                <div className="section-10__first-blog__img">
                    <img src={firstBlog.thumb} alt="thumb here..." />
                </div>
                <div className="section-10__first-blog__info">
                    <h4>{firstBlog.title}</h4>
                    <div className="section-10__first-blog__time">
                        <MdAccessTime />
                        <span>{firstBlog.time}</span>
                    </div>
                </div>
            </div>
            <div className="section-10__right-col">
                {restBlogs.map((blog) => {
                    return (
                        <div className="section-10__right__blog">
                            <div className="section-10__right__blog__img">
                                <img src={blog.thumb} alt="thumb here..." />
                            </div>
                            <div className="section-10__right__blog__info">
                                <h4>{blog.title}</h4>
                                <div className="section-10__right__blog__time">
                                    <MdAccessTime />
                                    <span>{blog.time}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}