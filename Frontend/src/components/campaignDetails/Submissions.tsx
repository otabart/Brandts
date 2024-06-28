const data = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St, City, Country',
        link: 'https://example.com',
        likes: 120,
        comments: 45,
        shares: 30,
    },
    {
        name: 'John Philip',
        email: 'philip@example.com',
        address: '123 Austine St, City, Country',
        link: 'https://example.com',
        likes: 620,
        comments: 475,
        shares: 300,
    },
];


const Submissions = () => {
    return (
        <main className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base mt-10">
            <p className="text-lg md:text-xl xl:text2xl font-medium">Creators Submissions</p>
            <div className="overflow-x-auto mt-10 special">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-primaryBlue text-white">
                        <tr>
                            <th className="py-3 px-5 text-left">Name</th>
                            <th className="py-3 px-5 text-left">Email</th>
                            <th className="py-3 px-5 text-left">Address</th>
                            <th className="py-3 px-5 text-left">Link</th>
                            <th className="py-3 px-5 text-left">Likes</th>
                            <th className="py-3 px-5 text-left">Comments</th>
                            <th className="py-3 px-5 text-left">Shares</th>
                            <th className="py-3 px-5 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition duration-200`}
                            >
                                <td className="py-4 px-5">{item.name}</td>
                                <td className="py-4 px-5">{item.email}</td>
                                <td className="py-4 px-5">{item.address}</td>
                                <td className="py-4 px-5">
                                    <a
                                        href={item.link}
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Link
                                    </a>
                                </td>
                                <td className="py-4 px-5">{item.likes}</td>
                                <td className="py-4 px-5">{item.comments}</td>
                                <td className="py-4 px-5">{item.shares}</td>
                                <td className="py-4 px-5">
                                    <button className="bg-primaryBlue text-white py-2 px-4 rounded-lg hover:bg-accentColor transition duration-200">
                                        Action
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Submissions;