import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <section
        className="search-banner text-white py-3 form-arka-plan"
        id="search-banner"
      >
        <div className="container py-5 my-5">
          <div className="row text-center pb-4">
            <div className="col-md-12">
              <h2 className="text-white siyad-cerceve">check,check,check</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card acik-renk-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <select name="" id="iller" className="form-control">
                          <option value="" selected>
                            1
                          </option>
                          <option value="">2</option>
                          <option value="">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBox;
