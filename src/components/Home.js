import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {

  constructor() {
    super();
    this.state = { jobs: [] };
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:1337/api/fetchjobs`);
    const json = await response.json();
    this.setState({ jobs: json.job });
    console.log(json)
  }


  render() {
    return (
      <div>
        <div>
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-full mx-auto">
              <div className="rounded-lg h-96 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="Home2.png" />
              </div>
            </div>
          </div>


          <section className="text-gray-600 body-font">
            <div className="container px-8 py-24 mx-auto">
              <div className="flex flex-col">
                <div className="h-1 bg-gray-200 rounded overflow-hidden">
                  <div className="w-24 h-full bg-indigo-500"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                  <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                  <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                </div>
              </div>

              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

              <ul className="cards">

                {this.state.jobs.map((item) => {

                  return (
                    <li>
                    <div  className="card">
                      <img src={item.img}  className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          <img className="card__thumb" src={item.img}  alt="" />
                          <div className="card__header-text">
                            <h3 className="card__title">{item.title}</h3>
                            <span className="card__status">                      </span>
                          </div>
                        </div>
                        <p className="card__description">
                        <div>
                        <ul>
                          {item.skills.map((it) => {
                            return (
                              <li>
                                • {it}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                        </p>
                      </div>
                    </div>
                  </li>
                  )
                })} 
              </ul>
              </div>

            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Home