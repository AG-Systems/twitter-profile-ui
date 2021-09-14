import React from 'react'
import Head from 'next/head'

function RightTrends() {
  return (
    <div className="col-md-4">
      <div className="mt-2">
        <div className="input-group form-outline mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="fas fa-search" /></span>
          <input type="text" className="form-control" placeholder="Search" style={{ borderRadius: "20px"}}/>
        </div>
      </div>
      <div className="list-group list-group-flush mb-4">
        <h5 className="d-flex align-items-center list-group-item mb-0 py-3" aria-current="true">
          {/* Trends for you <i className="fas fa-xs fa-cog ms-auto text-primary" /> */}
          What’s happening
        </h5>
        <a href="#" className="list-group-item list-group-item-action d-flex flex-column">
          <span className="small">Trending in Poland <i className="fas fa-angle-down float-end" /></span>
          <span className="font-weight-bold">Dapibus ac facilisis in</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action d-flex flex-column">
          <span className="small">Music • Trends <i className="fas fa-angle-down float-end" /></span>
          <span className="font-weight-bold">Morbi leo risu</span>
          <span className="small">897 Tweets</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action d-flex flex-column">
          <span className="small">Music • Trends <i className="fas fa-angle-down float-end" /></span>
          <span className="font-weight-bold">Porta ac consectetur ac</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action d-flex flex-column">
          <span className="small">Trending in Poland <i className="fas fa-angle-down float-end" /></span>
          <span className="font-weight-bold">Vestibulum at eros</span>
          <span className="small">1,345 Tweets</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action d-flex flex-column">
          <span className="small">Trending in Poland <i className="fas fa-angle-down float-end" /></span>
          <span className="font-weight-bold">Lorem ipsum dolor</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 link-primary">
          Show more
        </a>
      </div>
      <div className="list-group list-group-flush mb-4">
        <h5 className="d-flex align-items-center list-group-item mb-0 py-3" aria-current="true">
          Who to follow
        </h5>
        <a href="#" className="list-group-item list-group-item-action d-flex">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
          <div className="d-flex align-items-center w-100 ps-3">
            <div className="d-flex flex-column w-100">
              <span className="font-weight-bold">Katy Perry <i className="fas fa-certificate text-primary" /></span>
              <span className="small">@katyperry</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">
              Follow
            </button>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action d-flex">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
          <div className="d-flex align-items-center w-100 ps-3">
            <div className="d-flex flex-column w-100">
              <span className="font-weight-bold">Justin Bieber <i className="fas fa-certificate text-primary" /></span>
              <span className="small">@justinbieber</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">
              Follow
            </button>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 link-primary">
          Show more
        </a>
      </div>
      <div>
        <div className="px-3 mb-4 pb-2">
          <a href className="text-muted small me-3">Terms</a>
          <a href className="text-muted small me-3">Privacy</a>
          <a href className="text-muted small me-3">Policy &amp; Safety</a>
          <a href className="text-muted small me-3">How YouTube works</a>
          <a href className="text-muted small me-3">Test new features</a>
          <a href className="text-muted small me-3">© 2020 MDBootstrap</a>
        </div>
      </div>
    </div>
  )
}

export default RightTrends
