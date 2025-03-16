
import React from 'react';
import './common.css';
import { FaReply } from 'react-icons/fa';

const PostComment = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '19a4a8c0-40cc-4f60-89bc-047cb376e3a4');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      setTimeout(() => {
        setResult('');
      }, 2000);
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  const getResultStyle = () => {
    if (result === 'Sending....') {
      return { color: '#FE7F4C' };
    } else if (result === 'Form Submitted Successfully') {
      return { color: 'green' };
    } else {
      return {};
    }
  };
  return (
    <>
      <div className="post-comment">
        <div className="container post-container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 post-comment-content">
              <h3 className="post-title">03 Comments</h3>
              <ul>
                <li>
                  <div className="pb-comment-box">
                    <div className="pb-comment-info">
                      <div className="pb-comment-avatar">
                        <img
                          src="https://html.hixstudio.net/poorex-prev/assets/img/blog/author-1-1.png"
                          alt=""
                        />
                      </div>
                      <div className="pb-comment-name position-relative">
                        <h5>Mithcel Adnan</h5>
                        <div className="pb-comment-text">
                          <p>
                            Curabitur luctus nisl in justo maximus egestas.
                            Curabitur sit amet sapien vel nunc molestie pulvinar
                            at vitae quam. Aliquam lobortis nisi vitae congue
                            consectetur. Aliquam et quam non metus
                          </p>
                          <div className="pb-comment-reply">
                            <a href="#">
                              <FaReply style={{ marginRight: '1rem' }} /> Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="second-list">
                  <div className="pb-comment-box">
                    <div className="pb-comment-info d-flex align-items-center">
                      <div className="pb-comment-avatar">
                        <img
                          src="https://html.hixstudio.net/poorex-prev/assets/img/blog/author-1-1.png"
                          alt=""
                        />
                      </div>
                      <div className="pb-comment-name position-relative">
                        <h5>Mithcel Adnan</h5>
                        <div className="pb-comment-text">
                          <p>
                            Curabitur luctus nisl in justo maximus egestas.
                            Curabitur sit amet sapien vel nunc molestie pulvinar
                            at vitae quam. Aliquam lobortis nisi vitae congue
                            consectetur. Aliquam et quam non metus
                          </p>
                          <div className="pb-comment-reply">
                            <a href="#">
                              <FaReply style={{ marginRight: '1rem' }} /> Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="pb-comment-box">
                    <div className="pb-comment-info d-flex align-items-center">
                      <div className="pb-comment-avatar">
                        <img
                          src="https://html.hixstudio.net/poorex-prev/assets/img/blog/author-1-1.png"
                          alt=""
                        />
                      </div>
                      <div className="pb-comment-name position-relative">
                        <h5>Mithcel Adnan</h5>
                        <div className="pb-comment-text">
                          <p>
                            Curabitur luctus nisl in justo maximus egestas.
                            Curabitur sit amet sapien vel nunc molestie pulvinar
                            at vitae quam. Aliquam lobortis nisi vitae congue
                            consectetur. Aliquam et quam non metus
                          </p>
                          <div className="pb-comment-reply">
                            <a href="#">
                              <FaReply style={{ marginRight: '1rem' }} /> Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="post-comment-form-box">
              <h3 className="post-title">Write a comment</h3>
              <div className="post-comment-form col-lg-6">
                <form id="contact-form" onSubmit={onSubmit} className='my-2'>
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="postbox__comment-input">
                        <input
                          name="name"
                          type="text"
                          placeholder="your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="postbox__comment-input">
                        <input
                          name="email"
                          type="email"
                          placeholder="your mail"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="postbox__comment-input">
                        <textarea
                          name="message"
                          placeholder="Write Your Comment"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="postbox__comment-btn">
                        <button type="submit" className="donate-btn border-0">
                          Submit Your Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <span style={getResultStyle()} className='my-3'>{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComment;
