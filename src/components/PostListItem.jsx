import Image from "./Image.jsx";
import {Link} from "react-router-dom";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/*    image */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
            </div>
            {/*    details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Duis eget leo a massa interdum cursus.
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written By</span>
                    <Link className="text-blue-800">John Doe</Link>
                    <span>On</span>
                    <Link className="text-blue-800">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>
                    rem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget leo a massa interdum cursus.
                    Pellentesque eu sagittis nibh, sit amet sollicitudin turpis.
                </p>
                <Link to="/test" className="underline text-blue-800 text-sm">Read more</Link>
            </div>
        </div>
    )
}

export default PostListItem;