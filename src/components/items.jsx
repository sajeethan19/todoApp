import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


export default function Items({todos}) {
    const [data, setData] = useState(todos.slice(0,10)); //setup initial data to show and define sliced data
    const [id,setId] = useState(1);
    const [startId,setStartId] = useState(0);
    const [message, setMessage] = useState("");

    const itemsPerPage = 10; 
    const pageCount = Math.ceil(todos.length / itemsPerPage);

    const handlePageChange = (selectedPage) => {
        const startIndex = selectedPage.selected * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setData(todos.slice(startIndex, endIndex));
        setStartId(startIndex)
    };

    const handleModal = (index) => {
        setId(startId+index+1)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((result) => {setMessage(result.data)});
    },[id]);

  return (
    <div className='container mt-4'>
        <table className="table table-bordered text-center">
            <thead className='col-6'>
                <tr>
                <th scope="col" className='col-5'>Title</th>
                <th scope="col" className='col-5'>Complete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index) => 
                <tr key={index}>
                    <td id='title' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleModal(index)}>{item.title}</td>
                    <td><input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={item.completed} readOnly/></td>
                </tr>
                )}
            </tbody>
            
        </table>
        
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            />
        {/* Model Creation */}
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <p>Title: {JSON.stringify(message.title)}</p>
                        <p>User ID: {JSON.stringify(message.userId)}</p>
                        <p>ID: {JSON.stringify(message.id)}</p>
                        <p>{JSON.stringify(message.completed)=="true" ? "Task Completed ✅" : "Task not Completed ⏱️"}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
