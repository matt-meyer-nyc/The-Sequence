import React from 'react';
import axios from 'axios';
import AjaxHelper from '../utils/AjaxHelpers';

const CollectionContainer = React.createClass({

  render: function(){
    return(
      <div className="collection">

        <section>
          <span>
            <h1>Mind Bending</h1>
            <p>A personal & subjective review of films that left an impact on me throughout my life, from the 70s to present.</p>
            <p>By Malcoml Jones</p>
          </span>
        </section>

        <section>
          <p>30 films in this collections</p>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>dasdf</h3>
                    <p>asdf</p>
                  </section>
                </a>
              </li>
            </ul>
          </nav>
        </section>

      </div>
    )
  }
});

export default CollectionContainer;
