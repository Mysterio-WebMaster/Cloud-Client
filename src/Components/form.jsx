import React from 'react'

export default function form() {
      return (
            <div>
                  <h3>Form</h3>

                  <form action="http://65.2.79.48:3001/data" method="get">
                        <label>Name: </label><br></br>
                        <input type="text" name="name" id="" required /><br></br><br></br>
                        <label>Phone: </label><br></br>
                        <input type="number" name="phone" id="" required/><br></br><br></br>

                        <button type='submit'>Submit</button>
                  </form>
                  
            </div>
      )
}
