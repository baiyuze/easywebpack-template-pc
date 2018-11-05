'use strict';
import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
export default class List extends Component {
  componentWillMount() {
    axios.get('/api/article/list').then(function(response){
    }).catch(function (response){
      
    });

  }

  render() {
    return <div className="container smart-container">
      <div className="row row-offcanvas row-offcanvas-right">
        <div className="col-xs-12 col-sm-9">
          <ul className="smart-artiles" id="articleList">
            {this.props.list.map(function(item) {
              return <li key={item.id}>
                <div className="point">+{item.hits}</div>
                <div className="card">
                  <h2><a href={item.url} target="_blank">{item.title}</a></h2>
                  <div>
                    <ul className="actions">
                      <li>
                        <time className="timeago">{item.moduleName}</time>
                      </li>
                      <li className="tauthor">
                        <a href="#" target="_blank" className="get">Sky</a>
                      </li>
                      <li><a>+收藏</a></li>
                      <li>
                        <span className="timeago">{item.summary}</span>
                      </li>
                      <li>
                        <span className="timeago"></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  }
}