import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const[value, setValue]=useState('');
  return (
    <div className='flex'>
      <div>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        <div>
          <p>status: <span>Draft</span></p> 
          <p>visibility: <span>Published</span></p> 
        </div>
        <div>
          <button>Save as Draft</button>
          <button>Update</button>
        </div>
        <input type='file'/>
      </div>
      <div>
          <h1>Category</h1>
          <div>
            <input type='radio' name="a" value="js" id="js"/>
            <label htmlFor='js'>js</label>
          </div>
          <div>
            <input type='radio' name="a" value="css" id="css"/>
            <label htmlFor='css'>css</label>
          </div>
          <div>
            <input type='radio' name="a" value="html" id="html"/>
            <label htmlFor='html'>html</label>
          </div>
      </div>
    </div>    
  )
}

export default Write