import React from 'react'

export const Skills = () => {
  return (
    <>
    <div className="container-fluid py-2" id='skills'>
    <div className="container-fluid table-responsive">
      <h1 style={{color:'#0d6efd'}}>Skills</h1>
  {/* <table className="table my-5 table-hover text-left table-borderless">
  <thead className='fst-italic fs-3'>
    <tr>
      <th scope="col">Languages</th>
      <th scope='col'>Designing</th>
      <th scope='col'>Database</th>
      <th scope='col'>OS</th>
      <th scope='col'>Code Editor</th>
      <th scope='col'>Soft Skills</th>
    </tr>
  </thead>
  <tbody className='fs-5'>
    <tr>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB1_1WTaqapSY09zqec_GgYSiivdAq5FnxQ&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>HTML/CSS</td>
      <td><img src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>Figma</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQYe3jXYMhaR0WDRd-nd5sd3a5DmcD1DZr_iUNLQfZLW9DKIntXjqIBCpa2qaHzhXv-c&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50} /><br/>NoSQL (MongoDB)</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnbYfCMm8TSfi6junV-KGKQxmdsPNkXoaNw&usqp=CAU' alt='' className='img-thumbnail' width={40} height={40}/><br/>Windows</td>
      <td>VS Code <span className="text-success fs-5">&#x2a;</span></td>
      <td><img src='https://mpng.subpng.com/20180327/lxe/kisspng-teamwork-computer-icons-clip-art-teamwork-5aba19fa49a598.9082573415221457863017.jpg' alt='' className='img-thumbnail' width={50} height={50}/><br/>Teamwork</td>
    </tr>
    <tr>
      <td><img src='https://lh3.googleusercontent.com/IjNNYzp_jJr-K_eO902epP7plqp4Nhc4A5afJgX97VZliqyWGkQSucfjqRbIkfyzMVQ' alt='' className='img-thumbnail' width={50} height={50}/><br/>C/C++</td>
      <td><img src='https://cdn-icons-png.flaticon.com/512/174/174881.png' alt='' className='img-thumbnail' width={50} height={50} /> <br/>Wordpress</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmO962KmJdNhGGZubJ92-ZNzW3sXUYMqYdffbCc0j0cn4A9R-ANdM0B15cz8nonwVnxBw&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Firestore (Firebase)</td>
      <td><img src='https://w7.pngwing.com/pngs/793/740/png-transparent-ubuntu-computer-icons-long-term-support-canonical-gifts-panels-shading-background-miscellaneous-orange-logo.png'alt='' className='img-thumbnail' width={50} height={30}/><br/>Ubuntu (Linux)</td>
      <td>Sublime</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII7YuKQd9b6BeukQ1nJIr-8XjdkScIcJC0w&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Communication</td>
    </tr>
    <tr>
      <td><img src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/php-512.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>PHP</td>
      <td></td>
      <td><img src='https://mpng.subpng.com/20180824/ktx/kisspng-mysql-workbench-computer-icons-logo-portable-netwo-thezedt-tech-tips-and-random-thoughts-5b80352110ca84.1955496015351288650688.jpg' alt='' className='img-thumbnail' width={90} height={50}/><br/>mySQL</td>
      <td><img src='https://gitlab.com/uploads/-/system/project/avatar/14611100/kali-logo.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>Kali (Linux)</td>
      <td>MS Dreamweaver</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYmXlDxJYljtnClQ-d7mf4LP6ou350laEqQ&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Time Management</td>
    </tr>
    <tr>
      <td><img src='https://img.icons8.com/color/480/nodejs.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>Node</td>
      <td></td>
      <td></td>
      <td></td>
      <td>Notepad ++</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKhECqj7SsKVF_Va98HvL-NXE-o8szZTGwg&usqp=CAU'  alt='' className='img-thumbnail' width={70} height={70}/>Problem Solving</td>
    </tr>
    <tr>
      <td><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>React Js</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><img src='https://cdn-icons-png.flaticon.com/512/1875/1875720.png' alt='' className='img-thumbnail' width={50} height={50} /><br/>Creative</td>
    </tr>
    <tr>
      <td><img src='https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic' alt='' className='img-thumbnail' width={70} height={70}/><br/>Express</td>     
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmZobPsrS4KS6zTC2OH0LAY8tj1YVIBrqS-6bPfad1BqCnErLO3XVOMaZxai-Yr_9MZU&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Flexible</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><img src='https://static.thenounproject.com/png/2486991-200.png'  alt='' className='img-thumbnail' width={50} height={50}/><br/>Quick Learner</td>
    </tr>
    <tr>
    <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><img src='https://i0.wp.com/cyscoaching.com/wp-content/uploads/2017/11/business_man_run_arrow_800_clr_17909.png?resize=180%2C221&ssl=1' alt='' className='img-thumbnail' width={50} height={50}/>Action Taker</td>
    </tr>
  </tbody>
</table>  */}
<table className="table my-5 text-center table-borderless fs-5">
<tr>
    <th scope="col" className='fst-italic'>Languages</th>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB1_1WTaqapSY09zqec_GgYSiivdAq5FnxQ&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>HTML/CSS</td>
      <td><img src='https://lh3.googleusercontent.com/IjNNYzp_jJr-K_eO902epP7plqp4Nhc4A5afJgX97VZliqyWGkQSucfjqRbIkfyzMVQ' alt='' className='img-thumbnail' width={50} height={50}/><br/>C/C++</td>
      <td><img src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/php-512.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>PHP</td>
      <td><img src='https://img.icons8.com/color/480/nodejs.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>Node Js</td>
      <td><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>React Js</td>
      {/* <td>VS Code <span className="text-success fs-5">&#x2a;</span></td> */}
    </tr>
    <tr>
    <th scope="col" className='fst-italic'>Designing</th>
      <td><img src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>Figma</td>
      <td><img src='https://cdn-icons-png.flaticon.com/512/174/174881.png' alt='' className='img-thumbnail' width={50} height={50} /> <br/>Wordpress</td>
      {/* <td>Sublime</td> */}
    </tr>
    <tr>
      <th scope="col" className='fst-italic'>Database</th>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQYe3jXYMhaR0WDRd-nd5sd3a5DmcD1DZr_iUNLQfZLW9DKIntXjqIBCpa2qaHzhXv-c&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50} /><br/>NoSQL (MongoDB)</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmO962KmJdNhGGZubJ92-ZNzW3sXUYMqYdffbCc0j0cn4A9R-ANdM0B15cz8nonwVnxBw&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Firestore (Firebase)</td>
      <td><img src='https://mpng.subpng.com/20180824/ktx/kisspng-mysql-workbench-computer-icons-logo-portable-netwo-thezedt-tech-tips-and-random-thoughts-5b80352110ca84.1955496015351288650688.jpg' alt='' className='img-thumbnail' width={90} height={50}/><br/>mySQL</td>
      {/* <td>MS Dreamweaver</td> */}
    </tr>
    <tr>
    <th scope="col" className='fst-italic'>OS</th>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnbYfCMm8TSfi6junV-KGKQxmdsPNkXoaNw&usqp=CAU' alt='' className='img-thumbnail' width={40} height={40}/><br/>Windows</td>
      <td><img src='https://w7.pngwing.com/pngs/793/740/png-transparent-ubuntu-computer-icons-long-term-support-canonical-gifts-panels-shading-background-miscellaneous-orange-logo.png'alt='' className='img-thumbnail' width={50} height={30}/><br/>Ubuntu (Linux)</td>
      <td><img src='https://gitlab.com/uploads/-/system/project/avatar/14611100/kali-logo.png' alt='' className='img-thumbnail' width={50} height={50}/><br/>Kali (Linux)</td><td></td>
      {/* <td>Notepad ++</td> */}
    </tr>
    <tr>
    <th scope="col" className='fst-italic'>Soft Skills</th>
      <td><img src='https://mpng.subpng.com/20180327/lxe/kisspng-teamwork-computer-icons-clip-art-teamwork-5aba19fa49a598.9082573415221457863017.jpg' alt='' className='img-thumbnail' width={50} height={50}/><br/>Teamwork</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII7YuKQd9b6BeukQ1nJIr-8XjdkScIcJC0w&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Communication</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII7YuKQd9b6BeukQ1nJIr-8XjdkScIcJC0w&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Communication</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYmXlDxJYljtnClQ-d7mf4LP6ou350laEqQ&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Time Management</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKhECqj7SsKVF_Va98HvL-NXE-o8szZTGwg&usqp=CAU'  alt='' className='img-thumbnail' width={70} height={70}/><br/>Problem Solving</td>
      <td><img src='https://cdn-icons-png.flaticon.com/512/1875/1875720.png' alt='' className='img-thumbnail' width={50} height={50} /><br/>Creative</td>
      <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmZobPsrS4KS6zTC2OH0LAY8tj1YVIBrqS-6bPfad1BqCnErLO3XVOMaZxai-Yr_9MZU&usqp=CAU' alt='' className='img-thumbnail' width={50} height={50}/><br/>Flexible</td>
      <td><img src='https://static.thenounproject.com/png/2486991-200.png'  alt='' className='img-thumbnail' width={50} height={50}/><br/>Quick Learner</td>
      <td><img src='https://i0.wp.com/cyscoaching.com/wp-content/uploads/2017/11/business_man_run_arrow_800_clr_17909.png?resize=180%2C221&ssl=1' alt='' className='img-thumbnail' width={50} height={50}/><br/>Action Taker</td>
    </tr>
    <tr>
      <td>{/*<img src='https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic' alt='' className='img-thumbnail' width={70} height={70}/><br/>Express*/}</td>     
      <td></td>
      <td></td>
      <td></td>
      {/* <td></td> */}
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
</table>
</div>
</div>
<hr />
    </>
  )
}
