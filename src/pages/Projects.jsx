import React from 'react';
import '@styles/Projects.scss';
// import powerbi from '@logos/PowerBI.jpg';

//PROJECTS
import summation_of_sales from "@projects/summation_of_sales_per_year.jpg";
import the_best_company from "@projects/best_company_in_the_world.jpg";

import Footer from '@components/Footer';


const Projects = () => {
    return (
        <React.Fragment>
            <section className="projects">
                <div className="projects__title">
                    <h1>Projects</h1>
                    <h3>I have done projects such as Dashboards in Power BI and coding in JupyterNotebooks.</h3>
                </div>
            </section>

            {/* <section className="projects__types">
                <div className="projects__types--content">
                    <div className="projects__types--content--item">
                        <div className="projects__types--content--item--pic">
                            <img src={powerbi} className="" alt="" />
                        </div>
                        <p>Power BI Dashboards</p>
                    </div>
                </div>

                <div className='projects__types--content'>
                    <div className="projects__types--content--item">
                        <div className="projects__types--content--item--pic">
                            <img src={powerbi} className="" alt="" />
                        </div>
                        <p>Power BI Dashboards</p>
                    </div>
                </div>
            </section> */}

            <section className="project__item">
                <div className="project__item--content">
    
                    <div className='project__item--content--article'>

                        <div className='project__item--content--article--text'>
                            <h3>Massive Products - Explore Data Analytics - Python</h3>
                            <p>The dataset contains the sales record of mass products of two major supermarket brands in Colombia, including product names, subcategory, prices, among others. This notebook will be used to clean and explore the data to solve questions related to the revenue sales behavior of the different brands, subcategories and products. </p>
                        </div>    
                        
                        <div className="project__item--content--article--cover">
                            <div className="project__item--content--article--cover2">
                                <img src={summation_of_sales} className="" alt=""   />
                            </div>
                        </div>

                    </div>

                </div>


                <div className='project__item--content--article'>

                    <div className='project__item--content--article--text'>
                            <h3>Massive Products - Explore Data Analytics - Python</h3>
                            <p>The dataset contains the sales record of mass products of two major supermarket brands in Colombia, including product names, subcategory, prices, among others. This notebook will be used to clean and explore the data to solve questions related to the revenue sales behavior of the different brands, subcategories and products. </p>
                        </div>    
                        
                        <div className="project__item--content--article--cover">
                            <div className="project__item--content--article--cover2">
                                <img src={the_best_company} className="" alt=""   />
                            </div>
                        </div>

                    </div>

            </section>

            <Footer />


        </React.Fragment>
    );
}

export default Projects;