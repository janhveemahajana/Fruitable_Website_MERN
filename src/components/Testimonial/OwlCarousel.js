<OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav
    items={2}
    responsive={{
        0: { items: 1 },
        768: { items: 2 },
    }}
>
    {/* Testimonial Item 1 */}
    <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
            <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                    <img src="assets/img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="Client" />
                </div>
                <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Testimonial Item 2 */}
    <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
            <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                    <img src="assets/img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="Client" />
                </div>
                <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Add more testimonial items as needed */}
</OwlCarousel>
