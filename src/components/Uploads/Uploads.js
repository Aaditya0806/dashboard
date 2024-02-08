import React from 'react'

const Uploads = () => {
  return (
    <div className='w-full pl-10 pr-10 overflow-auto'>
      <p className='text-3xl font-semibold text-start'>Uploads</p>  
      <div className='w-[1065px] bg-[#F5F5F5] p-5 rounded-lg mt-10 '>
         <div className='flex justify-between'>
            <p className='text-lg font-semibold'>Sl No.</p>
            <p className='text-lg font-semibold'>Links</p>
            <p className='text-lg font-semibold'>Prefix</p>
            <p className='text-lg font-semibold'>Add Tags</p>
            <p className='text-lg font-semibold'>Selected Tags</p>
           
         </div>
         <div className='flex justify-between bg-white p-2 rounded-lg mt-5'>
            <p className='text-lg font-semibold'>01</p>
            <p className='text-lg font-semibold'>www.google.com</p>
            <p className='text-lg font-semibold'>prefixsample</p>
            <p className='text-lg font-semibold'><label for="tags">Select Tags:</label>
                    <select id="tags" name="tags">
                    <option value="Tag-1">Tag 1</option>
                    <option value="Tag-2">Tag 2</option>
                    <option value="Tag-3">Tag 3</option>
                    <option value="Tag-4">Tag 4</option>
                    </select>
                    </p>
            <div className='text-lg font-semibold flex '> <div className='w-[70px] h-[28px] bg-[#605BFF] rounded-md  flex  justify-center items-center gap-2 m-1'><p className='text-white'>Tag 1</p> <p className='text-white'>X</p></div> 
            <div className='w-[70px] h-[28px] bg-[#605BFF] rounded-md  flex  justify-center items-center gap-2 m-1'><p className='text-white'>Tag 1</p> <p className='text-white'>X</p></div>
            
            </div>
           
           
         </div>


{/* <table className='bg-[#F5F5F5]'>
  <tr className='bg-[#F5F5F5]'>
    <th>Sl No.</th>
    <th>Links</th>
    <th>Prefix</th>
    <th>Add Tags</th>
    <th>Selected Tags</th>
  </tr>
  <tr>
    <td>01</td>
    <td>www.google.com</td>
    <td>prefixsample</td>
    <td><label for="tags">Choose a car:</label>

        <select name="tags" id="tags">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
</td>
<td><div className='w-[70px] h-[24px] bg-[#605BFF] rounded-md p-[1px] flex  justify-center items-center gap-2'><p className='text-white'>Tag 1</p> <p className='text-white'>x</p></div></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */}


      </div>
    </div>
  )
}

export default Uploads
