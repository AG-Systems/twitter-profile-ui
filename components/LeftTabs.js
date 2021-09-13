import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

function LeftTabs() {
  return (

      <div className="col-xl-3">
        <div className="list-group list-group-naked rounded-0 mt-1">
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <img src="https://www.nicepng.com/png/full/111-1111079_logo-templates-png-download-template-logo-png.png" height={25} alt="" loading="lazy" />
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3 active">
            <i className="fas fa-home fa-lg fa-fw me-3 text-primary" />
            <strong>Home</strong>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <i className="fas fa-hashtag fa-lg fa-fw me-3 text-primary" />
            <strong>Explore</strong>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <i className="far fa-bell fa-lg fa-fw me-3 text-primary" />
            <strong>Notifications</strong>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <i className="far fa-envelope fa-lg fa-fw me-3 text-primary" />
            <strong>Messages</strong>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <i className="far fa-bookmark fa-lg fa-fw me-3 text-primary" />
            <strong>Bookmarks</strong>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <i className="far fa-list-alt fa-lg fa-fw me-3 text-primary" />
            <strong>Lists</strong>
          </a>
          <a href="/profile" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <i className="far fa-user fa-lg fa-fw me-3 text-primary" />
            <strong>Profile</strong>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center py-3">
            <i className="fas fa-ellipsis-h fa-lg fa-fw me-3 text-primary" />
            <strong>More</strong>
          </a>
          <a className="btn btn-primary btn-block btn-rounded btn-lg ripple-surface mt-3" style={{ borderRadius: "20px"}}>
            Tweet
          </a>
        </div>
        <div className="list-group list-group-naked list-group-naked-dark rounded-0 mt-4" style={{ position: "fixed", bottom: "0px" }}>
          <a href="/profile" className="list-group-item list-group-item-action d-flex align-items-center py-2">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height={50} alt="" loading="lazy" />
            <div className="d-flex align-items-center w-100 ps-3">
              <div className="d-flex flex-column w-100">
                <span className="font-weight-bold">Maria Campbell</span>
                <span className="small">@mariacampbell</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-angle-down float-end" />
            </div>
          </a>
        </div>
      </div>
  )
}

export default LeftTabs
