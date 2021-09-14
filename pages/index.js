import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Feed() {
  return (
    <div className="col-md-5 border border-left border-right px-0 feed" style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="p-3 border-bottom">
        <h4 className="d-flex align-items-center mb-0">
          Home <i className="far fa-xs fa-star ms-auto text-primary" />
        </h4>
      </div>
      <div>
        <div className="card shadow-0">
          <div className="card-body border-bottom pb-2">
            <div className="d-flex">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
              <div className="d-flex align-items-center w-100 ps-3">
                <div className="w-100">
                  <input type="text" id="form143" className="form-control form-status border-0 py-1 px-0" placeholder="What's happening" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <ul className="list-unstyled d-flex flex-row ps-3 pt-3" style={{marginLeft: '50px'}}>
                <li>
                  <a href><i className="far fa-image pe-2" style={{ fontSize: "30px" }} /></a>
                </li>
                <li>
                  <a href><i className="fas fa-photo-video px-2" style={{ fontSize: "30px" }} /></a>
                </li>
                <li>
                  <a href><i className="fas fa-chart-bar px-2" style={{ fontSize: "35px" }} /></a>
                </li>
                <li>
                  <a href><i className="far fa-smile px-2" style={{ fontSize: "35px" }} /></a>
                </li>
                <li>
                  <a href><i className="far fa-calendar-check px-2" style={{ fontSize: "35px" }} /></a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-primary btn-rounded" style={{ borderRadius: "20px"}}>Tweet</button>
              </div>
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
                    <span><i className="fas fa-angle-down float-end" style={{ fontSize: "17px" }} /></span>
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
                    <i className="far fa-comment" style={{ fontSize: "17px" }} />
                  </li>
                  <li><i className="fas fa-retweet" style={{ fontSize: "17px" }} /><span className="small ps-2">7</span></li>
                  <li><i className="far fa-heart" style={{ fontSize: "17px" }} /><span className="small ps-2">35</span></li>
                  <li>
                    <i className="far fa-share-square" style={{ fontSize: "17px" }} />
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
