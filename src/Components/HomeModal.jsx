import React from 'react';

const HomeModal = () => {
    return (
        <div className="modal micromodal-slide" id="modal-1" aria-hidden="true">
            <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
                <div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                    <header className="modal__header">
                        <h2 className="modal__title" id="modal-1-title">
                            <span>Contact</span> Us
                        </h2>
                        <button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
                    </header>
                    <form>
                        <main className="modal__content" id="modal-1-content">
                            <input className='form-input modal__input' type="text" name='name' placeholder='Your name' />
                            <input className='form-input modal__input' type="text" name='email' placeholder='Your phone' />
                            <textarea className='form-input modal__input' placeholder='Your message...'
                                rows={10} name="message"></textarea>
                        </main>
                        <footer className="modal__footer">
                            <button className="button"><span>Send Message</span></button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeModal;
