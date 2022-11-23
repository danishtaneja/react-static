import React from 'react'

export const Education = () => {
  return (
    <>
    <div className="container-fluid table-responsive py-2" id="education"> 
    <h1 style={{color:'#0d6efd'}}>Education</h1>
  <table className="table table-hover my-5 text-center table-borderless">
  <thead className='fst-italic fs-3'>
    <tr>
      <th scope="col">Education</th>
      <th scope="col">School or Univesity</th>
      <th scope='col'>Location</th>
    </tr>
  </thead>
  <tbody className='fs-4'>
  <tr>
      <td>M Tech (ES & BA)</td>
      <td>Federation Univesity, Australia</td>
      <td>Brisbane, Australia</td>
    </tr>
    <tr>
      <td>BS IT</td>
      <td>Sanatan Dharma College (Lahore), Ambala</td>
      <td>Ambala, India</td>
    </tr>
    <tr>
      <td>High School (12<sup>th</sup> Class)</td>
      <td>C.B.S.E, Ambala</td>
      <td>Ambala, India</td>
    </tr>
    <tr>
      <td>Matriculation Examination (10<sup>th</sup> Class)</td>
      <td>C.B.S.E, Ambala</td>
      <td>Ambala, India</td>
    </tr>
  </tbody>
</table>
</div>
<hr />
    </>
  )
}
