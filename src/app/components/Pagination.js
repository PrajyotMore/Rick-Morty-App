export default function Pagination({ currentPage, pageInfo, onPageChange }) {
    const totalPages = pageInfo.pages || 1; // Total number of pages available from the API
    const pageNumbers = [];
  
    // Calculate page numbers
    const maxPageToShow = 4;
    const startPage = Math.max(1, currentPage - Math.floor(maxPageToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageToShow - 1);
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    const handlePageClick = (pageNumber) => {
      if (pageNumber !== currentPage) {
        onPageChange(pageNumber);
      }
    };
  
    return (
      <div className="flex justify-center items-center gap-4 mt-4">
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          onClick={handlePrevious} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
  
        {/* Page Numbers */}
        <div className="flex gap-2">
          {pageNumbers.map((number) => (
            <button 
              key={number}
              onClick={() => handlePageClick(number)}
              className={`px-4 py-2 rounded ${
                number === currentPage 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
  
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          onClick={handleNext} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  }
  