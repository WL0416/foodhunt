import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <section className="search-banner py-3 form-arka-plan" id="search-banner">
        <div className="container py-5 my-5">
          <div className="row text-center pb-4">
            <div className="col-md-12">
              <h2 className="text-dark siyad-cerceve">
                Search Your Food Right Now!
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card acik-renk-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="h-100 input-group-prepend">
                        <label
                          htmlFor="inputGroupSelect01"
                          className="input-group-text"
                        >
                          WHEN
                        </label>
                        <select
                          name=""
                          id="inputGroupSelect01"
                          className="h-100 custom-select"
                        >
                          <option value="" selected>
                            Any particular day?
                          </option>
                          <option value="1">Monday</option>
                          <option value="2">Tuesday</option>
                          <option value="3">Wednesday</option>
                          <option value="4">Thurday</option>
                          <option value="5">Friday</option>
                          <option value="6">Saturday</option>
                          <option value="7">Sunday</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="h-100 input-group-prepend">
                        <label
                          htmlFor="inputGroupSelect02"
                          className="input-group-text"
                        >
                          WHERE
                        </label>
                        <input
                          id="inputGroupSelect02"
                          type="text"
                          className="h-100 form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group-prepend">
                        <button className="btn btn-danger" type="button">
                          Search!
                        </button>
                      </div>
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
