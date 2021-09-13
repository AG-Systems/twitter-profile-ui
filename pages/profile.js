import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter()
  return (
    <div className="col-xl-5 border border-left border-right px-0 feed" style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="p-3 border-bottom">
        <h4 className="d-flex align-items-center mb-0">
          Profile
        </h4>
      </div>
      <div>

      <div className="card white-card" id="navbar-card" style={{width: '100%', margin: '0px auto'}}>
        <i className="fas fa-redo" alt="Click on icon to refresh background image" style={{zIndex: 5, position: 'absolute', right: '0px', padding: '10px', textShadow: 'rgb(0, 0, 0) 0px 0px 3px', color: 'white'}} />
        <div className="card-img-top" id="background_img" style={{background: 'url("https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80") 0% 0% / cover', height: '200px'}} />
        <div className="card-body" style={{ padding: "1rem 1rem 0px 1rem" }}>
           <img alt="" className="card-img-profile" src="https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg" style={{height: '120px', width: '120px'}} />
           <h3 className="card-text mb-0" style={{fontFamily: '"Titillium Web"', color: 'rgb(28, 30, 32)'}}>Neil Chad</h3>
           <p className="card-text" style={{fontFamily: '"Titillium Web"', color: 'rgb(28, 30, 32)'}}>@username</p>
           <p className="card-text mb-0" style={{fontFamily: '"Titillium Web"', color: 'black'}}>Bio bio bio bio bio </p>
           <span style={{color: 'rgb(110, 118, 125)'}}><i className="fas fa-map-marker-alt" /> Earth </span>
           <br/>
           <br/>
              <div className="btn-group" style={{width: '100%'}}>
                  <a className={router.pathname === "/profile" ? "btn border-bottom-active" : "btn btn-navbar white-text" } href="/" style={{ paddingBottom: "15px" }}>
                    <span className="d-lg-none" style={{fontSize: '10px'}}>Tweets</span>
                    <span className="d-none d-lg-block">Tweets</span>
                  </a>
                  <a className="btn btn-navbar white-text" href="/" style={{ paddingBottom: "15px" }}>
                    <span className="d-lg-none" style={{fontSize: '10px'}}>Tweets & replies </span>
                    <span className="d-none d-lg-block">Tweets & replies</span>
                  </a>
                  <a className="btn btn-navbar white-text" href="/" style={{ paddingBottom: "15px" }}>
                    <span className="d-lg-none" style={{fontSize: '10px'}}>Media</span>
                    <span className="d-none d-lg-block">Media</span>
                  </a>
                  <a className="btn btn-navbar white-text" href="/" style={{ paddingBottom: "15px" }}>
                    <span className="d-lg-none" style={{fontSize: '10px'}}>Likes</span>
                    <span className="d-none d-lg-block">Likes</span>
                  </a>
              </div>
  </div>


      </div>
        <div>
          <div className="d-flex p-3 border-bottom">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (29).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href>
                  <h6 className="text-body">
                    Miley Cyrus
                    <span className="small text-muted font-weight-normal"> @mileycyrus</span>
                    <span className="small text-muted font-weight-normal"> • </span>
                    <span className="small text-muted font-weight-normal">2h</span>
                    <span><i className="fas fa-angle-down float-end" /></span>
                  </h6>
                </a>
                <p style={{lineHeight: '1.2'}}>
                  Lorem ipsum dolor, sit amet <a href>#consectetur</a> adipisicing elit.
                  Nobis assumenda eveniet ipsum libero mollitia vero doloremque
                  <a href>#perspiciatis</a> molestiae omnis, quam iure dicta reprehenderit
                  distinctio facere labore atque, sit <a href>#ratione</a> quo.
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                  <li>
                    <i className="far fa-comment" />
                  </li>
                  <li><i className="fas fa-retweet" /><span className="small ps-2">7</span></li>
                  <li><i className="far fa-heart" /><span className="small ps-2">35</span></li>
                  <li>
                    <i className="far fa-share-square" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (29).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Miley Cyrus
                    <span className="small text-muted font-weight-normal"> @mileycyrus</span>
                    <span className="small text-muted font-weight-normal"> • </span>
                    <span className="small text-muted font-weight-normal">3h</span>
                    <span><i className="fas fa-angle-down float-end" /></span>
                  </h6>
                </a>
                <p style={{lineHeight: '1.2'}}>
                  Nobis assumenda eveniet ipsum libero mollitia vero doloremque molestiae
                  reprehenderit.
                </p>
                <div className="card border mb-3 shadow-0" style={{maxWidth: '540px'}}>
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" alt="..." className="img-fluid rounded-left" />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <p className="card-text" style={{lineHeight: 1}}>
                          Title of the news
                        </p>
                        <p className="card-text small mb-0" style={{lineHeight: '1.2'}}>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </p>
                        <p className="card-text small mb-0" style={{lineHeight: '1.2'}}>
                          <i className="fas fa-link fa-xs pe-1" />example.pl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                  <li>
                    <i className="far fa-comment" />
                  </li>
                  <li><i className="fas fa-retweet" /><span className="small ps-2">51</span></li>
                  <li><i className="far fa-heart" /><span className="small ps-2">185</span></li>
                  <li>
                    <i className="far fa-share-square" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (22).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Bob Marley
                    <span className="small text-muted font-weight-normal"> @bobmarley</span>
                    <span className="small text-muted font-weight-normal"> • </span>
                    <span className="small text-muted font-weight-normal">5h</span>
                    <span><i className="fas fa-angle-down float-end" /></span>
                  </h6>
                </a>
                <p style={{lineHeight: '1.2'}}>
                  Lorem ipsum dolor, sit amet <a href>#consectetur</a> adipisicing elit.
                  Officiis, <a href>#repellat</a>. Error cumque temporibus eum pariatur
                  ducimus facere? Obcaecati fugit, nobis eos <a href>#deserunt</a> odit
                  libero voluptatibus, iste laudantium, tempore ratione ut.
                </p>
                <div className="card border mb-3 shadow-0" style={{maxWidth: '540px'}}>
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="..." className="img-fluid rounded-left" />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <p className="card-text" style={{lineHeight: 1}}>
                          Title of the news
                        </p>
                        <p className="card-text small mb-0" style={{lineHeight: '1.2'}}>
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </p>
                        <p className="card-text small mb-0" style={{lineHeight: '1.2'}}>
                          <i className="fas fa-link fa-xs pe-1" />example.pl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                  <li>
                    <i className="far fa-comment" />
                  </li>
                  <li><i className="fas fa-retweet" /><span className="small ps-2">8</span></li>
                  <li><i className="far fa-heart" /><span className="small ps-2">97</span></li>
                  <li>
                    <i className="far fa-share-square" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (24).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href>
                  <h6 className="text-body">
                    Anna Doe
                    <span className="small text-muted font-weight-normal"> @annadoe</span>
                    <span className="small text-muted font-weight-normal"> • </span>
                    <span className="small text-muted font-weight-normal">7h</span>
                    <span><i className="fas fa-angle-down float-end" /></span>
                  </h6>
                </a>
                <p style={{lineHeight: '1.2'}}>
                  Error cumque temporibus eum pariatur ducimus facere? Obcaecati fugit, nobis
                  eos <a href>#deserunt</a> odit libero voluptatibus, iste laudantium,
                  tempore ratione ut.
                </p>
                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid rounded mb-3" alt="..." />
                <ul className="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                  <li>
                    <i className="far fa-comment" />
                  </li>
                  <li><i className="fas fa-retweet" /><span className="small ps-2">11</span></li>
                  <li><i className="far fa-heart" /><span className="small ps-2">65</span></li>
                  <li>
                    <i className="far fa-share-square" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom mb-5">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (3).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href>
                  <h6 className="text-body">
                    Mark Twain
                    <span className="small text-muted font-weight-normal"> @marktawin</span>
                    <span className="small text-muted font-weight-normal"> • </span>
                    <span className="small text-muted font-weight-normal">10h</span>
                    <span><i className="fas fa-angle-down float-end" /></span>
                  </h6>
                </a>
                <p style={{lineHeight: '1.2'}}>
                  Obcaecati fugit, nobis eos odit libero voluptatibus, iste laudantium,
                  tempore ratione ut.
                </p>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe src="https://www.youtube.com/embed/vlDzYIIOYmM" title="YouTube video" allowFullScreen />
                </div>
                <ul className="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                  <li>
                    <i className="far fa-comment" />
                  </li>
                  <li><i className="fas fa-retweet" /><span className="small ps-2">34</span></li>
                  <li><i className="far fa-heart" /><span className="small ps-2">159</span></li>
                  <li>
                    <i className="far fa-share-square" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
