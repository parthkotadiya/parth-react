// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { MdOutlineDesktopMac } from 'react-icons/md'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'

function App() {
  return (
    <>
      <div>
        <div className='demo1 sticky-top' >
          <div className='demo2'>
            <div className='demo2'>
              <img src='https://cdn-icons-png.flaticon.com/128/5968/5968762.png' width="80px" height="80px" />
            </div>
            <div className='demo3'>
              <button style={{ background: "none", border: "none" }} ><MdOutlineDesktopMac style={{ width: "50px", fontSize: "30px" }} /> |           </button>
              <button style={{ background: "none", border: "none" }} ><FaMobileAlt style={{ width: "50px", fontSize: "30px" }} />            </button>
            </div>
            <div className='demo3'>

              <h6 className='mt-4'>Click edit and create your own amazing website</h6><br />
              <a href='#' className='mt-4'> Read More </a><br />
              <button type='button' className='btn btn-primary rounded m-3'>Edit this site</button>
            </div>
          </div>

          <div className='demo5 '>
            <div className='demo7 container '>
              <input type='serch' placeholder='search' style={{ backgroundColor: 'black' }} className='demo6' />
              <div>
                <button style={{ background: "none", border: "none" }} ><FaFacebookF style={{ width: "30px", fontSize: "15px", color: 'white' }} />            </button>
                <button style={{ background: "none", border: "none" }} ><BsInstagram style={{ width: "30px", fontSize: "15px", color: 'white' }} />            </button>
                <button style={{ background: "none", border: "none" }} ><FaTwitter style={{ width: "30px", fontSize: "15px", color: 'white' }} />            </button>
                <button style={{ background: "none", border: "none" }} ><FaGithub style={{ width: "30px", fontSize: "15px", color: 'white' }} />            </button>



              </div>
            </div>
          </div>
          <div className='demo8'>
            <div className='demo7 container p-3'>
              <h3 style={{ color: 'black' }}>Turning Heads</h3>
              <div className='demo9'>
                <h5 style={{ color: 'chocolate' }} >Home</h5>
                <h5 className='demo10'>My BLog</h5>
                <h5 className='demo10' >About</h5>
                <h5 className='demo10'>Contact</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='demo7'>
          <div  >
            <img src='https://static.wixstatic.com/media/84770f_579889e3c7ab4551ac493b6e60ebc25a~mv2.jpg/v1/fill/w_631,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_579889e3c7ab4551ac493b6e60ebc25a~mv2.jpg'
              width='480px' height="640px" />
          </div>
          <div >
            <img src='https://static.wixstatic.com/media/75059a_a28bb23346c740cfa809bb26a81ce414~mv2.jpg/v1/fill/w_624,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75059a_a28bb23346c740cfa809bb26a81ce414~mv2.jpg'
              width='480px' height="640px" />
          </div>
          <div >
            <img src='https://static.wixstatic.com/media/84770f_c8617aa06c6e43f5a95ebf63003a2347~mv2.jpg/v1/fill/w_624,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_c8617aa06c6e43f5a95ebf63003a2347~mv2.jpg'
              width='480px' height="640px" />
          </div>

        </div>
        <div className='demo11' >
          <h1 style={{ width: '450px', backgroundColor: 'white', paddingTop: '5px' }}><b>My Life. My Blog. </b></h1>
        </div>
        <br />
        <div className='demo12'>
          <div className='demo13' >
            <div>
              <div className='demo14'>
                <img src="https://static.wixstatic.com/media/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg/v1/fill/w_268,h_358,fp_0.50_0.50,q_90,enc_auto/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg"
                />
                <div className='demo15' >
                  <h6 >Mar 22 - 2 Min</h6>
                  <div>
                    <p style={{ fontSize: '25px' }}>
                      Transform your winter blues into winter creativity
                    </p>
                    <p >Create a blog post subtitle that summarizes your post in a
                      few short, punchy sentences and</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className='demo14'>
                <img src="https://static.wixstatic.com/media/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg/v1/fill/w_268,h_358,fp_0.50_0.50,q_90,enc_auto/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg"
                />
                <div className='demo15' >
                  <h6 >Mar 22 - 2 Min</h6>
                  <div>
                    <p style={{ fontSize: '25px' }}>
                      5 reasons to wake up at 5am                    </p>
                    <p >Create a blog post subtitle that summarizes your post in a
                      few short, punchy sentences and</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className='demo14'>
                <img src="https://static.wixstatic.com/media/a27d24_77c3bdd084c14f50a13aa9b44485c2e3~mv2.jpg/v1/fill/w_268,h_358,fp_0.50_0.50,q_90,enc_auto/a27d24_77c3bdd084c14f50a13aa9b44485c2e3~mv2.jpg"
                />
                <div className='demo15' >
                  <h6 >Mar 22 - 2 Min</h6>
                  <div>
                    <p style={{ fontSize: '25px' }}>
                      How decluttering changed my life                    </p>
                    <p >Create a blog post subtitle that summarizes your post in a
                      few short, punchy sentences and</p>
                  </div>
                </div>
              </div>
              <br />
              <button type='button' className='btn  text-light demo21'><b>All Post </b></button>

            </div>
          </div>
          <div className='demo16'>
            <div className='demo17 text-center'>
              <h3>Let the posts</h3>
              <br />
              <h3>come to you.</h3>
              <br></br>
              <br></br>
              Email*
              <br></br>
              <input type='email' className='demo18' ></input>
              <br />
              <br />
              <button type='button' className='btn btn-light text-danger demo19'><b>Subscribe </b></button>
              <br />

            </div>
            <br />
            <br />
            <h4>Find me on Instagram</h4>
            <div className='demo20'>
              <div className='example'>
                <img src="https://gumtreeau-res.cloudinary.com/image/private/t_$_s-l800/gumtree/3ef03c3e-9162-41fe-b94b-a2e60ef314b9.jpg" width="200" height="200" />
                <div className='content'>
                  <div className='text'>
                    @wix: #wix,<br /> #website,<br /> #freewebsite,<br /> #websitetemplate, <br />#wix.com
                  </div>
                </div>
              </div>
              <div className='example'>
                <img src="https://img.freepik.com/free-photo/sad-thoughtful-little-puppy-basenji-breed-lays-bed-lazy-sunday-morning-looks-down-frowns-lonely-dog-waits-owner-home_346278-374.jpg?size=626&ext=jpg" width="200" height="200" />
                <div className='content'>
                  <div className='text'>
                    @wix: #wix,<br /> #website,<br /> #freewebsite,<br /> #websitetemplate, <br />#wix.com
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className='demo20'>
              <div className='example'>
                <img src="https://gumtreeau-res.cloudinary.com/image/private/t_$_s-l800/gumtree/3ef03c3e-9162-41fe-b94b-a2e60ef314b9.jpg" width="200" height="200" />
                <div className='content'>
                  <div className='text'>
                    @wix: #wix,<br /> #website,<br /> #freewebsite,<br /> #websitetemplate, <br />#wix.com
                  </div>
                </div>
              </div>
              <div className='example'>
                <img src="https://img.freepik.com/free-photo/sad-thoughtful-little-puppy-basenji-breed-lays-bed-lazy-sunday-morning-looks-down-frowns-lonely-dog-waits-owner-home_346278-374.jpg?size=626&ext=jpg" width="200" height="200" />
                <div className='content'>
                  <div className='text'>
                    @wix: #wix,<br /> #website,<br /> #freewebsite,<br /> #websitetemplate, <br />#wix.com
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className='demo20'>
              <div className='example'>
                <img src="https://gumtreeau-res.cloudinary.com/image/private/t_$_s-l800/gumtree/3ef03c3e-9162-41fe-b94b-a2e60ef314b9.jpg" width="200" height="200" />
                <div className='content'>
                  <div className='text'>
                    @wix: #wix,<br /> #website,<br /> #freewebsite,<br /> #websitetemplate, <br />#wix.com
                  </div>
                </div>
              </div>
              <div className='example'>
                <img src="https://img.freepik.com/free-photo/sad-thoughtful-little-puppy-basenji-breed-lays-bed-lazy-sunday-morning-looks-down-frowns-lonely-dog-waits-owner-home_346278-374.jpg?size=626&ext=jpg" width="200" height="200" />
                <div className='content'>
                  <div className='text'>
                    @wix: #wix,<br /> #website,<br /> #freewebsite,<br /> #websitetemplate, <br />#wix.com
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div>
              <button style={{ background: "none", border: "none" }} ><FaFacebookF style={{ width: "30px", fontSize: "15px" }} />            </button>
              <button style={{ background: "none", border: "none" }} ><BsInstagram style={{ width: "30px", fontSize: "15px" }} />            </button>
              <button style={{ background: "none", border: "none" }} ><FaTwitter style={{ width: "30px", fontSize: "15px" }} />            </button>
              <button style={{ background: "none", border: "none" }} ><FaGithub style={{ width: "30px", fontSize: "15px" }} />            </button>



            </div>
          </div>


        </div>
        <br />
        <div className='demo22'>
          <h1>Let me know what's on your mind</h1>
          <div className='demo24'>
            <div  className='demo25'>
              <h6>First Name</h6>

              <input type='text' className='demo23' />
              <br />
              <br/>
              <h6>Email*</h6>
              <input type="email" required className='demo23' />
            </div>
            <div className='demo25'>
              <h6>Last Name</h6>

              <input type='text' className='demo23' />
              <br />
              <br/>
              <h6>Leave us a message...</h6>
              <input type="text"  className='demo23' />
            </div>


          </div>
          <br/>
          <br/>
          <button type='button' className='btn  text-light demo21'><b>submit </b></button>

        </div>
        <div className='demo26'>
          © 2035 by Turning Heads. Powered and secured by <a href='#'style={{color:'white'}} >Wix</a> 

        </div>


      </div>


    </>
  );
}

export default App;
