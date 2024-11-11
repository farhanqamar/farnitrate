import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  status: string;
  visible: boolean;
  image: string;
}
const BlogTable = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Understanding React",
      author: "John Doe",
      date: "2024-09-01",
      status: "Published",
      image: "",
      visible: true,
    },
    {
      id: 2,
      title: "Mastering TypeScript",
      author: "Jane Smith",
      date: "2024-08-20",
      status: "Draft",
      image: "",
      visible: false,
    },
    {
      id: 3,
      title: "Vite and Tailwind Setup",
      author: "Alice Johnson",
      date: "2024-07-15",
      status: "Published",
      image: "",
      visible: true,
    },
    {
      id: 4,
      title: "State Management in React",
      author: "Bob Brown",
      date: "2024-06-10",
      status: "Published",
      image: "",
      visible: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);
  const [sortBy, setSortBy] = useState<keyof BlogPost>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const sortedPosts = [...blogPosts].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    setBlogPosts(sortedPosts);
  }, [sortBy, sortOrder]);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchTerm === "" || post.visible)
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column: keyof BlogPost) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleVisibility = (id: number) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, visible: !post.visible } : post
      )
    );
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>

      <div className=" bg-white rounded-lg">
        <div className="flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by title..."
            className="w-1/2 border border-gray-300 p-3 rounded-lg"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="text-left">
                <th className="p-3 border-b">Visibility</th>
                <th
                  className="p-3 border-b cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  Title{" "}
                  {sortBy === "title" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  className="p-3 border-b cursor-pointer"
                  onClick={() => handleSort("author")}
                >
                  Author{" "}
                  {sortBy === "author" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  className="p-3 border-b cursor-pointer"
                  onClick={() => handleSort("date")}
                >
                  Date {sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th className="p-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">
                    <button onClick={() => toggleVisibility(post.id)}>
                      {post.visible ? (
                        <FaEye className="text-green-500" />
                      ) : (
                        <FaEyeSlash className="text-red-500" />
                      )}
                    </button>
                  </td>

                  <td className="p-3 flex">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{post.title}</span>
                  </td>
                  <td className="p-3">{post.author}</td>
                  <td className="p-3">{post.date}</td>
                  <td className="p-3">{post.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
