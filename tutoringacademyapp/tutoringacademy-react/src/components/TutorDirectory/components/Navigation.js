import React from "react";

function Navigation({ onSearch, searchTerm, handleSortByFirstName, handleSortByLastName, handleSortBySubject }) {
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortByFirstName} className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 mr-4 hover:bg-yellow-500 hover:text-white">First Name</button>
                <button onClick={handleSortByLastName} className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 mr-4 hover:bg-yellow-500 hover:text-white">Last Name</button>
                <button onClick={handleSortBySubject} className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 hover:bg-yellow-500 hover:text-white">Subject</button>
            </div>
            <form>
                <input
                    value={searchTerm}
                    onChange={onSearch}
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    placeholder="Search"/>
            </form>
        </div>
    )
}

export default Navigation;