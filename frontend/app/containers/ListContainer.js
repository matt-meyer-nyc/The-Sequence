import React from 'react';
import axios from 'axios';

import List from '../components/List';
import AjaxHelper from '../utils/AjaxHelpers';

const ListContainer = React.createClass({

  render: function(){
    return(
      <div className="movieList">
        <nav>
          <ul>

           <li>
             <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
               <section>
                 <h3>Mind Bending</h3>
                 <p>By Julio</p>
               </section>
             </a>
            </li>
            <li>
              <a href="#"><img src="http://static-api.guidebox.com/120214/thumbnails_movies_medium/1742-9559047115-2111936505-5514126518-medium-240x342-alt-.jpg" alt="" />
                <section>
                  <h3>Mind Bending</h3>
                  <p>By Julio</p>
                </section>
              </a>
             </li>
             <li>
               <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/47540-1077241851-4833500898-2842526008-medium-240x342.jpg" alt="" />
                 <section>
                   <h3>Mind Bending</h3>
                   <p>By Julio</p>
                 </section>
               </a>
              </li>

               <li>
                 <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                   <section>
                     <h3>Mind Bending</h3>
                     <p>By Julio</p>
                   </section>
                 </a>
                </li>
                <li>
                  <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                    <section>
                      <h3>Mind Bending</h3>
                      <p>By Julio</p>
                    </section>
                  </a>
                 </li>
                 <li>
                   <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                     <section>
                       <h3>Mind Bending</h3>
                       <p>By Julio</p>
                     </section>
                   </a>
                  </li>
                  <li>
                    <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                      <section>
                        <h3>Mind Bending</h3>
                        <p>By Julio</p>
                      </section>
                    </a>
                   </li>
                   <li>
                     <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                       <section>
                         <h3>Mind Bending</h3>
                         <p>By Julio</p>
                       </section>
                     </a>
                    </li>
                    <li>
                      <a href="#"><img src="http://static-api.guidebox.com/120214/thumbnails_movies_medium/1742-9559047115-2111936505-5514126518-medium-240x342-alt-.jpg" alt="" />
                        <section>
                          <h3>Mind Bending</h3>
                          <p>By Julio</p>
                        </section>
                      </a>
                     </li>
                     <li>
                       <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/47540-1077241851-4833500898-2842526008-medium-240x342.jpg" alt="" />
                         <section>
                           <h3>Mind Bending</h3>
                           <p>By Julio</p>
                         </section>
                       </a>
                      </li>

                       <li>
                         <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                           <section>
                             <h3>Mind Bending</h3>
                             <p>By Julio</p>
                           </section>
                         </a>
                        </li>
                        <li>
                          <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                            <section>
                              <h3>Mind Bending</h3>
                              <p>By Julio</p>
                            </section>
                          </a>
                         </li>
                         <li>
                           <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                             <section>
                               <h3>Mind Bending</h3>
                               <p>By Julio</p>
                             </section>
                           </a>
                          </li>
                          <li>
                            <a href="#"><img src="http://static-api.guidebox.com/thumbnails_movies_medium/7-58525852-2125613843-150082559-large-240x342.jpg" alt="" />
                              <section>
                                <h3>Mind Bending</h3>
                                <p>By Julio</p>
                              </section>
                            </a>
                           </li>
          </ul>
        </nav>
      </div>
    )
  }
});

export default ListContainer;
